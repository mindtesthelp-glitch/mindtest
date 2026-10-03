<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Тест на тип личности MBTI — MindTest</title>
<link rel="icon" type="image/png" href="./favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/header.css">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: #faf7ff; color: #2e1a4d; line-height: 1.5; -webkit-font-smoothing: antialiased; min-height: 100vh; }
  a { text-decoration: none; color: inherit; }
  button { font-family: inherit; cursor: pointer; border: none; background: none; }
  svg { flex-shrink: 0; }

  .site-header { position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid #f0e8fb; }
  .header-inner { max-width: 100%; margin: 0 auto; padding: 14px 48px; display: flex; align-items: center; gap: 20px; }
  .logo { font-size: 22px; font-weight: 800; color: #5d2b9e; letter-spacing: -.5px; flex-shrink: 0; }
  .logo span { color: #a855f7; }
  .header-actions { margin-left: auto; display: flex; gap: 10px; align-items: center; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 18px; border-radius: 12px; font-size: 14px; font-weight: 700; transition: all .2s ease; white-space: nowrap; }
  .btn-back { background: #fff; color: #5d2b9e; border: 2px solid #a855f7; box-shadow: 0 4px 14px rgba(168,85,247,.15); }
  .btn-back:hover { background: #f5efff; border-color: #7c2fd4; transform: translateY(-2px); }
  .btn-back svg { width: 16px; height: 16px; }

  .test-wrap { max-width: 900px; margin: 0 auto; padding: 32px 24px 80px; }

  /* INTRO */
  .intro-card { background: #fff; border: 2px solid #f0e8fb; border-radius: 28px; overflow: hidden; box-shadow: 0 20px 50px rgba(93,43,158,.08); animation: q-in .5s cubic-bezier(.16,1,.3,1); max-width: 780px; margin: 0 auto; }
  @keyframes q-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

  .intro-hero {
    width: 100%;
    aspect-ratio: 1312 / 1225;
    background: linear-gradient(135deg, #2a1550, #4b1e8c);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  .intro-hero::before {
    content: '';
    position: absolute;
    top: -40%; right: -20%;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(168,85,247,.45), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }
  .intro-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; z-index: 2; }
  .intro-hero-placeholder { position: relative; z-index: 2; text-align: center; padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .intro-hero-placeholder svg { width: 64px; height: 64px; opacity: .5; }
  .intro-hero-placeholder p { font-size: 13px; opacity: .55; }

  .intro-body { padding: 40px 48px 40px; }
  .intro-cat { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 999px; background: #f5efff; color: #7c2fd4; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 16px; }
  .intro-cat svg { width: 14px; height: 14px; }
  .intro-title { font-size: clamp(26px, 4vw, 38px); font-weight: 900; letter-spacing: -1.2px; line-height: 1.15; color: #2e1a4d; margin-bottom: 12px; }
  .intro-subtitle { font-size: 17px; color: #7e6b94; line-height: 1.6; margin-bottom: 26px; }
  .intro-desc { font-size: 16px; color: #4b3b63; line-height: 1.75; margin-bottom: 28px; }
  .intro-desc p + p { margin-top: 12px; }

  .intro-meta { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px; }
  .intro-meta-item { display: inline-flex; align-items: center; gap: 8px; padding: 11px 18px; background: #faf7ff; border: 1.5px solid #f0e8fb; border-radius: 12px; font-size: 15px; font-weight: 600; color: #4b3b63; }
  .intro-meta-item svg { width: 17px; height: 17px; color: #a855f7; }

  .intro-start-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 20px; border-radius: 16px; background: linear-gradient(135deg,#7c2fd4,#a855f7); color: #fff; font-size: 18px; font-weight: 800; box-shadow: 0 10px 28px rgba(124,47,212,.35); transition: transform .2s; }
  .intro-start-btn:hover { transform: translateY(-2px); }
  .intro-start-btn svg { width: 20px; height: 20px; }

  /* QUESTION */
  .test-topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; font-size: 15px; color: #7e6b94; font-weight: 600; }
  .test-topbar b { color: #5d2b9e; font-weight: 800; }
  .test-progress { height: 10px; background: #f0e8fb; border-radius: 999px; overflow: hidden; margin-bottom: 36px; }
  .test-progress-fill { height: 100%; background: linear-gradient(135deg,#7c2fd4,#a855f7); border-radius: 999px; width: 0; transition: width .35s cubic-bezier(.16,1,.3,1); }

  .q-card { background: #fff; border: 2px solid #f0e8fb; border-radius: 24px; padding: 48px 44px 40px; box-shadow: 0 20px 50px rgba(93,43,158,.08); animation: q-in .35s cubic-bezier(.16,1,.3,1); }
  .q-num { display: inline-block; padding: 5px 12px; border-radius: 999px; background: #f5efff; color: #7c2fd4; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 18px; }
  .q-title { font-size: 24px; font-weight: 800; letter-spacing: -.5px; line-height: 1.35; margin-bottom: 30px; color: #2e1a4d; }
  .q-answers { display: flex; flex-direction: column; gap: 13px; }
  .q-answer { display: flex; align-items: flex-start; gap: 14px; padding: 20px 22px; background: #faf7ff; border: 2px solid #ece3fa; border-radius: 16px; font-size: 15.5px; font-weight: 500; color: #4b3b63; text-align: left; transition: all .2s; line-height: 1.5; }
  .q-answer:hover { border-color: #c9a9f0; background: #f5efff; transform: translateY(-1px); }
  .q-answer .q-radio { width: 22px; height: 22px; border-radius: 50%; border: 2px solid #d9c7f2; background: #fff; flex-shrink: 0; position: relative; transition: all .2s; margin-top: 1px; }
  .q-answer.selected { border-color: #a855f7; background: #f5efff; }
  .q-answer.selected .q-radio { border-color: #a855f7; }
  .q-answer.selected .q-radio::after { content: ''; position: absolute; inset: 4px; border-radius: 50%; background: linear-gradient(135deg,#7c2fd4,#a855f7); }

  .test-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 32px; gap: 14px; }
  .btn-nav { display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 16px 30px; border-radius: 14px; font-size: 16px; font-weight: 700; transition: all .2s; min-height: 56px; }
  .btn-nav svg { width: 20px; height: 20px; flex-shrink: 0; }
  .btn-prev { background: #fff; color: #5d2b9e; border: 2px solid #ece3fa; }
  .btn-prev:hover:not(:disabled) { border-color: #a855f7; background: #f5efff; }
  .btn-prev:disabled { opacity: .4; cursor: not-allowed; }
  .btn-next { background: linear-gradient(135deg,#7c2fd4,#a855f7); color: #fff; box-shadow: 0 8px 22px rgba(124,47,212,.35); }
  .btn-next:hover:not(:disabled) { transform: translateY(-2px); }
  .btn-next:disabled { opacity: .45; cursor: not-allowed; box-shadow: none; }

  /* RESULT */
  .result-card { background: #fff; border: 2px solid #f0e8fb; border-radius: 28px; overflow: hidden; box-shadow: 0 25px 60px rgba(93,43,158,.12); animation: q-in .5s cubic-bezier(.16,1,.3,1); max-width: 780px; margin: 0 auto; }

  .result-hero {
    width: 100%;
    aspect-ratio: 1110 / 1137;
    background: linear-gradient(135deg, #2a1550, #4b1e8c);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  .result-hero::before {
    content: '';
    position: absolute;
    top: -40%; right: -20%;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(168,85,247,.45), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }
  .result-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; z-index: 2; }
  .result-hero-placeholder { position: relative; z-index: 2; text-align: center; padding: 20px; }
  .result-type-big { font-size: 84px; font-weight: 900; letter-spacing: -3px; background: linear-gradient(135deg,#e9d5ff,#a855f7); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; line-height: 1; }

  .result-body { padding: 44px 48px 40px; }
  .result-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 999px; background: #f5efff; color: #7c2fd4; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .6px; margin-bottom: 16px; }
  .result-title { font-size: clamp(30px, 4.5vw, 44px); font-weight: 900; letter-spacing: -1.4px; line-height: 1.15; color: #2e1a4d; margin-bottom: 8px; }
  .result-tagline { font-size: 18px; color: #a855f7; font-weight: 700; margin-bottom: 8px; }
  .result-percent { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; background: #faf7ff; border: 1.5px solid #ece3fa; border-radius: 999px; font-size: 13px; font-weight: 600; color: #6b5b82; margin-bottom: 24px; }
  .result-percent b { color: #7c2fd4; font-weight: 800; }
  .result-desc { font-size: 16px; color: #4b3b63; line-height: 1.8; margin-bottom: 40px; }
  .result-desc p + p { margin-top: 14px; }

  .result-chart { display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; align-items: center; padding: 36px 26px; background: #faf7ff; border: 2px solid #f0e8fb; border-radius: 22px; margin-bottom: 36px; }
  .result-radar { display: flex; align-items: center; justify-content: center; }
  .result-radar svg { width: 100%; max-width: 400px; height: auto; display: block; }

  .result-bars { display: flex; flex-direction: column; gap: 20px; }
  .result-bar-head { display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; color: #4b3b63; margin-bottom: 8px; gap: 10px; }
  .result-bar-pair { letter-spacing: .3px; }
  .result-bar-pair .active { color: #7c2fd4; font-weight: 800; }
  .result-bar-pair .inactive { color: #b3a4c9; font-weight: 600; }
  .result-bar-name { color: #a855f7; font-weight: 800; }
  .result-bar-track { height: 8px; background: #f0e8fb; border-radius: 999px; overflow: hidden; display: flex; }
  .result-bar-side { height: 100%; transition: width .8s cubic-bezier(.16,1,.3,1); }
  .result-bar-side.lft { background: linear-gradient(90deg,#7c2fd4,#a855f7); }
  .result-bar-side.rgt { background: linear-gradient(90deg,#c9a9f0,#e2d4fa); }
  .result-bar-percent { font-size: 12px; color: #a898c2; font-weight: 700; margin-top: 4px; text-align: right; }

  /* ═════════ ЗНАМЕНИТОСТИ ═════════ */
  .result-famous { margin-bottom: 36px; }
  .result-famous-title { display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 800; color: #2e1a4d; margin-bottom: 20px; letter-spacing: -.3px; }
  .result-famous-title svg { width: 22px; height: 22px; color: #a855f7; }
  .result-famous-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .result-famous-card { background: #faf7ff; border: 2px solid #f0e8fb; border-radius: 16px; padding: 22px 16px 18px; text-align: center; transition: all .2s; }
  .result-famous-card:hover { border-color: #c9a9f0; transform: translateY(-3px); box-shadow: 0 10px 24px rgba(93,43,158,.08); }
  .result-famous-avatar { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #7c2fd4, #a855f7); color: #fff; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; box-shadow: 0 6px 16px rgba(124, 47, 212, 0.25); }
  .result-famous-avatar svg { width: 28px; height: 28px; color: #fff; }
  .result-famous-name { font-size: 14px; font-weight: 800; color: #2e1a4d; margin-bottom: 4px; line-height: 1.3; }
  .result-famous-note { font-size: 12px; color: #7e6b94; line-height: 1.4; }

  .result-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .btn-res { display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 17px 22px; border-radius: 14px; font-size: 15px; font-weight: 700; transition: all .2s; border: 2px solid transparent; }
  .btn-res svg { width: 18px; height: 18px; }
  .btn-res.primary { background: linear-gradient(135deg,#7c2fd4,#a855f7); color: #fff; box-shadow: 0 8px 22px rgba(124,47,212,.3); }
  .btn-res.primary:hover { transform: translateY(-2px); }
  .btn-res.outline { background: #fff; color: #5d2b9e; border-color: #ece3fa; }
  .btn-res.outline:hover { border-color: #a855f7; background: #f5efff; }

  .premium-rec { margin-top: 32px; background: linear-gradient(135deg,#2a1550,#4b1e8c); border-radius: 24px; padding: 40px 44px; color: #fff; position: relative; overflow: hidden; }
  .premium-rec::before { content: ''; position: absolute; top: -40%; right: -20%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(168,85,247,.4), transparent 70%); border-radius: 50%; pointer-events: none; }
  .premium-rec-inner { position: relative; z-index: 1; }
  .premium-rec-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
  .premium-rec-head-icon { width: 38px; height: 38px; border-radius: 11px; background: rgba(255,255,255,.12); display: flex; align-items: center; justify-content: center; color: #fbbf24; }
  .premium-rec-head-icon svg { width: 20px; height: 20px; }
  .premium-rec-head h3 { font-size: 22px; font-weight: 800; letter-spacing: -.3px; }
  .premium-rec-sub { font-size: 15px; color: #c4a9e8; margin-bottom: 26px; line-height: 1.55; }

  .premium-locked { background: rgba(255,255,255,.06); border: 1px dashed rgba(255,255,255,.22); border-radius: 16px; padding: 30px 26px; text-align: center; }
  .premium-locked-icon { width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #fbbf24; }
  .premium-locked-icon svg { width: 26px; height: 26px; }
  .premium-locked p { font-size: 15px; color: #c4a9e8; margin-bottom: 20px; line-height: 1.6; max-width: 480px; margin-left: auto; margin-right: auto; }
  .premium-locked .btn-premium-rec { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 12px; background: #fff; color: #5d2b9e; font-size: 15px; font-weight: 800; transition: transform .2s; }
  .premium-locked .btn-premium-rec:hover { transform: translateY(-2px); }
  .premium-locked .btn-premium-rec svg { width: 17px; height: 17px; }

  .toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(100px); padding: 14px 22px; background: #2e1a4d; color: #fff; border-radius: 14px; font-size: 14px; font-weight: 600; box-shadow: 0 12px 30px rgba(46,26,77,.35); z-index: 9999; opacity: 0; transition: all .3s cubic-bezier(.16,1,.3,1); pointer-events: none; }
  .toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }

  @media (max-width: 720px) {
    .header-inner { padding: 12px 16px; gap: 10px; }
    .logo { font-size: 20px; }
    .btn { padding: 9px 14px; font-size: 13px; }
    .btn-back span { display: none; }
    .btn-back { padding: 9px 12px; }
    .test-wrap { padding: 22px 16px 60px; }
    .intro-body { padding: 28px 22px 28px; }
    .q-card { padding: 28px 20px 24px; border-radius: 20px; }
    .q-title { font-size: 19px; margin-bottom: 22px; }
    .q-answer { padding: 15px 16px; font-size: 14px; border-radius: 14px; }
    .btn-nav { padding: 13px 20px; font-size: 14px; }
    .btn-nav svg { width: 18px; height: 18px; }
    .result-body { padding: 28px 22px 26px; }
    .result-chart { grid-template-columns: 1fr; gap: 26px; padding: 24px 20px; }
    .result-radar svg { max-width: 340px; }
    .result-actions { grid-template-columns: 1fr; }
    .premium-rec { padding: 28px 22px; border-radius: 20px; }
    .result-type-big { font-size: 64px; }
    .result-famous-grid { grid-template-columns: 1fr; gap: 10px; }
    .result-famous-card { display: flex; align-items: center; gap: 14px; text-align: left; padding: 16px; }
    .result-famous-avatar { margin: 0; flex-shrink: 0; width: 46px; height: 46px; }
    .result-famous-avatar svg { width: 22px; height: 22px; }
    .result-famous-title { font-size: 16px; margin-bottom: 14px; }
    .result-famous-title svg { width: 20px; height: 20px; }
  }
  @media (max-width: 480px) {
    .q-num { font-size: 11px; padding: 4px 10px; }
    .q-title { font-size: 17px; }
    .q-answer { font-size: 13.5px; padding: 14px 14px; }
    .q-answer .q-radio { width: 20px; height: 20px; }
    .test-nav { flex-direction: column-reverse; align-items: stretch; }
    .btn-nav { width: 100%; }
    .result-type-big { font-size: 48px; }
    .result-title { font-size: 24px; }
  }
</style>
</head>
<body>

<header class="site-header">
  <div class="header-inner">
    <a href="./" class="logo">Mind<span>Test</span></a>
    <div class="header-actions">
      <a href="catalog.html" class="btn btn-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span>К тестам</span>
      </a>
    </div>
  </div>
</header>

<main class="test-wrap">
  <div id="testRoot"></div>
</main>

<div class="toast" id="toast"></div>

<script src="mbti-data.js"></script>
<script>
(function() {
  'use strict';

  var root = document.getElementById('testRoot');
  var toastEl = document.getElementById('toast');

  var TEST_TITLE = 'Тест на тип личности: 16 типов MBTI — кто ты на самом деле?';
  var TEST_SUBTITLE = 'Ответь честно на 32 вопроса и узнай свой тип личности. Без правильных и неправильных ответов — только ты и твои предпочтения.';
  var TEST_DESC = [
    'MBTI — одна из самых известных систем описания личности в мире. Она разделяет людей по 4 шкалам: как ты берёшь энергию, как получаешь информацию, как принимаешь решения и как организуешь жизнь.',
    'В конце ты узнаешь свой тип из 16 возможных — например, INTJ, ENFP или ISTJ. Каждый тип — это не ярлык, а способ лучше понять свои сильные стороны и зоны роста.'
  ];
  var HERO_IMG = './mbti-hero.png';

  /* ═════════ SVG-ИКОНКИ ДЛЯ 16 ТИПОВ ═════════ */
  var TYPE_ICONS = {
    'INTJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    'INTP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
    'ENTJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    'ENTP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    'INFJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    'INFP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    'ENFJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    'ENFP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>',
    'ISTJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    'ISFJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'ESTJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    'ESFJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    'ISTP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    'ISFP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    'ESTP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    'ESFP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
  };

  var LETTERS = [
    { pair: 'E', opp: 'I' },
    { pair: 'S', opp: 'N' },
    { pair: 'T', opp: 'F' },
    { pair: 'J', opp: 'P' }
  ];

  var PAIR_LABELS = {
    'E': 'Экстраверт', 'I': 'Интроверт',
    'S': 'Сенсорик',   'N': 'Интуит',
    'T': 'Логик',      'F': 'Этик',
    'J': 'Судящий',    'P': 'Воспринимающий'
  };

  var state = {
    screen: 'intro',
    current: 0,
    answers: [],
    winner: null,
    scores: null
  };

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function() { toastEl.classList.remove('show'); }, 2400);
  }

  function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

  /* ═════════ INTRO ═════════ */
  function renderIntro() {
    state.screen = 'intro';
    state.current = 0;
    state.answers = new Array(MBTI_QUESTIONS.length).fill(null);
    state.winner = null;
    state.scores = null;

    var html = '';
    html += '<div class="intro-card">';
    html +=   '<div class="intro-hero">';
    html +=     '<img src="' + HERO_IMG + '" alt="" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">';
    html +=     '<div class="intro-hero-placeholder" style="display:none;">';
    html +=       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>';
    html +=       '<p>Место для картинки теста</p>';
    html +=     '</div>';
    html +=   '</div>';
    html +=   '<div class="intro-body">';
    html +=     '<div class="intro-cat">';
    html +=       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>';
    html +=       'Психология и характер';
    html +=     '</div>';
    html +=     '<h1 class="intro-title">' + escapeHtml(TEST_TITLE) + '</h1>';
    html +=     '<p class="intro-subtitle">' + escapeHtml(TEST_SUBTITLE) + '</p>';
    html +=     '<div class="intro-desc">';
    TEST_DESC.forEach(function(p) { html += '<p>' + escapeHtml(p) + '</p>'; });
    html +=     '</div>';
    html +=     '<div class="intro-meta">';
    html +=       '<div class="intro-meta-item">';
    html +=         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';
    html +=         MBTI_QUESTIONS.length + ' вопросов';
    html +=       '</div>';
    html +=       '<div class="intro-meta-item">';
    html +=         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
    html +=         '~8 минут';
    html +=       '</div>';
    html +=       '<div class="intro-meta-item">';
    html +=         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8 13 13.7 9 9.7 3 15.7"/></svg>';
    html +=         'Средняя сложность';
    html +=       '</div>';
    html +=     '</div>';
    html +=     '<button type="button" class="intro-start-btn" id="startBtn">';
    html +=       'Начать тест';
    html +=       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    html +=     '</button>';
    html +=   '</div>';
    html += '</div>';

    root.innerHTML = html;
    document.getElementById('startBtn').addEventListener('click', function() {
      state.screen = 'question';
      state.current = 0;
      renderQuestion();
      scrollTop();
    });
  }

  /* ═════════ QUESTION ═════════ */
  function renderQuestion() {
    var q = MBTI_QUESTIONS[state.current];
    var total = MBTI_QUESTIONS.length;
    var pct = ((state.current) / total) * 100;

    var html = '';
    html += '<div class="test-topbar">';
    html +=   '<div>Вопрос <b>' + (state.current + 1) + '</b> из ' + total + '</div>';
    html +=   '<div>MBTI</div>';
    html += '</div>';
    html += '<div class="test-progress"><div class="test-progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<div class="q-card">';
    html +=   '<span class="q-num">Вопрос ' + (state.current + 1) + '</span>';
    html +=   '<h2 class="q-title">' + escapeHtml(q.q) + '</h2>';
    html +=   '<div class="q-answers">';
    q.a.forEach(function(ans, idx) {
      var sel = state.answers[state.current] === idx ? ' selected' : '';
      html += '<button type="button" class="q-answer' + sel + '" data-idx="' + idx + '">';
      html +=   '<span class="q-radio"></span>';
      html +=   '<span>' + escapeHtml(ans.t) + '</span>';
      html += '</button>';
    });
    html +=   '</div>';
    html += '</div>';
    html += '<div class="test-nav">';
    html +=   '<button type="button" class="btn-nav btn-prev" id="prevBtn"' + (state.current === 0 ? ' disabled' : '') + '>';
    html +=     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
    html +=     'Назад';
    html +=   '</button>';
    var isLast = state.current === total - 1;
    html +=   '<button type="button" class="btn-nav btn-next" id="nextBtn"' + (state.answers[state.current] === null ? ' disabled' : '') + '>';
    html +=     (isLast ? 'Завершить' : 'Далее');
    html +=     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    html +=   '</button>';
    html += '</div>';

    root.innerHTML = html;

    root.querySelectorAll('.q-answer').forEach(function(el) {
      el.addEventListener('click', function() {
        var idx = parseInt(el.getAttribute('data-idx'), 10);
        state.answers[state.current] = idx;
        root.querySelectorAll('.q-answer').forEach(function(a) { a.classList.remove('selected'); });
        el.classList.add('selected');
        var nextBtn = document.getElementById('nextBtn');
        if (nextBtn) nextBtn.disabled = false;
      });
    });

    var prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        if (state.current > 0) { state.current--; renderQuestion(); scrollTop(); }
      });
    }

    var nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        if (state.answers[state.current] === null) return;
        if (state.current < total - 1) {
          state.current++;
          renderQuestion();
          scrollTop();
        } else {
          finishTest();
        }
      });
    }
  }

  function calculateScores() {
    var scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    state.answers.forEach(function(ansIdx, qIdx) {
      if (ansIdx === null) return;
      var v = MBTI_QUESTIONS[qIdx].a[ansIdx].v;
      if (v === null) {
        var q = MBTI_QUESTIONS[qIdx];
        var letters = q.a.map(function(a) { return a.v; }).filter(function(x) { return x; });
        var uniq = letters.filter(function(x, i, arr) { return arr.indexOf(x) === i; });
        uniq.forEach(function(letter) { scores[letter] += 0.5; });
      } else {
        scores[v] += 1;
      }
    });
    return scores;
  }

  function determineType(scores) {
    var result = '';
    LETTERS.forEach(function(pair) {
      result += (scores[pair.pair] >= scores[pair.opp]) ? pair.pair : pair.opp;
    });
    return result;
  }

  function finishTest() {
    state.scores = calculateScores();
    state.winner = determineType(state.scores);
    state.screen = 'result';
    renderResult();
    scrollTop();
  }

  /* ═════════ RESULT ═════════ */
  function renderResult() {
    var type = state.winner;
    var data = MBTI_TYPES[type];
    var scores = state.scores;

    var html = '';
    html += '<div class="result-card">';
    html += '<div class="result-hero">';
    html +=   '<img src="./mbti-' + type + '.png" alt="" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';">';
    html +=   '<div class="result-hero-placeholder" style="display:none;">';
    html +=     '<div class="result-type-big">' + type + '</div>';
    html +=   '</div>';
    html += '</div>';
    html += '<div class="result-body">';
    html +=   '<span class="result-badge">Твой тип</span>';
    html +=   '<h1 class="result-title">' + type + ' — ' + escapeHtml(data.name) + '</h1>';
    html +=   '<p class="result-tagline">' + escapeHtml(data.tagline) + '</p>';
    html +=   '<div class="result-percent">Такой тип встречается примерно у <b>' + escapeHtml(data.percent) + '</b> людей в мире</div>';
    html +=   '<div class="result-desc">';
    data.desc.forEach(function(p) { html += '<p>' + escapeHtml(p) + '</p>'; });
    html +=   '</div>';

    html +=   '<div class="result-chart">';
    html +=     '<div class="result-radar">' + buildRadar(scores) + '</div>';
    html +=     '<div class="result-bars">';
    LETTERS.forEach(function(pair) {
      var leftScore = scores[pair.pair];
      var rightScore = scores[pair.opp];
      var totalPair = leftScore + rightScore;
      var leftPct = totalPair > 0 ? Math.round(leftScore / totalPair * 100) : 50;
      var rightPct = 100 - leftPct;
      var leading = leftScore >= rightScore ? pair.pair : pair.opp;

      html += '<div class="result-bar">';
      html +=   '<div class="result-bar-head">';
      html +=     '<span class="result-bar-pair"><span class="' + (leading === pair.pair ? 'active' : 'inactive') + '">' + pair.pair + '</span> · <span class="' + (leading === pair.opp ? 'active' : 'inactive') + '">' + pair.opp + '</span></span>';
      html +=     '<span class="result-bar-name">' + PAIR_LABELS[leading] + '</span>';
      html +=   '</div>';
      html +=   '<div class="result-bar-track">';
      html +=     '<div class="result-bar-side lft" style="width:' + leftPct + '%"></div>';
      html +=     '<div class="result-bar-side rgt" style="width:' + rightPct + '%"></div>';
      html +=   '</div>';
      html +=   '<div class="result-bar-percent">' + leftPct + '% / ' + rightPct + '%</div>';
      html += '</div>';
    });
    html +=     '</div>';
    html +=   '</div>';

    /* ═════════ БЛОК ЗНАМЕНИТОСТЕЙ С SVG-ИКОНКАМИ ═════════ */
    if (data.famous && data.famous.length) {
      var icon = TYPE_ICONS[type] || '';
      html +=   '<div class="result-famous">';
      html +=     '<div class="result-famous-title">';
      html +=       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
      html +=       'Известные представители типа';
      html +=     '</div>';
      html +=     '<div class="result-famous-grid">';
      data.famous.forEach(function(person) {
        html += '<div class="result-famous-card">';
        html +=   '<div class="result-famous-avatar">' + icon + '</div>';
        html +=   '<div>';
        html +=     '<div class="result-famous-name">' + escapeHtml(person.name) + '</div>';
        html +=     '<div class="result-famous-note">' + escapeHtml(person.note) + '</div>';
        html +=   '</div>';
        html += '</div>';
      });
      html +=     '</div>';
      html +=   '</div>';
    }

    html +=   '<div class="result-actions">';
    html +=     '<button type="button" class="btn-res primary" id="againBtn">';
    html +=       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>';
    html +=       'Пройти ещё раз';
    html +=     '</button>';
    html +=     '<button type="button" class="btn-res outline" id="shareBtn">';
    html +=       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';
    html +=       'Поделиться';
    html +=     '</button>';
    html +=     '<button type="button" class="btn-res outline" id="saveBtn">';
    html +=       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>';
    html +=       'Сохранить';
    html +=     '</button>';
    html +=     '<a href="catalog.html" class="btn-res outline">';
    html +=       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
    html +=       'К тестам';
    html +=     '</a>';
    html +=   '</div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="premium-rec">';
    html +=   '<div class="premium-rec-inner">';
    html +=     '<div class="premium-rec-head">';
    html +=       '<div class="premium-rec-head-icon">';
    html +=         '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>';
    html +=       '</div>';
    html +=       '<h3>Личные рекомендации</h3>';
    html +=     '</div>';
    html +=     '<p class="premium-rec-sub">Что делать с твоим типом: что развивать, что почитать и куда двигаться дальше.</p>';
    html +=     '<div class="premium-locked">';
    html +=       '<div class="premium-locked-icon">';
    html +=         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
    html +=       '</div>';
    html +=       '<p>Этот блок доступен только с Premium-подпиской. Открой персональные советы, подборку книг и рекомендации по развитию для своего типа.</p>';
    html +=       '<button type="button" class="btn-premium-rec" id="premiumBtn">';
    html +=         'Оформить Premium';
    html +=         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    html +=       '</button>';
    html +=     '</div>';
    html +=   '</div>';
    html += '</div>';

    root.innerHTML = html;

    document.getElementById('againBtn').addEventListener('click', function() {
      renderIntro();
      scrollTop();
    });
    document.getElementById('shareBtn').addEventListener('click', shareResult);
    document.getElementById('saveBtn').addEventListener('click', saveResult);
    var premiumBtn = document.getElementById('premiumBtn');
    if (premiumBtn) premiumBtn.addEventListener('click', function() { window.location.href = './#premium'; });
  }

  function buildRadar(scores) {
    var size = 360;
    var cx = size / 2;
    var cy = size / 2;
    var R = 110;

    var angles = [-90, 0, 90, 180];
    var pairs = [
      { a: 'E', b: 'I' },
      { a: 'S', b: 'N' },
      { a: 'T', b: 'F' },
      { a: 'J', b: 'P' }
    ];

    var points = pairs.map(function(p, i) {
      var total = scores[p.a] + scores[p.b];
      var lead = scores[p.a] >= scores[p.b] ? p.a : p.b;
      var leadScore = scores[lead];
      var share = total > 0 ? leadScore / total : 0.5;
      var r = R * (0.15 + 0.85 * share);
      var rad = angles[i] * Math.PI / 180;
      return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad), lead: lead, angle: angles[i] };
    });

    var polyPoints = points.map(function(p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');

    var gridLines = '';
    [0.2, 0.4, 0.6, 0.8, 1.0].forEach(function(level) {
      var gp = angles.map(function(a) {
        var rad = a * Math.PI / 180;
        return (cx + R * level * Math.cos(rad)).toFixed(1) + ',' + (cy + R * level * Math.sin(rad)).toFixed(1);
      }).join(' ');
      gridLines += '<polygon points="' + gp + '" fill="none" stroke="#ece3fa" stroke-width="1"/>';
    });

    var axesLines = '';
    angles.forEach(function(a) {
      var rad = a * Math.PI / 180;
      axesLines += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + R * Math.cos(rad)).toFixed(1) + '" y2="' + (cy + R * Math.sin(rad)).toFixed(1) + '" stroke="#ece3fa" stroke-width="1"/>';
    });

    var labels = '';
    points.forEach(function(p) {
      var rad = p.angle * Math.PI / 180;
      var lx = cx + (R + 58) * Math.cos(rad);
      var ly = cy + (R + 42) * Math.sin(rad);
      var anchor = 'middle';
      if (Math.abs(Math.cos(rad)) > 0.5) anchor = Math.cos(rad) > 0 ? 'start' : 'end';
      var dy = 0;
      if (Math.sin(rad) > 0.5) dy = 18;
      if (Math.sin(rad) < -0.5) dy = -24;

      labels += '<text x="' + lx.toFixed(1) + '" y="' + (ly + dy).toFixed(1) + '" text-anchor="' + anchor + '" font-family="Inter, sans-serif" font-size="26" font-weight="900" fill="#7c2fd4">' + p.lead + '</text>';
      labels += '<text x="' + lx.toFixed(1) + '" y="' + (ly + dy + 18).toFixed(1) + '" text-anchor="' + anchor + '" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#6b5b82">' + PAIR_LABELS[p.lead] + '</text>';
    });

    var dots = '';
    points.forEach(function(p) {
      dots += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="6" fill="#7c2fd4" stroke="#fff" stroke-width="2.5"/>';
    });

    var svg = '';
    svg += '<svg viewBox="-140 -60 620 480" xmlns="http://www.w3.org/2000/svg">';
    svg +=   gridLines;
    svg +=   axesLines;
    svg +=   '<polygon points="' + polyPoints + '" fill="rgba(168,85,247,.35)" stroke="#7c2fd4" stroke-width="2.5" stroke-linejoin="round"/>';
    svg +=   dots;
    svg +=   labels;
    svg += '</svg>';
    return svg;
  }

  async function shareResult() {
    var type = state.winner;
    var data = MBTI_TYPES[type];
    var url = location.origin + location.pathname + '?type=' + type;
    var text = 'Мой тип личности по MBTI — ' + type + ' (' + data.name + '). А ты кто?';
    if (navigator.share) {
      try { await navigator.share({ title: 'Мой результат MBTI — MindTest', text: text, url: url }); return; }
      catch (e) { if (e && e.name === 'AbortError') return; }
    }
    try { await navigator.clipboard.writeText(text + '\n' + url); showToast('Ссылка скопирована'); }
    catch (e) { showToast('Не удалось поделиться'); }
  }

  function saveResult() {
    try {
      var key = 'mindtest_saved_results';
      var list = [];
      try { list = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { list = []; }
      var type = state.winner;
      var data = MBTI_TYPES[type];
      list = list.filter(function(item) { return item.test !== 'mbti'; });
      list.unshift({
        test: 'mbti',
        testName: 'MBTI — 16 типов личности',
        result: type,
        resultName: data.name,
        date: new Date().toISOString()
      });
      list = list.slice(0, 100);
      localStorage.setItem(key, JSON.stringify(list));
      showToast('Результат сохранён');
    } catch (e) { showToast('Не удалось сохранить'); }
  }

  if (typeof MBTI_QUESTIONS === 'undefined' || !Array.isArray(MBTI_QUESTIONS) || MBTI_QUESTIONS.length === 0) {
    root.innerHTML = '<div style="padding:60px 20px; text-align:center; color:#7e6b94;">Не удалось загрузить данные теста. Проверьте файл <b>mbti-data.js</b>.</div>';
    return;
  }
  renderIntro();
})();
</script>

</body>
</html>
