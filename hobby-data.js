  /* ═════════ РАСЧЁТ БАЛЛОВ ═════════ */
  function calculateScores() {
    var raw = {}, maxs = {};
    HOBBY_AXES.forEach(function(a) { raw[a.id] = 0; maxs[a.id] = 0; });

    HOBBY_ALL_QUESTIONS.forEach(function(q, qIdx) {
      var arr = state.answers[qIdx] || [];
      var isMulti = !!q.multi;
      var isOrder = q.type === 'order';

      // Максимум для вопроса
      HOBBY_AXES.forEach(function(axis) {
        var vals = q.a.map(function(v) { return v.v[axis.id] || 0; }).sort(function(x, y) { return y - x; });
        var maxForQ;
        if (isMulti) {
          maxForQ = 0;
          var take = q.multi || 1;
          for (var i = 0; i < take; i++) maxForQ += (vals[i] || 0);
        } else {
          maxForQ = vals[0] || 0;
        }
        maxs[axis.id] += maxForQ;
      });

      if (!arr || arr.length === 0) return;

      if (isOrder) {
        var firstIdx = arr[0];
        HOBBY_AXES.forEach(function(axis) {
          raw[axis.id] += q.a[firstIdx].v[axis.id] || 0;
        });
      } else {
        arr.forEach(function(idx) {
          HOBBY_AXES.forEach(function(axis) {
            raw[axis.id] += q.a[idx].v[axis.id] || 0;
          });
        });
      }
    });

    var scores = {};
    HOBBY_AXES.forEach(function(a) {
      var v = maxs[a.id] > 0 ? (raw[a.id] / maxs[a.id]) * 100 : 0;
      if (v > 100) v = 100;
      if (v < 0) v = 0;
      scores[a.id] = Math.round(v);
    });
    return scores;
  }

  /* ═════════ ПОИСК ХОББИ С ЖЁСТКИМИ ФИЛЬТРАМИ ═════════
     1) Отсеиваем всё, где критичные оси не совпадают
     2) Среди оставшихся ищем ближайший по косинусному сходству
  */
  function determineHobby(scores) {
    var candidates = HOBBY_RESULTS.filter(function(h) {
      var p = h.profile;
      // Спорт и хобби с высоким движением — отсеиваем, если человек не двигается
      if (p.P >= 80 && scores.P < 35) return false;
      // Уединённые хобби — отсеиваем, если человеку нужно общество
      if (p.S <= 15 && scores.S > 75) return false;
      // Социальные хобби — отсеиваем, если человек не социальный
      if (p.S >= 80 && scores.S < 35) return false;
      // Умные хобби — отсеиваем, если человек не любит думать
      if (p.T >= 90 && scores.T < 30) return false;
      // Творческие — отсеиваем, если человек не любит создавать
      if (p.C >= 90 && scores.C < 35) return false;
      return true;
    });

    if (candidates.length === 0) candidates = HOBBY_RESULTS;

    // Косинусное сходство: чем ближе направление — тем лучше
    var best = candidates[0];
    var bestSim = -1;
    candidates.forEach(function(h) {
      var dot = 0, magA = 0, magB = 0;
      HOBBY_AXES.forEach(function(a) {
        var u = (scores[a.id] || 0) + 1;
        var v = (h.profile[a.id] || 0) + 1;
        dot += u * v;
        magA += u * u;
        magB += v * v;
      });
      var sim = dot / (Math.sqrt(magA) * Math.sqrt(magB));
      if (sim > bestSim) {
        bestSim = sim;
        best = h;
      }
    });
    return best;
  }
