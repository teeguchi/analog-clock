/**
 * Default Dial
 */
const defaultDial = {
	dialBackground: null, // 文字盤の背景 function(ctx)
	quarterTrack: null, // 4分の1目盛り function(ctx, scale)
	hourTrack: null, // 時間目盛り function(ctx, scale)
	minuteTrack: null, // 分・秒目盛り function(ctx)
	dialRing: null, // 文字盤の外枠 function(ctx)
	needleColor: null // 針の色 function(ctx)
};

// 文字盤の背景 function(ctx)
defaultDial.dialBackground = function(ctx) {
	ctx.fillStyle = '#fffff9';
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2, true);
	ctx.fill();
};

// 4分の1目盛り function(ctx, scale)
defaultDial.quarterTrack = function(ctx, scale) {
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
	ctx.strokeStyle = '#281a14';
	ctx.fillStyle = '#281a14';
	
	// 目盛り
	ctx.lineCap = 'round';
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(0, -(r * 0.91));
	ctx.lineTo(0, -r);
	ctx.stroke();
	
	// 数字
	const fs = Math.floor(r * 0.18) > 12 ? Math.floor(r * 0.18) : 12;
	const hfs = fs / 2;
	ctx.font = fs + 'px Noto Serif JP';
	if (scale === 0) {
		ctx.textBaseline = 'middle';
		ctx.fillText('12', -hfs, -(r * 0.78), fs);
	} else if (scale === 15) {
		ctx.textBaseline = 'bottom';
		ctx.rotate(Math.PI / 180 * 270);
		ctx.fillText('3', (r * 0.76), hfs, fs);
	} else if (scale === 30) {
		ctx.textBaseline = 'middle';
		ctx.rotate(Math.PI / 180 * 180);
		ctx.fillText('6', -(hfs / 2), (r * 0.78), fs);
	} else if (scale === 45) {
		ctx.textBaseline = 'bottom';
		ctx.rotate(Math.PI / 180 * 90);
		ctx.fillText('9', -(r * 0.86), hfs, fs);
	}
};

// 時間目盛り function(ctx, scale)
defaultDial.hourTrack = function(ctx, scale) {
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
	ctx.strokeStyle = '#281a14';
	ctx.fillStyle = '#281a14';
	
	// 目盛り
	ctx.lineCap = 'round';
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(0, -(r * 0.91));
	ctx.lineTo(0, -r);
	ctx.stroke();
	
	// 数字
	const fs = Math.floor(r * 0.18) > 12 ? Math.floor(r * 0.18) : 12;
	ctx.font = fs + 'px Noto Serif JP';
	if (scale === 5) {
		ctx.rotate(Math.PI / 180 * 330);
		ctx.textBaseline = 'top';
		ctx.fillText('1', (r * 0.35), -(r * 0.78), fs);
	} else if (scale === 10) {
		ctx.rotate(Math.PI / 180 * 300);
		ctx.textBaseline = 'bottom';
		ctx.fillText('2', (r * 0.64), -(r * 0.32), fs);
	} else if (scale === 20) {
		ctx.rotate(Math.PI / 180 * 240);
		ctx.textBaseline = 'top';
		ctx.fillText('4', (r * 0.64), (r * 0.31), fs);
	} else if (scale === 25) {
		ctx.textBaseline = 'bottom';
		ctx.rotate(Math.PI / 180 * 210);
		ctx.fillText('5', (r * 0.35), (r * 0.77), fs);
	} else if (scale === 35) {
		ctx.textBaseline = 'top';
		ctx.rotate(Math.PI / 180 * 150);
		ctx.fillText('7', -(r * 0.46), (r * 0.57), fs);
	} else if (scale === 40) {
		ctx.rotate(Math.PI / 180 * 120);
		ctx.textBaseline = 'bottom';
		ctx.fillText('8', -(r * 0.75), (r * 0.47), fs);
	} else if (scale === 50) {
		ctx.rotate(Math.PI / 180 * 60);
		ctx.textBaseline = 'top';
		ctx.fillText('10', -(r * 0.75), -(r * 0.5), fs);
	} else if (scale === 55) {
		ctx.rotate(Math.PI / 180 * 30);
		ctx.textBaseline = 'top';
		ctx.fillText('11', -(r * 0.45), -(r * 0.77), fs);
	}
};

// 分・秒目盛り function(ctx)
defaultDial.minuteTrack = function(ctx) {
	ctx.strokeStyle = '#281a14';
	ctx.lineCap = 'round';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(0, -(r * 0.95));
	ctx.lineTo(0, -(r * 0.98));
	ctx.stroke();
};

// 文字盤の外枠 function(ctx)
defaultDial.dialRing = function(ctx) {
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
	ctx.strokeStyle = '#281a14';
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.arc(x, y, (r + 3), 0, Math.PI * 2, true);
	ctx.stroke();
};

// 針の色 function(ctx)
defaultDial.needleColor = function(ctx) {
	ctx.strokeStyle = '#281a14';
	ctx.fillStyle = '#281a14';
};

/**
 * Dark Dial
 */
const darkDial = Object.create(defaultDial);

// 文字盤の背景 function(ctx)
darkDial.dialBackground = function(ctx) {
	ctx.fillStyle = '#2b2b2b';
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2, true);
	ctx.fill();
};

// 4分の1目盛り function(ctx, scale)
darkDial.quarterTrack = function(ctx, scale) {
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
	ctx.strokeStyle = '#abb1ad';
	ctx.fillStyle = '#abb1ad';
	
	// 目盛り
	ctx.lineCap = 'round';
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.moveTo(0, -(r * 0.76));
	ctx.lineTo(0, -(r * 0.96));
	ctx.stroke();
};

// 時間目盛り function(ctx, scale)
darkDial.hourTrack = function(ctx, scale) {
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
	ctx.strokeStyle = '#abb1ad';
	ctx.fillStyle = '#abb1ad';
	
	// 目盛り
	ctx.lineCap = 'round';
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(0, -(r * 0.86));
	ctx.lineTo(0, -(r * 0.96));
	ctx.stroke();
};

// 分・秒目盛り function(ctx)
darkDial.minuteTrack = function(ctx) {
	ctx.strokeStyle = '#7b7c7d';
	ctx.lineCap = 'round';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(0, -(r * 0.94));
	ctx.lineTo(0, -(r * 0.96));
	ctx.stroke();
};

// 文字盤の外枠 function(ctx)
darkDial.dialRing = function(ctx) {
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
	ctx.strokeStyle = '#c0c5c2';
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.arc(x, y, (r + 3), 0, Math.PI * 2, true);
	ctx.stroke();
};

// 針の色 function(ctx)
darkDial.needleColor = function(ctx) {
	ctx.strokeStyle = '#c0c5c2';
	ctx.fillStyle = '#abb1ad';
};

/**
 * 文字盤の描画関数
 */
function dialRender(ctx, styleObj) {
	ctx.clearRect(0, 0, cw, ch); // 一旦削除
	ctx.save(); // 設定を保存
	
	// 文字盤の背景のスタイル
	styleObj.dialBackground(ctx);
	
	// 文字盤の目盛りの描画
	for (let i = 0; i < 60; i++) {
		ctx.save(); // 設定を保存
		
		ctx.translate(x, y);
		const j = i * 6;
		ctx.rotate((Math.PI / 180) * j);
		if (i % 15 === 0) {
			// 4分の1目盛りのスタイル
			styleObj.quarterTrack(ctx, i);
		} else if (i % 5 === 0) {
			// 時間目盛りのスタイル
			styleObj.hourTrack(ctx, i);
		} else {
			// 分・秒目盛りのスタイル
			styleObj.minuteTrack(ctx);
		}
		
		ctx.restore(); // 設定を戻す
	}
	
	// 文字盤の外枠のスタイル
	styleObj.dialRing(ctx);
	
	ctx.restore(); // 設定を戻す
}

/**
 * 時計を動かす関数
 */
function clockWork(ctx, styleObj) {
	// 現在時刻の取得
	const d = new Date();
	const h = d.getHours();
	const m = d.getMinutes();
	const s = d.getSeconds();
	const ms = d.getMilliseconds();
	
	// 針の動きの設定
	const angleH = (Math.PI * 2) / 12 * h + (Math.PI * 2) / 12 / 60 * m + (Math.PI * 2) / 12 / 60 / 60 * s;
	const angleM = (Math.PI * 2) / 60 * m + (Math.PI * 2) / 60 / 60 * s + (Math.PI * 2) / 60 / 60 / 1000 * ms;
	const angleS = (Math.PI * 2) / 60 * s + (Math.PI * 2) / 60 / 1000 * ms;
	
	// 時計の針の描画
	ctx.clearRect(0, 0, cw, ch); // 一旦削除
	drawClockHands(ctx, angleH, 'h', styleObj);
	drawClockHands(ctx, angleM, 'm', styleObj);
	drawClockHands(ctx, angleS, 's', styleObj);
}

/**
 * 時計の針の描画関数
 */
function drawClockHands(ctx, angle, hand, styleObj) {
	ctx.save(); // 設定を保存
	
	ctx.translate(x, y);
	ctx.rotate(angle);
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 2;
	ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
	
	if (hand === 'h') {
		// 時針
		ctx.lineCap = 'square';
		ctx.lineWidth = 8;
		ctx.beginPath();
		ctx.moveTo(2, -8);
		ctx.lineTo(-2, -8);
		ctx.lineTo(0, -(r * 0.68));
		ctx.closePath();
		ctx.stroke();
	} else if (hand === 'm') {
		// 分針
		ctx.lineCap = 'square';
		ctx.lineWidth = 6;
		ctx.beginPath();
		ctx.moveTo(1, -8);
		ctx.lineTo(-1, -8);
		ctx.lineTo(0, -(r * 0.9));
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0, 0, 8, 0, Math.PI * 2, true);
		ctx.stroke();
	} else if (hand === 's') {
		// 秒針
		ctx.lineCap = 'round';
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(0, 25);
		ctx.lineTo(0, -(r * 0.95));
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0, 0, 4, 0, Math.PI * 2, true);
		ctx.fill();
	}
	
	ctx.restore(); // 設定を戻す
}

/**
 * 初期値の設定
 */

// Canvas全体
const headerH = document.getElementById('clock-header').offsetHeight; // ヘッダー領域の高さ
const footerH = document.getElementById('clock-footer').offsetHeight; // フッター領域の高さ
const ulH = document.getElementById('change-style').offsetHeight; // ul要素の高さ
const cw = document.body.clientWidth; // 描画領域の幅
const ch = window.innerHeight - (headerH + footerH + ulH); // 描画領域の高さ
const canvasWrap = document.getElementById('canvas-wrap'); // 背景領域
canvasWrap.style.width = cw + 'px'; // 背景領域の幅
canvasWrap.style.height = ch + 'px'; // 背景領域の高さ
const x = cw / 2; // 中心のx座標
const y = ch / 2; // 中心のy座標
const r = cw < ch ? x - 14 : y - 14; // 文字盤の半径

// Canvas Dial
const canvasDial = document.getElementById('canvas-dial');
canvasDial.width = cw;
canvasDial.height = ch;
const ctxDial = canvasDial.getContext('2d'); // Canvas Dialのコンテキスト

// Canvas Needle
const canvasNeedle = document.getElementById('canvas-needle');
canvasNeedle.width = cw;
canvasNeedle.height = ch;
const ctxNeedle = canvasNeedle.getContext('2d'); // Canvas Needleのコンテキスト

// Font file
const fontFile = new FontFace(
	'Noto Serif JP',
	'url(NotoSerifJP-SemiBold.otf)'
);

// Title
const clockTitle = document.getElementById('clock-title');
const titleFs = Math.floor(r * 0.1) > 10 ? Math.floor(r * 0.1) : 10;
clockTitle.style.fontSize = titleFs + 'px';
const titleW = clockTitle.offsetWidth; // h1の幅
const titleH = clockTitle.offsetHeight; // h1の高さ
clockTitle.style.top = y + headerH - (titleH * 2) + 'px';
clockTitle.style.left = x - (titleW * 0.48) + 'px';

/**
 *	実行
 */
if (r > 60) {
	document.fonts.add(fontFile);
	fontFile.load().then(() => {
		dialRender(ctxDial, defaultDial);
		defaultDial.needleColor(ctxNeedle);
		document.body.classList.add('default-mode');
		setInterval(clockWork, 125, ctxNeedle);
		
		const styleBtn = document.getElementsByName('style-btn');
		styleBtn[0].checked = 'checked';
		
		for (btn of styleBtn) {
			btn.addEventListener('change', function(e) {
				if (e.target.value === 'dark') {
					dialRender(ctxDial, darkDial);
					darkDial.needleColor(ctxNeedle);
					
					const cName = document.body.className;
					const reCname = cName.replace(/[a-z]*-mode/g, 'dark-mode');
					document.body.className = reCname;					
				} else {
					dialRender(ctxDial, defaultDial);
					defaultDial.needleColor(ctxNeedle);
					
					const cName = document.body.className;
					const reCname = cName.replace(/[a-z]*-mode/g, 'default-mode');
					document.body.className = reCname;
				}
			});
		}
	});
} else {
	ctxNeedle.font = '12px Noto Serif JP';
	ctxNeedle.fillText('It\'s the limit.', (x - 35), y, 70);
}
