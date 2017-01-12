/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icomoon-home' : '&#x21;',
			'icomoon-home-2' : '&#x22;',
			'icomoon-home-3' : '&#x23;',
			'icomoon-home-4' : '&#x24;',
			'icomoon-home-5' : '&#x25;',
			'icomoon-home-6' : '&#x26;',
			'icomoon-home-7' : '&#x27;',
			'icomoon-home-8' : '&#x28;',
			'icomoon-home-9' : '&#x29;',
			'icomoon-home-10' : '&#x2a;',
			'icomoon-home-11' : '&#x2b;',
			'icomoon-office' : '&#x2c;',
			'icomoon-newspaper' : '&#x2d;',
			'icomoon-pencil' : '&#x2e;',
			'icomoon-pencil-2' : '&#x2f;',
			'icomoon-pencil-3' : '&#x30;',
			'icomoon-pencil-4' : '&#x31;',
			'icomoon-pencil-5' : '&#x32;',
			'icomoon-pencil-6' : '&#x33;',
			'icomoon-quill' : '&#x34;',
			'icomoon-quill-2' : '&#x35;',
			'icomoon-quill-3' : '&#x36;',
			'icomoon-pen' : '&#x37;',
			'icomoon-pen-2' : '&#x38;',
			'icomoon-pen-3' : '&#x39;',
			'icomoon-pen-4' : '&#x3a;',
			'icomoon-pen-5' : '&#x3b;',
			'icomoon-marker' : '&#x3c;',
			'icomoon-home-12' : '&#x3d;',
			'icomoon-marker-2' : '&#x3e;',
			'icomoon-blog' : '&#x3f;',
			'icomoon-blog-2' : '&#x40;',
			'icomoon-brush' : '&#x41;',
			'icomoon-palette' : '&#x42;',
			'icomoon-palette-2' : '&#x43;',
			'icomoon-eyedropper' : '&#x44;',
			'icomoon-eyedropper-2' : '&#x45;',
			'icomoon-droplet' : '&#x46;',
			'icomoon-droplet-2' : '&#x47;',
			'icomoon-droplet-3' : '&#x48;',
			'icomoon-droplet-4' : '&#x49;',
			'icomoon-paint-format' : '&#x4a;',
			'icomoon-paint-format-2' : '&#x4b;',
			'icomoon-image' : '&#x4c;',
			'icomoon-image-2' : '&#x4d;',
			'icomoon-image-3' : '&#x4e;',
			'icomoon-images' : '&#x4f;',
			'icomoon-image-4' : '&#x50;',
			'icomoon-image-5' : '&#x51;',
			'icomoon-image-6' : '&#x52;',
			'icomoon-images-2' : '&#x53;',
			'icomoon-image-7' : '&#x54;',
			'icomoon-camera' : '&#x55;',
			'icomoon-camera-2' : '&#x56;',
			'icomoon-camera-3' : '&#x57;',
			'icomoon-camera-4' : '&#x58;',
			'icomoon-music' : '&#x59;',
			'icomoon-music-2' : '&#x5a;',
			'icomoon-music-3' : '&#x5b;',
			'icomoon-music-4' : '&#x5c;',
			'icomoon-music-5' : '&#x5d;',
			'icomoon-music-6' : '&#x5e;',
			'icomoon-piano' : '&#x5f;',
			'icomoon-guitar' : '&#x60;',
			'icomoon-headphones' : '&#x61;',
			'icomoon-headphones-2' : '&#x62;',
			'icomoon-play' : '&#x63;',
			'icomoon-play-2' : '&#x64;',
			'icomoon-movie' : '&#x65;',
			'icomoon-movie-2' : '&#x66;',
			'icomoon-movie-3' : '&#x67;',
			'icomoon-film' : '&#x68;',
			'icomoon-film-2' : '&#x69;',
			'icomoon-film-3' : '&#x6a;',
			'icomoon-film-4' : '&#x6b;',
			'icomoon-camera-5' : '&#x6c;',
			'icomoon-camera-6' : '&#x6d;',
			'icomoon-camera-7' : '&#x6e;',
			'icomoon-camera-8' : '&#x6f;',
			'icomoon-camera-9' : '&#x70;',
			'icomoon-dice' : '&#x71;',
			'icomoon-gamepad' : '&#x72;',
			'icomoon-gamepad-2' : '&#x73;',
			'icomoon-gamepad-3' : '&#x74;',
			'icomoon-pacman' : '&#x75;',
			'icomoon-spades' : '&#x76;',
			'icomoon-clubs' : '&#x77;',
			'icomoon-diamonds' : '&#x78;',
			'icomoon-king' : '&#x79;',
			'icomoon-queen' : '&#x7a;',
			'icomoon-rock' : '&#x7b;',
			'icomoon-bishop' : '&#x7c;',
			'icomoon-knight' : '&#x7d;',
			'icomoon-pawn' : '&#x7e;',
			'icomoon-chess' : '&#xe000;',
			'icomoon-bullhorn' : '&#xe001;',
			'icomoon-megaphone' : '&#xe002;',
			'icomoon-new' : '&#xe003;',
			'icomoon-connection' : '&#xe004;',
			'icomoon-connection-2' : '&#xe005;',
			'icomoon-podcast' : '&#xe006;',
			'icomoon-radio' : '&#xe007;',
			'icomoon-feed' : '&#xe008;',
			'icomoon-connection-3' : '&#xe009;',
			'icomoon-radio-2' : '&#xe00a;',
			'icomoon-podcast-2' : '&#xe00b;',
			'icomoon-podcast-3' : '&#xe00c;',
			'icomoon-mic' : '&#xe00d;',
			'icomoon-mic-2' : '&#xe00e;',
			'icomoon-mic-3' : '&#xe00f;',
			'icomoon-mic-4' : '&#xe010;',
			'icomoon-mic-5' : '&#xe011;',
			'icomoon-book' : '&#xe012;',
			'icomoon-book-2' : '&#xe013;',
			'icomoon-books' : '&#xe014;',
			'icomoon-reading' : '&#xe015;',
			'icomoon-library' : '&#xe016;',
			'icomoon-library-2' : '&#xe017;',
			'icomoon-graduation' : '&#xe018;',
			'icomoon-file' : '&#xe019;',
			'icomoon-profile' : '&#xe01a;',
			'icomoon-file-2' : '&#xe01b;',
			'icomoon-file-3' : '&#xe01c;',
			'icomoon-file-4' : '&#xe01d;',
			'icomoon-file-5' : '&#xe01e;',
			'icomoon-file-6' : '&#xe01f;',
			'icomoon-files' : '&#xe020;',
			'icomoon-file-plus' : '&#xe021;',
			'icomoon-file-minus' : '&#xe022;',
			'icomoon-file-download' : '&#xe023;',
			'icomoon-file-upload' : '&#xe024;',
			'icomoon-file-check' : '&#xe025;',
			'icomoon-file-remove' : '&#xe026;',
			'icomoon-file-7' : '&#xe027;',
			'icomoon-file-8' : '&#xe028;',
			'icomoon-file-plus-2' : '&#xe029;',
			'icomoon-file-minus-2' : '&#xe02a;',
			'icomoon-file-download-2' : '&#xe02b;',
			'icomoon-file-upload-2' : '&#xe02c;',
			'icomoon-file-check-2' : '&#xe02d;',
			'icomoon-file-remove-2' : '&#xe02e;',
			'icomoon-file-9' : '&#xe02f;',
			'icomoon-copy' : '&#xe030;',
			'icomoon-copy-2' : '&#xe031;',
			'icomoon-copy-3' : '&#xe032;',
			'icomoon-copy-4' : '&#xe033;',
			'icomoon-paste' : '&#xe034;',
			'icomoon-paste-2' : '&#xe035;',
			'icomoon-paste-3' : '&#xe036;',
			'icomoon-stack' : '&#xe037;',
			'icomoon-stack-2' : '&#xe038;',
			'icomoon-stack-3' : '&#xe039;',
			'icomoon-folder' : '&#xe03a;',
			'icomoon-folder-download' : '&#xe03b;',
			'icomoon-folder-upload' : '&#xe03c;',
			'icomoon-folder-plus' : '&#xe03d;',
			'icomoon-folder-plus-2' : '&#xe03e;',
			'icomoon-folder-minus' : '&#xe03f;',
			'icomoon-folder-minus-2' : '&#xe040;',
			'icomoon-folder8' : '&#xe041;',
			'icomoon-folder-remove' : '&#xe042;',
			'icomoon-folder-2' : '&#xe043;',
			'icomoon-folder-open' : '&#xe044;',
			'icomoon-folder-3' : '&#xe045;',
			'icomoon-folder-4' : '&#xe046;',
			'icomoon-folder-plus-3' : '&#xe047;',
			'icomoon-folder-minus-3' : '&#xe048;',
			'icomoon-folder-plus-4' : '&#xe049;',
			'icomoon-folder-remove-2' : '&#xe04a;',
			'icomoon-folder-download-2' : '&#xe04b;',
			'icomoon-folder-upload-2' : '&#xe04c;',
			'icomoon-folder-download-3' : '&#xe04d;',
			'icomoon-folder-upload-3' : '&#xe04e;',
			'icomoon-folder-5' : '&#xe04f;',
			'icomoon-folder-open-2' : '&#xe050;',
			'icomoon-folder-6' : '&#xe051;',
			'icomoon-folder-open-3' : '&#xe052;',
			'icomoon-certificate' : '&#xe053;',
			'icomoon-cc' : '&#xe054;',
			'icomoon-tag' : '&#xe055;',
			'icomoon-tag-2' : '&#xe056;',
			'icomoon-tag-3' : '&#xe057;',
			'icomoon-tag-4' : '&#xe058;',
			'icomoon-tag-5' : '&#xe059;',
			'icomoon-tag-6' : '&#xe05a;',
			'icomoon-tag-7' : '&#xe05b;',
			'icomoon-tags' : '&#xe05c;',
			'icomoon-tags-2' : '&#xe05d;',
			'icomoon-tag-8' : '&#xe05e;',
			'icomoon-barcode' : '&#xe05f;',
			'icomoon-barcode-2' : '&#xe060;',
			'icomoon-qrcode' : '&#xe061;',
			'icomoon-ticket' : '&#xe062;',
			'icomoon-cart' : '&#xe063;',
			'icomoon-cart-2' : '&#xe064;',
			'icomoon-cart-3' : '&#xe065;',
			'icomoon-cart-4' : '&#xe066;',
			'icomoon-cart-5' : '&#xe067;',
			'icomoon-cart-6' : '&#xe068;',
			'icomoon-cart-7' : '&#xe069;',
			'icomoon-cart-plus' : '&#xe06a;',
			'icomoon-cart-minus' : '&#xe06b;',
			'icomoon-cart-add' : '&#xe06c;',
			'icomoon-cart-remove' : '&#xe06d;',
			'icomoon-cart-checkout' : '&#xe06e;',
			'icomoon-cart-remove-2' : '&#xe06f;',
			'icomoon-basket' : '&#xe070;',
			'icomoon-basket-2' : '&#xe071;',
			'icomoon-bag' : '&#xe072;',
			'icomoon-bag-2' : '&#xe073;',
			'icomoon-bag-3' : '&#xe074;',
			'icomoon-coin' : '&#xe075;',
			'icomoon-coins' : '&#xe076;',
			'icomoon-credit' : '&#xe077;',
			'icomoon-credit-2' : '&#xe078;',
			'icomoon-calculate' : '&#xe079;',
			'icomoon-calculate-2' : '&#xe07a;',
			'icomoon-support' : '&#xe07b;',
			'icomoon-phone' : '&#xe07c;',
			'icomoon-phone-2' : '&#xe07d;',
			'icomoon-phone-3' : '&#xe07e;',
			'icomoon-phone-4' : '&#xe07f;',
			'icomoon-contact-add' : '&#xe080;',
			'icomoon-contact-remove' : '&#xe081;',
			'icomoon-contact-add-2' : '&#xe082;',
			'icomoon-contact-remove-2' : '&#xe083;',
			'icomoon-call-incoming' : '&#xe084;',
			'icomoon-call-outgoing' : '&#xe085;',
			'icomoon-phone-5' : '&#xe086;',
			'icomoon-phone-6' : '&#xe087;',
			'icomoon-phone-hang-up' : '&#xe088;',
			'icomoon-phone-hang-up-2' : '&#xe089;',
			'icomoon-address-book' : '&#xe08a;',
			'icomoon-address-book-2' : '&#xe08b;',
			'icomoon-notebook' : '&#xe08c;',
			'icomoon-envelop' : '&#xe08d;',
			'icomoon-envelop-2' : '&#xe08e;',
			'icomoon-mail-send' : '&#xe08f;',
			'icomoon-envelop-opened' : '&#xe090;',
			'icomoon-envelop-3' : '&#xe091;',
			'icomoon-pushpin' : '&#xe092;',
			'icomoon-location' : '&#xe093;',
			'icomoon-location-2' : '&#xe094;',
			'icomoon-location-3' : '&#xe095;',
			'icomoon-location-4' : '&#xe096;',
			'icomoon-location-5' : '&#xe097;',
			'icomoon-location-6' : '&#xe098;',
			'icomoon-location-7' : '&#xe099;',
			'icomoon-compass' : '&#xe09a;',
			'icomoon-compass-2' : '&#xe09b;',
			'icomoon-map' : '&#xe09c;',
			'icomoon-map-2' : '&#xe09d;',
			'icomoon-map-3' : '&#xe09e;',
			'icomoon-map-4' : '&#xe09f;',
			'icomoon-direction' : '&#xe0a0;',
			'icomoon-history' : '&#xe0a1;',
			'icomoon-history-2' : '&#xe0a2;',
			'icomoon-clock' : '&#xe0a3;',
			'icomoon-clock-2' : '&#xe0a4;',
			'icomoon-clock-3' : '&#xe0a5;',
			'icomoon-clock-4' : '&#xe0a6;',
			'icomoon-watch' : '&#xe0a7;',
			'icomoon-clock-5' : '&#xe0a8;',
			'icomoon-clock-6' : '&#xe0a9;',
			'icomoon-clock-7' : '&#xe0aa;',
			'icomoon-alarm' : '&#xe0ab;',
			'icomoon-alarm-2' : '&#xe0ac;',
			'icomoon-bell' : '&#xe0ad;',
			'icomoon-bell-2' : '&#xe0ae;',
			'icomoon-alarm-plus' : '&#xe0af;',
			'icomoon-alarm-minus' : '&#xe0b0;',
			'icomoon-alarm-check' : '&#xe0b1;',
			'icomoon-alarm-cancel' : '&#xe0b2;',
			'icomoon-stopwatch' : '&#xe0b3;',
			'icomoon-calendar' : '&#xe0b4;',
			'icomoon-calendar-2' : '&#xe0b5;',
			'icomoon-calendar-3' : '&#xe0b6;',
			'icomoon-calendar-4' : '&#xe0b7;',
			'icomoon-calendar-5' : '&#xe0b8;',
			'icomoon-print' : '&#xe0b9;',
			'icomoon-print-2' : '&#xe0ba;',
			'icomoon-print-3' : '&#xe0bb;',
			'icomoon-mouse' : '&#xe0bc;',
			'icomoon-mouse-2' : '&#xe0bd;',
			'icomoon-mouse-3' : '&#xe0be;',
			'icomoon-mouse-4' : '&#xe0bf;',
			'icomoon-keyboard' : '&#xe0c0;',
			'icomoon-keyboard-2' : '&#xe0c1;',
			'icomoon-screen' : '&#xe0c2;',
			'icomoon-screen-2' : '&#xe0c3;',
			'icomoon-screen-3' : '&#xe0c4;',
			'icomoon-screen-4' : '&#xe0c5;',
			'icomoon-laptop' : '&#xe0c6;',
			'icomoon-mobile' : '&#xe0c7;',
			'icomoon-mobile-2' : '&#xe0c8;',
			'icomoon-tablet' : '&#xe0c9;',
			'icomoon-mobile-3' : '&#xe0ca;',
			'icomoon-tv' : '&#xe0cb;',
			'icomoon-cabinet' : '&#xe0cc;',
			'icomoon-archive' : '&#xe0cd;',
			'icomoon-drawer' : '&#xe0ce;',
			'icomoon-drawer-2' : '&#xe0cf;',
			'icomoon-drawer-3' : '&#xe0d0;',
			'icomoon-box' : '&#xe0d1;',
			'icomoon-box-add' : '&#xe0d2;',
			'icomoon-box-remove' : '&#xe0d3;',
			'icomoon-download' : '&#xe0d4;',
			'icomoon-upload' : '&#xe0d5;',
			'icomoon-disk' : '&#xe0d6;',
			'icomoon-cd' : '&#xe0d7;',
			'icomoon-storage' : '&#xe0d8;',
			'icomoon-storage-2' : '&#xe0d9;',
			'icomoon-database' : '&#xe0da;',
			'icomoon-database-2' : '&#xe0db;',
			'icomoon-database-3' : '&#xe0dc;',
			'icomoon-undo' : '&#xe0dd;',
			'icomoon-redo' : '&#xe0de;',
			'icomoon-rotate' : '&#xe0df;',
			'icomoon-rotate-2' : '&#xe0e0;',
			'icomoon-flip' : '&#xe0e1;',
			'icomoon-flip-2' : '&#xe0e2;',
			'icomoon-unite' : '&#xe0e3;',
			'icomoon-subtract' : '&#xe0e4;',
			'icomoon-interset' : '&#xe0e5;',
			'icomoon-exclude' : '&#xe0e6;',
			'icomoon-align-left' : '&#xe0e7;',
			'icomoon-align-center-horizontal' : '&#xe0e8;',
			'icomoon-align-right' : '&#xe0e9;',
			'icomoon-align-top' : '&#xe0ea;',
			'icomoon-align-center-vertical' : '&#xe0eb;',
			'icomoon-align-bottom' : '&#xe0ec;',
			'icomoon-undo-2' : '&#xe0ed;',
			'icomoon-redo-2' : '&#xe0ee;',
			'icomoon-forward' : '&#xe0ef;',
			'icomoon-reply' : '&#xe0f0;',
			'icomoon-reply-2' : '&#xe0f1;',
			'icomoon-bubble' : '&#xe0f2;',
			'icomoon-bubbles' : '&#xe0f3;',
			'icomoon-bubbles-2' : '&#xe0f4;',
			'icomoon-bubble-2' : '&#xe0f5;',
			'icomoon-bubbles-3' : '&#xe0f6;',
			'icomoon-bubbles-4' : '&#xe0f7;',
			'icomoon-bubble-notification' : '&#xe0f8;',
			'icomoon-bubbles-5' : '&#xe0f9;',
			'icomoon-bubbles-6' : '&#xe0fa;',
			'icomoon-bubble-3' : '&#xe0fb;',
			'icomoon-bubble-dots' : '&#xe0fc;',
			'icomoon-bubble-4' : '&#xe0fd;',
			'icomoon-bubble-5' : '&#xe0fe;',
			'icomoon-bubble-dots-2' : '&#xe0ff;',
			'icomoon-bubble-6' : '&#xe100;',
			'icomoon-bubble-7' : '&#xe101;',
			'icomoon-bubble-8' : '&#xe102;',
			'icomoon-bubbles-7' : '&#xe103;',
			'icomoon-bubble-9' : '&#xe104;',
			'icomoon-bubbles-8' : '&#xe105;',
			'icomoon-bubble-10' : '&#xe106;',
			'icomoon-bubble-dots-3' : '&#xe107;',
			'icomoon-bubble-11' : '&#xe108;',
			'icomoon-bubble-12' : '&#xe109;',
			'icomoon-bubble-dots-4' : '&#xe10a;',
			'icomoon-bubble-13' : '&#xe10b;',
			'icomoon-bubbles-9' : '&#xe10c;',
			'icomoon-bubbles-10' : '&#xe10d;',
			'icomoon-bubble-blocked' : '&#xe10e;',
			'icomoon-bubble-quote' : '&#xe10f;',
			'icomoon-bubble-user' : '&#xe110;',
			'icomoon-bubble-check' : '&#xe111;',
			'icomoon-bubble-video-chat' : '&#xe112;',
			'icomoon-bubble-link' : '&#xe113;',
			'icomoon-bubble-locked' : '&#xe114;',
			'icomoon-bubble-star' : '&#xe115;',
			'icomoon-bubble-heart' : '&#xe116;',
			'icomoon-bubble-paperclip' : '&#xe117;',
			'icomoon-bubble-cancel' : '&#xe118;',
			'icomoon-bubble-plus' : '&#xe119;',
			'icomoon-bubble-minus' : '&#xe11a;',
			'icomoon-bubble-notification-2' : '&#xe11b;',
			'icomoon-bubble-trash' : '&#xe11c;',
			'icomoon-bubble-left' : '&#xe11d;',
			'icomoon-bubble-right' : '&#xe11e;',
			'icomoon-bubble-up' : '&#xe11f;',
			'icomoon-bubble-down' : '&#xe120;',
			'icomoon-bubble-first' : '&#xe121;',
			'icomoon-bubble-last' : '&#xe122;',
			'icomoon-bubble-replu' : '&#xe123;',
			'icomoon-bubble-forward' : '&#xe124;',
			'icomoon-bubble-reply' : '&#xe125;',
			'icomoon-bubble-forward-2' : '&#xe126;',
			'icomoon-user' : '&#xe127;',
			'icomoon-users' : '&#xe128;',
			'icomoon-user-plus' : '&#xe129;',
			'icomoon-user-plus-2' : '&#xe12a;',
			'icomoon-user-minus' : '&#xe12b;',
			'icomoon-user-minus-2' : '&#xe12c;',
			'icomoon-user-cancel' : '&#xe12d;',
			'icomoon-user-block' : '&#xe12e;',
			'icomoon-users-2' : '&#xe12f;',
			'icomoon-user-2' : '&#xe130;',
			'icomoon-users-3' : '&#xe131;',
			'icomoon-user-plus-3' : '&#xe132;',
			'icomoon-user-minus-3' : '&#xe133;',
			'icomoon-user-cancel-2' : '&#xe134;',
			'icomoon-user-block-2' : '&#xe135;',
			'icomoon-user-3' : '&#xe136;',
			'icomoon-user-4' : '&#xe137;',
			'icomoon-user-5' : '&#xe138;',
			'icomoon-user-6' : '&#xe139;',
			'icomoon-users-4' : '&#xe13a;',
			'icomoon-user-7' : '&#xe13b;',
			'icomoon-user-8' : '&#xe13c;',
			'icomoon-users-5' : '&#xe13d;',
			'icomoon-vcard' : '&#xe13e;',
			'icomoon-tshirt' : '&#xe13f;',
			'icomoon-hanger' : '&#xe140;',
			'icomoon-quotes-left' : '&#xe141;',
			'icomoon-quotes-right' : '&#xe142;',
			'icomoon-quotes-right-2' : '&#xe143;',
			'icomoon-quotes-right-3' : '&#xe144;',
			'icomoon-busy' : '&#xe145;',
			'icomoon-busy-2' : '&#xe146;',
			'icomoon-busy-3' : '&#xe147;',
			'icomoon-busy-4' : '&#xe148;',
			'icomoon-spinner' : '&#xe149;',
			'icomoon-spinner-2' : '&#xe14a;',
			'icomoon-spinner-3' : '&#xe14b;',
			'icomoon-spinner-4' : '&#xe14c;',
			'icomoon-spinner-5' : '&#xe14d;',
			'icomoon-spinner-6' : '&#xe14e;',
			'icomoon-spinner-7' : '&#xe14f;',
			'icomoon-spinner-8' : '&#xe150;',
			'icomoon-spinner-9' : '&#xe151;',
			'icomoon-spinner-10' : '&#xe152;',
			'icomoon-spinner-11' : '&#xe153;',
			'icomoon-spinner-12' : '&#xe154;',
			'icomoon-microscope' : '&#xe155;',
			'icomoon-binoculars' : '&#xe156;',
			'icomoon-binoculars-2' : '&#xe157;',
			'icomoon-search' : '&#xe158;',
			'icomoon-search-2' : '&#xe159;',
			'icomoon-zoom-in' : '&#xe15a;',
			'icomoon-zoom-out' : '&#xe15b;',
			'icomoon-search-3' : '&#xe15c;',
			'icomoon-search-4' : '&#xe15d;',
			'icomoon-zoom-in-2' : '&#xe15e;',
			'icomoon-zoom-out-2' : '&#xe15f;',
			'icomoon-search-5' : '&#xe160;',
			'icomoon-expand' : '&#xe161;',
			'icomoon-contract' : '&#xe162;',
			'icomoon-scale-up' : '&#xe163;',
			'icomoon-scale-down' : '&#xe164;',
			'icomoon-expand-2' : '&#xe165;',
			'icomoon-contract-2' : '&#xe166;',
			'icomoon-scale-up-2' : '&#xe167;',
			'icomoon-scale-down-2' : '&#xe168;',
			'icomoon-fullscreen' : '&#xe169;',
			'icomoon-expand-3' : '&#xe16a;',
			'icomoon-contract-3' : '&#xe16b;',
			'icomoon-key' : '&#xe16c;',
			'icomoon-key-2' : '&#xe16d;',
			'icomoon-key-3' : '&#xe16e;',
			'icomoon-key-4' : '&#xe16f;',
			'icomoon-key-5' : '&#xe170;',
			'icomoon-keyhole' : '&#xe171;',
			'icomoon-lock' : '&#xe172;',
			'icomoon-lock-2' : '&#xe173;',
			'icomoon-lock-3' : '&#xe174;',
			'icomoon-lock-4' : '&#xe175;',
			'icomoon-unlocked' : '&#xe176;',
			'icomoon-lock-5' : '&#xe177;',
			'icomoon-unlocked-2' : '&#xe178;',
			'icomoon-wrench' : '&#xe179;',
			'icomoon-wrench-2' : '&#xe17a;',
			'icomoon-wrench-3' : '&#xe17b;',
			'icomoon-wrench-4' : '&#xe17c;',
			'icomoon-settings' : '&#xe17d;',
			'icomoon-equalizer' : '&#xe17e;',
			'icomoon-equalizer-2' : '&#xe17f;',
			'icomoon-equalizer-3' : '&#xe180;',
			'icomoon-cog' : '&#xe181;',
			'icomoon-cogs' : '&#xe182;',
			'icomoon-cog-2' : '&#xe183;',
			'icomoon-cog-3' : '&#xe184;',
			'icomoon-cog-4' : '&#xe185;',
			'icomoon-cog-5' : '&#xe186;',
			'icomoon-cog-6' : '&#xe187;',
			'icomoon-cog-7' : '&#xe188;',
			'icomoon-factory' : '&#xe189;',
			'icomoon-hammer' : '&#xe18a;',
			'icomoon-tools' : '&#xe18b;',
			'icomoon-screwdriver' : '&#xe18c;',
			'icomoon-screwdriver-2' : '&#xe18d;',
			'icomoon-wand' : '&#xe18e;',
			'icomoon-wand-2' : '&#xe18f;',
			'icomoon-health' : '&#xe190;',
			'icomoon-aid' : '&#xe191;',
			'icomoon-patch' : '&#xe192;',
			'icomoon-bug' : '&#xe193;',
			'icomoon-bug-2' : '&#xe194;',
			'icomoon-inject' : '&#xe195;',
			'icomoon-inject-2' : '&#xe196;',
			'icomoon-construction' : '&#xe197;',
			'icomoon-cone' : '&#xe198;',
			'icomoon-pie' : '&#xe199;',
			'icomoon-pie-2' : '&#xe19a;',
			'icomoon-pie-3' : '&#xe19b;',
			'icomoon-pie-4' : '&#xe19c;',
			'icomoon-pie-5' : '&#xe19d;',
			'icomoon-pie-6' : '&#xe19e;',
			'icomoon-pie-7' : '&#xe19f;',
			'icomoon-stats' : '&#xe1a0;',
			'icomoon-stats-2' : '&#xe1a1;',
			'icomoon-stats-3' : '&#xe1a2;',
			'icomoon-bars' : '&#xe1a3;',
			'icomoon-bars-2' : '&#xe1a4;',
			'icomoon-bars-3' : '&#xe1a5;',
			'icomoon-bars-4' : '&#xe1a6;',
			'icomoon-bars-5' : '&#xe1a7;',
			'icomoon-bars-6' : '&#xe1a8;',
			'icomoon-stats-up' : '&#xe1a9;',
			'icomoon-stats-down' : '&#xe1aa;',
			'icomoon-stairs-down' : '&#xe1ab;',
			'icomoon-stairs-down-2' : '&#xe1ac;',
			'icomoon-chart' : '&#xe1ad;',
			'icomoon-stairs' : '&#xe1ae;',
			'icomoon-stairs-2' : '&#xe1af;',
			'icomoon-ladder' : '&#xe1b0;',
			'icomoon-cake' : '&#xe1b1;',
			'icomoon-gift' : '&#xe1b2;',
			'icomoon-gift-2' : '&#xe1b3;',
			'icomoon-balloon' : '&#xe1b4;',
			'icomoon-rating' : '&#xe1b5;',
			'icomoon-rating-2' : '&#xe1b6;',
			'icomoon-rating-3' : '&#xe1b7;',
			'icomoon-podium' : '&#xe1b8;',
			'icomoon-medal' : '&#xe1b9;',
			'icomoon-medal-2' : '&#xe1ba;',
			'icomoon-medal-3' : '&#xe1bb;',
			'icomoon-medal-4' : '&#xe1bc;',
			'icomoon-medal-5' : '&#xe1bd;',
			'icomoon-crown' : '&#xe1be;',
			'icomoon-trophy' : '&#xe1bf;',
			'icomoon-trophy-2' : '&#xe1c0;',
			'icomoon-trophy-star' : '&#xe1c1;',
			'icomoon-diamond' : '&#xe1c2;',
			'icomoon-diamond-2' : '&#xe1c3;',
			'icomoon-glass' : '&#xe1c4;',
			'icomoon-glass-2' : '&#xe1c5;',
			'icomoon-bottle' : '&#xe1c6;',
			'icomoon-bottle-2' : '&#xe1c7;',
			'icomoon-mug' : '&#xe1c8;',
			'icomoon-food' : '&#xe1c9;',
			'icomoon-food-2' : '&#xe1ca;',
			'icomoon-hamburger' : '&#xe1cb;',
			'icomoon-cup' : '&#xe1cc;',
			'icomoon-cup-2' : '&#xe1cd;',
			'icomoon-leaf' : '&#xe1ce;',
			'icomoon-leaf-2' : '&#xe1cf;',
			'icomoon-apple-fruit' : '&#xe1d0;',
			'icomoon-tree' : '&#xe1d1;',
			'icomoon-tree-2' : '&#xe1d2;',
			'icomoon-paw' : '&#xe1d3;',
			'icomoon-steps' : '&#xe1d4;',
			'icomoon-flower' : '&#xe1d5;',
			'icomoon-rocket' : '&#xe1d6;',
			'icomoon-meter' : '&#xe1d7;',
			'icomoon-meter2' : '&#xe1d8;',
			'icomoon-meter-slow' : '&#xe1d9;',
			'icomoon-meter-medium' : '&#xe1da;',
			'icomoon-meter-fast' : '&#xe1db;',
			'icomoon-dashboard' : '&#xe1dc;',
			'icomoon-hammer-2' : '&#xe1dd;',
			'icomoon-balance' : '&#xe1de;',
			'icomoon-bomb' : '&#xe1df;',
			'icomoon-fire' : '&#xe1e0;',
			'icomoon-fire-2' : '&#xe1e1;',
			'icomoon-lab' : '&#xe1e2;',
			'icomoon-atom' : '&#xe1e3;',
			'icomoon-atom-2' : '&#xe1e4;',
			'icomoon-magnet' : '&#xe1e5;',
			'icomoon-magnet-2' : '&#xe1e6;',
			'icomoon-magnet-3' : '&#xe1e7;',
			'icomoon-magnet-4' : '&#xe1e8;',
			'icomoon-dumbbell' : '&#xe1e9;',
			'icomoon-skull' : '&#xe1ea;',
			'icomoon-skull-2' : '&#xe1eb;',
			'icomoon-skull-3' : '&#xe1ec;',
			'icomoon-lamp' : '&#xe1ed;',
			'icomoon-lamp-2' : '&#xe1ee;',
			'icomoon-lamp-3' : '&#xe1ef;',
			'icomoon-lamp-4' : '&#xe1f0;',
			'icomoon-remove' : '&#xe1f1;',
			'icomoon-remove-2' : '&#xe1f2;',
			'icomoon-remove-3' : '&#xe1f3;',
			'icomoon-remove-4' : '&#xe1f4;',
			'icomoon-remove-5' : '&#xe1f5;',
			'icomoon-remove-6' : '&#xe1f6;',
			'icomoon-remove-7' : '&#xe1f7;',
			'icomoon-remove-8' : '&#xe1f8;',
			'icomoon-briefcase' : '&#xe1f9;',
			'icomoon-briefcase-2' : '&#xe1fa;',
			'icomoon-briefcase-3' : '&#xe1fb;',
			'icomoon-airplane' : '&#xe1fc;',
			'icomoon-airplane-2' : '&#xe1fd;',
			'icomoon-paper-plane' : '&#xe1fe;',
			'icomoon-car' : '&#xe1ff;',
			'icomoon-gas-pump' : '&#xe200;',
			'icomoon-bus' : '&#xe201;',
			'icomoon-truck' : '&#xe202;',
			'icomoon-bike' : '&#xe203;',
			'icomoon-road' : '&#xe204;',
			'icomoon-train' : '&#xe205;',
			'icomoon-ship' : '&#xe206;',
			'icomoon-boat' : '&#xe207;',
			'icomoon-cube' : '&#xe208;',
			'icomoon-cube-2' : '&#xe209;',
			'icomoon-cube-3' : '&#xe20a;',
			'icomoon-cube4' : '&#xe20b;',
			'icomoon-pyramid' : '&#xe20c;',
			'icomoon-pyramid-2' : '&#xe20d;',
			'icomoon-cylinder' : '&#xe20e;',
			'icomoon-package' : '&#xe20f;',
			'icomoon-puzzle' : '&#xe210;',
			'icomoon-puzzle-2' : '&#xe211;',
			'icomoon-puzzle-3' : '&#xe212;',
			'icomoon-puzzle-4' : '&#xe213;',
			'icomoon-glasses' : '&#xe214;',
			'icomoon-glasses-2' : '&#xe215;',
			'icomoon-glasses-3' : '&#xe216;',
			'icomoon-sun-glasses' : '&#xe217;',
			'icomoon-accessibility' : '&#xe218;',
			'icomoon-accessibility-2' : '&#xe219;',
			'icomoon-brain' : '&#xe21a;',
			'icomoon-target' : '&#xe21b;',
			'icomoon-target-2' : '&#xe21c;',
			'icomoon-target-3' : '&#xe21d;',
			'icomoon-gun' : '&#xe21e;',
			'icomoon-gun-ban' : '&#xe21f;',
			'icomoon-shield' : '&#xe220;',
			'icomoon-shield-2' : '&#xe221;',
			'icomoon-shield-3' : '&#xe222;',
			'icomoon-shield-4' : '&#xe223;',
			'icomoon-soccer' : '&#xe224;',
			'icomoon-football' : '&#xe225;',
			'icomoon-baseball' : '&#xe226;',
			'icomoon-basketball' : '&#xe227;',
			'icomoon-golf' : '&#xe228;',
			'icomoon-hockey' : '&#xe229;',
			'icomoon-racing' : '&#xe22a;',
			'icomoon-eight-ball' : '&#xe22b;',
			'icomoon-bowling-ball' : '&#xe22c;',
			'icomoon-bowling' : '&#xe22d;',
			'icomoon-bowling-2' : '&#xe22e;',
			'icomoon-lightning' : '&#xe22f;',
			'icomoon-power' : '&#xe230;',
			'icomoon-power-2' : '&#xe231;',
			'icomoon-switch' : '&#xe232;',
			'icomoon-power-cord' : '&#xe233;',
			'icomoon-cord' : '&#xe234;',
			'icomoon-socket' : '&#xe235;',
			'icomoon-clipboard' : '&#xe236;',
			'icomoon-clipboard-2' : '&#xe237;',
			'icomoon-signup' : '&#xe238;',
			'icomoon-clipboard-3' : '&#xe239;',
			'icomoon-clipboard-4' : '&#xe23a;',
			'icomoon-list' : '&#xe23b;',
			'icomoon-list-2' : '&#xe23c;',
			'icomoon-list-3' : '&#xe23d;',
			'icomoon-numbered-list' : '&#xe23e;',
			'icomoon-list-4' : '&#xe23f;',
			'icomoon-list-5' : '&#xe240;',
			'icomoon-playlist' : '&#xe241;',
			'icomoon-grid' : '&#xe242;',
			'icomoon-grid-2' : '&#xe243;',
			'icomoon-grid-3' : '&#xe244;',
			'icomoon-grid-4' : '&#xe245;',
			'icomoon-grid-5' : '&#xe246;',
			'icomoon-grid-6' : '&#xe247;',
			'icomoon-tree-3' : '&#xe248;',
			'icomoon-tree-4' : '&#xe249;',
			'icomoon-tree-5' : '&#xe24a;',
			'icomoon-menu' : '&#xe24b;',
			'icomoon-menu-2' : '&#xe24c;',
			'icomoon-circle-small' : '&#xe24d;',
			'icomoon-menu-3' : '&#xe24e;',
			'icomoon-menu-4' : '&#xe24f;',
			'icomoon-menu-5' : '&#xe250;',
			'icomoon-menu-6' : '&#xe251;',
			'icomoon-menu-7' : '&#xe252;',
			'icomoon-menu-8' : '&#xe253;',
			'icomoon-menu-9' : '&#xe254;',
			'icomoon-cloud' : '&#xe255;',
			'icomoon-cloud-2' : '&#xe256;',
			'icomoon-cloud-3' : '&#xe257;',
			'icomoon-cloud-download' : '&#xe258;',
			'icomoon-cloud-upload' : '&#xe259;',
			'icomoon-download-2' : '&#xe25a;',
			'icomoon-upload-2' : '&#xe25b;',
			'icomoon-download-3' : '&#xe25c;',
			'icomoon-upload-3' : '&#xe25d;',
			'icomoon-download-4' : '&#xe25e;',
			'icomoon-upload-4' : '&#xe25f;',
			'icomoon-download-5' : '&#xe260;',
			'icomoon-upload-5' : '&#xe261;',
			'icomoon-download-6' : '&#xe262;',
			'icomoon-upload-6' : '&#xe263;',
			'icomoon-download-7' : '&#xe264;',
			'icomoon-upload-7' : '&#xe265;',
			'icomoon-globe' : '&#xe266;',
			'icomoon-globe-2' : '&#xe267;',
			'icomoon-globe-3' : '&#xe268;',
			'icomoon-earth' : '&#xe269;',
			'icomoon-network' : '&#xe26a;',
			'icomoon-link' : '&#xe26b;',
			'icomoon-link-2' : '&#xe26c;',
			'icomoon-link-3' : '&#xe26d;',
			'icomoon-link2' : '&#xe26e;',
			'icomoon-link-4' : '&#xe26f;',
			'icomoon-link-5' : '&#xe270;',
			'icomoon-link-6' : '&#xe271;',
			'icomoon-anchor' : '&#xe272;',
			'icomoon-flag' : '&#xe273;',
			'icomoon-flag-2' : '&#xe274;',
			'icomoon-flag-3' : '&#xe275;',
			'icomoon-flag-4' : '&#xe276;',
			'icomoon-flag-5' : '&#xe277;',
			'icomoon-flag-6' : '&#xe278;',
			'icomoon-attachment' : '&#xe279;',
			'icomoon-attachment-2' : '&#xe27a;',
			'icomoon-eye' : '&#xe27b;',
			'icomoon-eye-blocked' : '&#xe27c;',
			'icomoon-eye-2' : '&#xe27d;',
			'icomoon-eye-3' : '&#xe27e;',
			'icomoon-eye-blocked-2' : '&#xe27f;',
			'icomoon-eye-4' : '&#xe280;',
			'icomoon-eye-5' : '&#xe281;',
			'icomoon-eye-6' : '&#xe282;',
			'icomoon-eye-7' : '&#xe283;',
			'icomoon-eye-8' : '&#xe284;',
			'icomoon-bookmark' : '&#xe285;',
			'icomoon-bookmark-2' : '&#xe286;',
			'icomoon-bookmarks' : '&#xe287;',
			'icomoon-bookmark-3' : '&#xe288;',
			'icomoon-spotlight' : '&#xe289;',
			'icomoon-starburst' : '&#xe28a;',
			'icomoon-snowflake' : '&#xe28b;',
			'icomoon-temperature' : '&#xe28c;',
			'icomoon-temperature-2' : '&#xe28d;',
			'icomoon-weather-lightning' : '&#xe28e;',
			'icomoon-weather-rain' : '&#xe28f;',
			'icomoon-weather-snow' : '&#xe290;',
			'icomoon-windy' : '&#xe291;',
			'icomoon-fan' : '&#xe292;',
			'icomoon-umbrella' : '&#xe293;',
			'icomoon-sun' : '&#xe294;',
			'icomoon-sun-2' : '&#xe295;',
			'icomoon-brightness-high' : '&#xe296;',
			'icomoon-brightness-medium' : '&#xe297;',
			'icomoon-brightness-low' : '&#xe298;',
			'icomoon-brightness-contrast' : '&#xe299;',
			'icomoon-contrast' : '&#xe29a;',
			'icomoon-moon' : '&#xe29b;',
			'icomoon-bed' : '&#xe29c;',
			'icomoon-bed-2' : '&#xe29d;',
			'icomoon-star' : '&#xe29e;',
			'icomoon-star-2' : '&#xe29f;',
			'icomoon-star-3' : '&#xe2a0;',
			'icomoon-star-4' : '&#xe2a1;',
			'icomoon-star-5' : '&#xe2a2;',
			'icomoon-star-6' : '&#xe2a3;',
			'icomoon-heart' : '&#xe2a4;',
			'icomoon-heart-2' : '&#xe2a5;',
			'icomoon-heart-3' : '&#xe2a6;',
			'icomoon-heart-4' : '&#xe2a7;',
			'icomoon-heart-broken' : '&#xe2a8;',
			'icomoon-heart-5' : '&#xe2a9;',
			'icomoon-heart-6' : '&#xe2aa;',
			'icomoon-heart-broken-2' : '&#xe2ab;',
			'icomoon-heart-7' : '&#xe2ac;',
			'icomoon-heart-8' : '&#xe2ad;',
			'icomoon-heart-broken-3' : '&#xe2ae;',
			'icomoon-lips' : '&#xe2af;',
			'icomoon-lips-2' : '&#xe2b0;',
			'icomoon-thumbs-up' : '&#xe2b1;',
			'icomoon-thumbs-up-2' : '&#xe2b2;',
			'icomoon-thumbs-down' : '&#xe2b3;',
			'icomoon-thumbs-down-2' : '&#xe2b4;',
			'icomoon-thumbs-up-3' : '&#xe2b5;',
			'icomoon-thumbs-up-4' : '&#xe2b6;',
			'icomoon-thumbs-up-5' : '&#xe2b7;',
			'icomoon-thumbs-up-6' : '&#xe2b8;',
			'icomoon-people' : '&#xe2b9;',
			'icomoon-man' : '&#xe2ba;',
			'icomoon-male' : '&#xe2bb;',
			'icomoon-woman' : '&#xe2bc;',
			'icomoon-female' : '&#xe2bd;',
			'icomoon-peace' : '&#xe2be;',
			'icomoon-yin-yang' : '&#xe2bf;',
			'icomoon-happy' : '&#xe2c0;',
			'icomoon-happy-2' : '&#xe2c1;',
			'icomoon-smiley' : '&#xe2c2;',
			'icomoon-smiley-2' : '&#xe2c3;',
			'icomoon-tongue' : '&#xe2c4;',
			'icomoon-tongue-2' : '&#xe2c5;',
			'icomoon-sad' : '&#xe2c6;',
			'icomoon-sad-2' : '&#xe2c7;',
			'icomoon-wink' : '&#xe2c8;',
			'icomoon-wink-2' : '&#xe2c9;',
			'icomoon-grin' : '&#xe2ca;',
			'icomoon-grin-2' : '&#xe2cb;',
			'icomoon-cool' : '&#xe2cc;',
			'icomoon-cool-2' : '&#xe2cd;',
			'icomoon-angry' : '&#xe2ce;',
			'icomoon-angry-2' : '&#xe2cf;',
			'icomoon-evil' : '&#xe2d0;',
			'icomoon-evil-2' : '&#xe2d1;',
			'icomoon-shocked' : '&#xe2d2;',
			'icomoon-shocked-2' : '&#xe2d3;',
			'icomoon-confused' : '&#xe2d4;',
			'icomoon-confused-2' : '&#xe2d5;',
			'icomoon-neutral' : '&#xe2d6;',
			'icomoon-neutral-2' : '&#xe2d7;',
			'icomoon-wondering' : '&#xe2d8;',
			'icomoon-wondering-2' : '&#xe2d9;',
			'icomoon-cursor' : '&#xe2da;',
			'icomoon-cursor-2' : '&#xe2db;',
			'icomoon-point-up' : '&#xe2dc;',
			'icomoon-point-right' : '&#xe2dd;',
			'icomoon-point-down' : '&#xe2de;',
			'icomoon-point-left' : '&#xe2df;',
			'icomoon-pointer' : '&#xe2e0;',
			'icomoon-hand' : '&#xe2e1;',
			'icomoon-stack-empty' : '&#xe2e2;',
			'icomoon-stack-plus' : '&#xe2e3;',
			'icomoon-stack-minus' : '&#xe2e4;',
			'icomoon-stack-star' : '&#xe2e5;',
			'icomoon-stack-picture' : '&#xe2e6;',
			'icomoon-stack-down' : '&#xe2e7;',
			'icomoon-stack-up' : '&#xe2e8;',
			'icomoon-stack-cancel' : '&#xe2e9;',
			'icomoon-stack-checkmark' : '&#xe2ea;',
			'icomoon-stack-list' : '&#xe2eb;',
			'icomoon-stack-clubs' : '&#xe2ec;',
			'icomoon-stack-spades' : '&#xe2ed;',
			'icomoon-stack-hearts' : '&#xe2ee;',
			'icomoon-stack-diamonds' : '&#xe2ef;',
			'icomoon-stack-user' : '&#xe2f0;',
			'icomoon-stack-4' : '&#xe2f1;',
			'icomoon-stack-music' : '&#xe2f2;',
			'icomoon-stack-play' : '&#xe2f3;',
			'icomoon-move' : '&#xe2f4;',
			'icomoon-resize' : '&#xe2f5;',
			'icomoon-resize-2' : '&#xe2f6;',
			'icomoon-warning' : '&#xe2f7;',
			'icomoon-warning-2' : '&#xe2f8;',
			'icomoon-notification' : '&#xe2f9;',
			'icomoon-notification-2' : '&#xe2fa;',
			'icomoon-question' : '&#xe2fb;',
			'icomoon-question-2' : '&#xe2fc;',
			'icomoon-question-3' : '&#xe2fd;',
			'icomoon-question-4' : '&#xe2fe;',
			'icomoon-question-5' : '&#xe2ff;',
			'icomoon-plus-circle' : '&#xe300;',
			'icomoon-plus-circle-2' : '&#xe301;',
			'icomoon-minus-circle' : '&#xe302;',
			'icomoon-minus-circle-2' : '&#xe303;',
			'icomoon-info' : '&#xe304;',
			'icomoon-info-2' : '&#xe305;',
			'icomoon-blocked' : '&#xe306;',
			'icomoon-cancel-circle' : '&#xe307;',
			'icomoon-cancel-circle-2' : '&#xe308;',
			'icomoon-checkmark-circle' : '&#xe309;',
			'icomoon-checkmark-circle-2' : '&#xe30a;',
			'icomoon-cancel' : '&#xe30b;',
			'icomoon-spam' : '&#xe30c;',
			'icomoon-close' : '&#xe30d;',
			'icomoon-close-2' : '&#xe30e;',
			'icomoon-close-3' : '&#xe30f;',
			'icomoon-close-4' : '&#xe310;',
			'icomoon-close-5' : '&#xe311;',
			'icomoon-checkmark' : '&#xe312;',
			'icomoon-checkmark-2' : '&#xe313;',
			'icomoon-checkmark-3' : '&#xe314;',
			'icomoon-checkmark-4' : '&#xe315;',
			'icomoon-spell-check' : '&#xe316;',
			'icomoon-minus' : '&#xe317;',
			'icomoon-plus' : '&#xe318;',
			'icomoon-minus-2' : '&#xe319;',
			'icomoon-plus-2' : '&#xe31a;',
			'icomoon-enter' : '&#xe31b;',
			'icomoon-exit' : '&#xe31c;',
			'icomoon-enter-2' : '&#xe31d;',
			'icomoon-exit-2' : '&#xe31e;',
			'icomoon-enter-3' : '&#xe31f;',
			'icomoon-exit-3' : '&#xe320;',
			'icomoon-exit-4' : '&#xe321;',
			'icomoon-play-3' : '&#xe322;',
			'icomoon-pause' : '&#xe323;',
			'icomoon-stop' : '&#xe324;',
			'icomoon-backward' : '&#xe325;',
			'icomoon-forward-2' : '&#xe326;',
			'icomoon-play-4' : '&#xe327;',
			'icomoon-pause-2' : '&#xe328;',
			'icomoon-stop-2' : '&#xe329;',
			'icomoon-backward-2' : '&#xe32a;',
			'icomoon-forward-3' : '&#xe32b;',
			'icomoon-first' : '&#xe32c;',
			'icomoon-last' : '&#xe32d;',
			'icomoon-previous' : '&#xe32e;',
			'icomoon-next' : '&#xe32f;',
			'icomoon-eject' : '&#xe330;',
			'icomoon-volume-high' : '&#xe331;',
			'icomoon-volume-medium' : '&#xe332;',
			'icomoon-volume-low' : '&#xe333;',
			'icomoon-volume-mute' : '&#xe334;',
			'icomoon-volume-mute-2' : '&#xe335;',
			'icomoon-volume-increase' : '&#xe336;',
			'icomoon-volume-decrease' : '&#xe337;',
			'icomoon-volume-high-2' : '&#xe338;',
			'icomoon-volume-medium-2' : '&#xe339;',
			'icomoon-volume-low-2' : '&#xe33a;',
			'icomoon-volume-mute-3' : '&#xe33b;',
			'icomoon-volume-mute-4' : '&#xe33c;',
			'icomoon-volume-increase-2' : '&#xe33d;',
			'icomoon-volume-decrease-2' : '&#xe33e;',
			'icomoon-volume5' : '&#xe33f;',
			'icomoon-volume4' : '&#xe340;',
			'icomoon-volume3' : '&#xe341;',
			'icomoon-volume2' : '&#xe342;',
			'icomoon-volume1' : '&#xe343;',
			'icomoon-volume0' : '&#xe344;',
			'icomoon-volume-mute-5' : '&#xe345;',
			'icomoon-volume-mute-6' : '&#xe346;',
			'icomoon-loop' : '&#xe347;',
			'icomoon-loop-2' : '&#xe348;',
			'icomoon-loop-3' : '&#xe349;',
			'icomoon-loop-4' : '&#xe34a;',
			'icomoon-loop-5' : '&#xe34b;',
			'icomoon-shuffle' : '&#xe34c;',
			'icomoon-shuffle-2' : '&#xe34d;',
			'icomoon-wave' : '&#xe34e;',
			'icomoon-wave-2' : '&#xe34f;',
			'icomoon-arrow-first' : '&#xe350;',
			'icomoon-arrow-right' : '&#xe351;',
			'icomoon-arrow-up' : '&#xe352;',
			'icomoon-arrow-right-2' : '&#xe353;',
			'icomoon-arrow-down' : '&#xe354;',
			'icomoon-arrow-left' : '&#xe355;',
			'icomoon-arrow-up-2' : '&#xe356;',
			'icomoon-arrow-right-3' : '&#xe357;',
			'icomoon-arrow-down-2' : '&#xe358;',
			'icomoon-arrow-left-2' : '&#xe359;',
			'icomoon-arrow-up-left' : '&#xe35a;',
			'icomoon-arrow-up-3' : '&#xe35b;',
			'icomoon-arrow-up-right' : '&#xe35c;',
			'icomoon-arrow-right-4' : '&#xe35d;',
			'icomoon-arrow-down-right' : '&#xe35e;',
			'icomoon-arrow-down-3' : '&#xe35f;',
			'icomoon-arrow-down-left' : '&#xe360;',
			'icomoon-arrow-left-3' : '&#xe361;',
			'icomoon-arrow-up-left-2' : '&#xe362;',
			'icomoon-arrow-up-4' : '&#xe363;',
			'icomoon-arrow-up-right-2' : '&#xe364;',
			'icomoon-arrow-right-5' : '&#xe365;',
			'icomoon-arrow-down-right-2' : '&#xe366;',
			'icomoon-arrow-down-4' : '&#xe367;',
			'icomoon-arrow-down-left-2' : '&#xe368;',
			'icomoon-arrow-left-4' : '&#xe369;',
			'icomoon-arrow-up-left-3' : '&#xe36a;',
			'icomoon-arrow-up-5' : '&#xe36b;',
			'icomoon-arrow-up-right-3' : '&#xe36c;',
			'icomoon-arrow-right-6' : '&#xe36d;',
			'icomoon-arrow-down-right-3' : '&#xe36e;',
			'icomoon-arrow-down-5' : '&#xe36f;',
			'icomoon-arrow-down-left-3' : '&#xe370;',
			'icomoon-arrow-left-5' : '&#xe371;',
			'icomoon-arrow-up-left-4' : '&#xe372;',
			'icomoon-arrow-up-6' : '&#xe373;',
			'icomoon-arrow-up-right-4' : '&#xe374;',
			'icomoon-arrow-right-7' : '&#xe375;',
			'icomoon-arrow-down-right-4' : '&#xe376;',
			'icomoon-arrow-down-6' : '&#xe377;',
			'icomoon-arrow-down-left-4' : '&#xe378;',
			'icomoon-arrow-left-6' : '&#xe379;',
			'icomoon-arrow' : '&#xe37a;',
			'icomoon-arrow-2' : '&#xe37b;',
			'icomoon-arrow-3' : '&#xe37c;',
			'icomoon-arrow-4' : '&#xe37d;',
			'icomoon-arrow-5' : '&#xe37e;',
			'icomoon-arrow-6' : '&#xe37f;',
			'icomoon-arrow-7' : '&#xe380;',
			'icomoon-arrow-8' : '&#xe381;',
			'icomoon-arrow-up-left-5' : '&#xe382;',
			'icomoon-arrow-square' : '&#xe383;',
			'icomoon-arrow-up-right-5' : '&#xe384;',
			'icomoon-arrow-right-8' : '&#xe385;',
			'icomoon-arrow-down-right-5' : '&#xe386;',
			'icomoon-arrow-down-7' : '&#xe387;',
			'icomoon-arrow-down-left-5' : '&#xe388;',
			'icomoon-arrow-left-7' : '&#xe389;',
			'icomoon-arrow-up-7' : '&#xe38a;',
			'icomoon-arrow-right-9' : '&#xe38b;',
			'icomoon-arrow-down-8' : '&#xe38c;',
			'icomoon-arrow-left-8' : '&#xe38d;',
			'icomoon-arrow-up-8' : '&#xe38e;',
			'icomoon-arrow-right-10' : '&#xe38f;',
			'icomoon-arrow-bottom' : '&#xe390;',
			'icomoon-arrow-left-9' : '&#xe391;',
			'icomoon-arrow-up-left-6' : '&#xe392;',
			'icomoon-arrow-up-9' : '&#xe393;',
			'icomoon-arrow-up-right-6' : '&#xe394;',
			'icomoon-arrow-right-11' : '&#xe395;',
			'icomoon-arrow-down-right-6' : '&#xe396;',
			'icomoon-arrow-down-9' : '&#xe397;',
			'icomoon-arrow-down-left-6' : '&#xe398;',
			'icomoon-arrow-left-10' : '&#xe399;',
			'icomoon-arrow-up-left-7' : '&#xe39a;',
			'icomoon-arrow-up-10' : '&#xe39b;',
			'icomoon-arrow-up-right-7' : '&#xe39c;',
			'icomoon-arrow-right-12' : '&#xe39d;',
			'icomoon-arrow-down-right-7' : '&#xe39e;',
			'icomoon-arrow-down-10' : '&#xe39f;',
			'icomoon-arrow-down-left-7' : '&#xe3a0;',
			'icomoon-arrow-left-11' : '&#xe3a1;',
			'icomoon-arrow-up-11' : '&#xe3a2;',
			'icomoon-arrow-right-13' : '&#xe3a3;',
			'icomoon-arrow-down-11' : '&#xe3a4;',
			'icomoon-arrow-left-12' : '&#xe3a5;',
			'icomoon-arrow-up-12' : '&#xe3a6;',
			'icomoon-arrow-right-14' : '&#xe3a7;',
			'icomoon-arrow-down-12' : '&#xe3a8;',
			'icomoon-arrow-left-13' : '&#xe3a9;',
			'icomoon-arrow-up-13' : '&#xe3aa;',
			'icomoon-arrow-right-15' : '&#xe3ab;',
			'icomoon-arrow-down-13' : '&#xe3ac;',
			'icomoon-arrow-left-14' : '&#xe3ad;',
			'icomoon-arrow-up-14' : '&#xe3ae;',
			'icomoon-arrow-right-16' : '&#xe3af;',
			'icomoon-arrow-down-14' : '&#xe3b0;',
			'icomoon-arrow-left-15' : '&#xe3b1;',
			'icomoon-arrow-up-15' : '&#xe3b2;',
			'icomoon-arrow-right-17' : '&#xe3b3;',
			'icomoon-arrow-down-15' : '&#xe3b4;',
			'icomoon-arrow-left-16' : '&#xe3b5;',
			'icomoon-arrow-up-16' : '&#xe3b6;',
			'icomoon-arrow-right-18' : '&#xe3b7;',
			'icomoon-arrow-down-16' : '&#xe3b8;',
			'icomoon-arrow-left-17' : '&#xe3b9;',
			'icomoon-menu-10' : '&#xe3ba;',
			'icomoon-menu-11' : '&#xe3bb;',
			'icomoon-menu-close' : '&#xe3bc;',
			'icomoon-menu-close-2' : '&#xe3bd;',
			'icomoon-enter-4' : '&#xe3be;',
			'icomoon-enter-5' : '&#xe3bf;',
			'icomoon-esc' : '&#xe3c0;',
			'icomoon-backspace' : '&#xe3c1;',
			'icomoon-backspace-2' : '&#xe3c2;',
			'icomoon-backspace-3' : '&#xe3c3;',
			'icomoon-tab' : '&#xe3c4;',
			'icomoon-transmission' : '&#xe3c5;',
			'icomoon-transmission-2' : '&#xe3c6;',
			'icomoon-sort' : '&#xe3c7;',
			'icomoon-sort-2' : '&#xe3c8;',
			'icomoon-key-keyboard' : '&#xe3c9;',
			'icomoon-key-A' : '&#xe3ca;',
			'icomoon-key-up' : '&#xe3cb;',
			'icomoon-key-right' : '&#xe3cc;',
			'icomoon-key-down' : '&#xe3cd;',
			'icomoon-key-left' : '&#xe3ce;',
			'icomoon-command' : '&#xe3cf;',
			'icomoon-checkbox-checked' : '&#xe3d0;',
			'icomoon-checkbox-unchecked' : '&#xe3d1;',
			'icomoon-square' : '&#xe3d2;',
			'icomoon-checkbox-partial' : '&#xe3d3;',
			'icomoon-checkbox' : '&#xe3d4;',
			'icomoon-checkbox-unchecked-2' : '&#xe3d5;',
			'icomoon-checkbox-partial-2' : '&#xe3d6;',
			'icomoon-checkbox-checked-2' : '&#xe3d7;',
			'icomoon-checkbox-unchecked-3' : '&#xe3d8;',
			'icomoon-checkbox-partial-3' : '&#xe3d9;',
			'icomoon-radio-checked' : '&#xe3da;',
			'icomoon-radio-unchecked' : '&#xe3db;',
			'icomoon-circle' : '&#xe3dc;',
			'icomoon-circle-2' : '&#xe3dd;',
			'icomoon-crop' : '&#xe3de;',
			'icomoon-crop-2' : '&#xe3df;',
			'icomoon-vector' : '&#xe3e0;',
			'icomoon-rulers' : '&#xe3e1;',
			'icomoon-scissors' : '&#xe3e2;',
			'icomoon-scissors-2' : '&#xe3e3;',
			'icomoon-scissors-3' : '&#xe3e4;',
			'icomoon-filter' : '&#xe3e5;',
			'icomoon-filter-2' : '&#xe3e6;',
			'icomoon-filter-3' : '&#xe3e7;',
			'icomoon-filter-4' : '&#xe3e8;',
			'icomoon-font' : '&#xe3e9;',
			'icomoon-font-size' : '&#xe3ea;',
			'icomoon-type' : '&#xe3eb;',
			'icomoon-text-height' : '&#xe3ec;',
			'icomoon-text-width' : '&#xe3ed;',
			'icomoon-height' : '&#xe3ee;',
			'icomoon-width' : '&#xe3ef;',
			'icomoon-bold' : '&#xe3f0;',
			'icomoon-underline' : '&#xe3f1;',
			'icomoon-italic' : '&#xe3f2;',
			'icomoon-strikethrough' : '&#xe3f3;',
			'icomoon-strikethrough-2' : '&#xe3f4;',
			'icomoon-font-size-2' : '&#xe3f5;',
			'icomoon-bold-2' : '&#xe3f6;',
			'icomoon-underline-2' : '&#xe3f7;',
			'icomoon-italic-2' : '&#xe3f8;',
			'icomoon-strikethrough-3' : '&#xe3f9;',
			'icomoon-omega' : '&#xe3fa;',
			'icomoon-sigma' : '&#xe3fb;',
			'icomoon-nbsp' : '&#xe3fc;',
			'icomoon-page-break' : '&#xe3fd;',
			'icomoon-page-break-2' : '&#xe3fe;',
			'icomoon-superscript' : '&#xe3ff;',
			'icomoon-subscript' : '&#xe400;',
			'icomoon-superscript-2' : '&#xe401;',
			'icomoon-subscript-2' : '&#xe402;',
			'icomoon-text-color' : '&#xe403;',
			'icomoon-highlight' : '&#xe404;',
			'icomoon-pagebreak' : '&#xe405;',
			'icomoon-clear-formatting' : '&#xe406;',
			'icomoon-table' : '&#xe407;',
			'icomoon-table-2' : '&#xe408;',
			'icomoon-insert-template' : '&#xe409;',
			'icomoon-pilcrow' : '&#xe40a;',
			'icomoon-left-to-right' : '&#xe40b;',
			'icomoon-right-to-left' : '&#xe40c;',
			'icomoon-paragraph-left' : '&#xe40d;',
			'icomoon-paragraph-center' : '&#xe40e;',
			'icomoon-paragraph-right' : '&#xe40f;',
			'icomoon-paragraph-justify' : '&#xe410;',
			'icomoon-paragraph-left-2' : '&#xe411;',
			'icomoon-paragraph-center-2' : '&#xe412;',
			'icomoon-paragraph-right-2' : '&#xe413;',
			'icomoon-paragraph-justify-2' : '&#xe414;',
			'icomoon-indent-increase' : '&#xe415;',
			'icomoon-indent-decrease' : '&#xe416;',
			'icomoon-paragraph-left-3' : '&#xe417;',
			'icomoon-paragraph-center-3' : '&#xe418;',
			'icomoon-paragraph-right-3' : '&#xe419;',
			'icomoon-paragraph-justify-3' : '&#xe41a;',
			'icomoon-indent-increase-2' : '&#xe41b;',
			'icomoon-indent-decrease-2' : '&#xe41c;',
			'icomoon-share' : '&#xe41d;',
			'icomoon-new-tab' : '&#xe41e;',
			'icomoon-new-tab-2' : '&#xe41f;',
			'icomoon-popout' : '&#xe420;',
			'icomoon-embed' : '&#xe421;',
			'icomoon-code' : '&#xe422;',
			'icomoon-console' : '&#xe423;',
			'icomoon-seven-segment-0' : '&#xe424;',
			'icomoon-seven-segment-1' : '&#xe425;',
			'icomoon-seven-segment-2' : '&#xe426;',
			'icomoon-seven-segment-3' : '&#xe427;',
			'icomoon-seven-segment-4' : '&#xe428;',
			'icomoon-seven-segment-5' : '&#xe429;',
			'icomoon-seven-segment-6' : '&#xe42a;',
			'icomoon-seven-segment-7' : '&#xe42b;',
			'icomoon-seven-segment-8' : '&#xe42c;',
			'icomoon-seven-segment-9' : '&#xe42d;',
			'icomoon-share-2' : '&#xe42e;',
			'icomoon-share-3' : '&#xe42f;',
			'icomoon-mail' : '&#xe430;',
			'icomoon-mail-2' : '&#xe431;',
			'icomoon-mail-3' : '&#xe432;',
			'icomoon-mail-4' : '&#xe433;',
			'icomoon-google' : '&#xe434;',
			'icomoon-google-plus' : '&#xe435;',
			'icomoon-google-plus-2' : '&#xe436;',
			'icomoon-google-plus-3' : '&#xe437;',
			'icomoon-google-plus-4' : '&#xe438;',
			'icomoon-google-drive' : '&#xe439;',
			'icomoon-facebook' : '&#xe43a;',
			'icomoon-facebook-2' : '&#xe43b;',
			'icomoon-facebook-3' : '&#xe43c;',
			'icomoon-facebook-4' : '&#xe43d;',
			'icomoon-instagram' : '&#xe43e;',
			'icomoon-twitter' : '&#xe43f;',
			'icomoon-twitter-2' : '&#xe440;',
			'icomoon-twitter-3' : '&#xe441;',
			'icomoon-feed-2' : '&#xe442;',
			'icomoon-feed-3' : '&#xe443;',
			'icomoon-feed-4' : '&#xe444;',
			'icomoon-youtube' : '&#xe445;',
			'icomoon-youtube-2' : '&#xe446;',
			'icomoon-vimeo' : '&#xe447;',
			'icomoon-vimeo2' : '&#xe448;',
			'icomoon-vimeo-2' : '&#xe449;',
			'icomoon-lanyrd' : '&#xe44a;',
			'icomoon-flickr' : '&#xe44b;',
			'icomoon-flickr-2' : '&#xe44c;',
			'icomoon-flickr-3' : '&#xe44d;',
			'icomoon-flickr-4' : '&#xe44e;',
			'icomoon-picassa' : '&#xe44f;',
			'icomoon-picassa-2' : '&#xe450;',
			'icomoon-dribbble' : '&#xe451;',
			'icomoon-dribbble-2' : '&#xe452;',
			'icomoon-dribbble-3' : '&#xe453;',
			'icomoon-forrst' : '&#xe454;',
			'icomoon-forrst-2' : '&#xe455;',
			'icomoon-deviantart' : '&#xe456;',
			'icomoon-deviantart-2' : '&#xe457;',
			'icomoon-steam' : '&#xe458;',
			'icomoon-steam-2' : '&#xe459;',
			'icomoon-github' : '&#xe45a;',
			'icomoon-github-2' : '&#xe45b;',
			'icomoon-github-3' : '&#xe45c;',
			'icomoon-github-4' : '&#xe45d;',
			'icomoon-github-5' : '&#xe45e;',
			'icomoon-wordpress' : '&#xe45f;',
			'icomoon-wordpress-2' : '&#xe460;',
			'icomoon-joomla' : '&#xe461;',
			'icomoon-blogger' : '&#xe462;',
			'icomoon-blogger-2' : '&#xe463;',
			'icomoon-tumblr' : '&#xe464;',
			'icomoon-tumblr-2' : '&#xe465;',
			'icomoon-yahoo' : '&#xe466;',
			'icomoon-tux' : '&#xe467;',
			'icomoon-apple' : '&#xe468;',
			'icomoon-finder' : '&#xe469;',
			'icomoon-android' : '&#xe46a;',
			'icomoon-windows' : '&#xe46b;',
			'icomoon-windows8' : '&#xe46c;',
			'icomoon-soundcloud' : '&#xe46d;',
			'icomoon-soundcloud-2' : '&#xe46e;',
			'icomoon-skype' : '&#xe46f;',
			'icomoon-reddit' : '&#xe470;',
			'icomoon-linkedin' : '&#xe471;',
			'icomoon-lastfm' : '&#xe472;',
			'icomoon-lastfm-2' : '&#xe473;',
			'icomoon-delicious' : '&#xe474;',
			'icomoon-stumbleupon' : '&#xe475;',
			'icomoon-stumbleupon-2' : '&#xe476;',
			'icomoon-stackoverflow' : '&#xe477;',
			'icomoon-pinterest' : '&#xe478;',
			'icomoon-pinterest-2' : '&#xe479;',
			'icomoon-xing' : '&#xe47a;',
			'icomoon-xing-2' : '&#xe47b;',
			'icomoon-flattr' : '&#xe47c;',
			'icomoon-foursquare' : '&#xe47d;',
			'icomoon-foursquare-2' : '&#xe47e;',
			'icomoon-paypal' : '&#xe47f;',
			'icomoon-paypal-2' : '&#xe480;',
			'icomoon-paypal-3' : '&#xe481;',
			'icomoon-yelp' : '&#xe482;',
			'icomoon-libreoffice' : '&#xe483;',
			'icomoon-file-pdf' : '&#xe484;',
			'icomoon-file-openoffice' : '&#xe485;',
			'icomoon-file-word' : '&#xe486;',
			'icomoon-file-excel' : '&#xe487;',
			'icomoon-file-zip' : '&#xe488;',
			'icomoon-file-powerpoint' : '&#xe489;',
			'icomoon-file-xml' : '&#xe48a;',
			'icomoon-file-css' : '&#xe48b;',
			'icomoon-html5' : '&#xe48c;',
			'icomoon-html5-2' : '&#xe48d;',
			'icomoon-css3' : '&#xe48e;',
			'icomoon-chrome' : '&#xe48f;',
			'icomoon-firefox' : '&#xe490;',
			'icomoon-IE' : '&#xe491;',
			'icomoon-opera' : '&#xe492;',
			'icomoon-IcoMoon' : '&#xe493;',
			'icomoon-safari' : '&#xe494;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icomoon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};