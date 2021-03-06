// index.js
const express   = require('express');
const router = express.Router();
const auth          =   require("./Auth");

const init          =   require("./Init");
const exceptions    =   require("./Exceptions");
const map           =   require("./Map");
const team          =   require("./Team");
const guide         =   require("./Guide");
const video         =   require("./Video");
const screenshot    =   require("./Screenshot");
const question    =   require("./Question");

// 인증(로그인 / 로그아웃 , 토큰 발행)
router.use('/auth', auth);

router.use("/video", video);

// 지도관리
router.use('/map', map);

// 가이드관리
router.use('/guide', guide);

// API 관리
router.use('/init', init);

// 오류 관리 
router.use('/exceptions', exceptions);

// 팀관리 
router.use('/team', team);

// 스크린샷
router.use("/screenshot", screenshot);

// 문제 관리 
router.use("/question", question);

module.exports = router;
