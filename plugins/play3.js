
















































const _0x2da3df=_0x1097;function _0x1097(_0xba465b,_0x261e00){const _0x937c9c=_0x937c();return _0x1097=function(_0x109746,_0x341e14){_0x109746=_0x109746-0x166;let _0x28c980=_0x937c9c[_0x109746];return _0x28c980;},_0x1097(_0xba465b,_0x261e00);}(function(_0x882562,_0x1730a3){const _0x2e1d03=_0x1097,_0x3103ca=_0x882562();while(!![]){try{const _0x36ab06=parseInt(_0x2e1d03(0x194))/0x1+parseInt(_0x2e1d03(0x18d))/0x2+-parseInt(_0x2e1d03(0x17d))/0x3*(parseInt(_0x2e1d03(0x186))/0x4)+parseInt(_0x2e1d03(0x16d))/0x5+-parseInt(_0x2e1d03(0x177))/0x6*(parseInt(_0x2e1d03(0x16e))/0x7)+-parseInt(_0x2e1d03(0x17b))/0x8*(parseInt(_0x2e1d03(0x187))/0x9)+-parseInt(_0x2e1d03(0x192))/0xa;if(_0x36ab06===_0x1730a3)break;else _0x3103ca['push'](_0x3103ca['shift']());}catch(_0x342a98){_0x3103ca['push'](_0x3103ca['shift']());}}}(_0x937c,0x5bb28));function _0x937c(){const _0x37ffa5=['56bBnpBN','🌏\x20*Release\x20Ago:*\x20','9sGbZEl','❌\x20Please\x20provide\x20a\x20Query\x20or\x20Youtube\x20URL!','⏳\x20*Duration:*\x20','results','extendedTextMessage','key','mp3','🤍🤍🤍🤍🤍🤍🤍🤍🤍','❌\x20No\x20results\x20found!','487804DwTFjo','153630ttJpOM','❌\x20Download\x20link\x20not\x20found!','length','messages.upsert','play3','✅\x20Media\x20Upload\x20Successful\x20✅','703800YxzmCG','videoId','2\x20*Document\x20Type*\x20📁\x0a\x0a','match','Error!','2968170RyyIBj','messages','703729BBFEgb','message','conversation','🎵\x20*Title:*\x20','audio/mpeg','url','../command','1\x20*Audio\x20Type*\x20🎵\x0a','error','startsWith','\x20NEXUS-XMD\x0a\x0a','❌\x20Invalid\x20choice!\x20Reply\x20with\x201\x20or\x202.','@dark-yasiya/scrap','ytsearch','Unknown','name','.mp3','2273250gQfmud','21Shmkcw','❌\x20Failed\x20to\x20fetch\x20video!','⏳\x20Processing...','❌\x20*An\x20error\x20occurred:*\x20','result','ytmp3','https://youtube.com/watch?v=','sendMessage','👤\x20*Author:*\x20','705054sbHwgw','stanzaId','trim','Download\x20Ytmp3'];_0x937c=function(){return _0x37ffa5;};return _0x937c();}const config=require('../config'),{cmd}=require(_0x2da3df(0x19a)),DY_SCRAP=require(_0x2da3df(0x168)),dy_scrap=new DY_SCRAP();function replaceYouTubeID(_0x5d172c){const _0x885cef=_0x2da3df,_0x16f6da=/(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,_0x2a7460=_0x5d172c[_0x885cef(0x190)](_0x16f6da);return _0x2a7460?_0x2a7460[0x1]:null;}cmd({'pattern':_0x2da3df(0x18b),'alias':[_0x2da3df(0x183),_0x2da3df(0x173)],'react':'🎵','desc':_0x2da3df(0x17a),'category':'download','use':'.song\x20<Text\x20or\x20YT\x20URL>','filename':__filename},async(_0x26c63c,_0x124ff9,_0x34c2c9,{from:_0x2fcef9,q:_0x1d3c94,reply:_0x3a4f96})=>{const _0x203860=_0x2da3df;try{if(!_0x1d3c94)return await _0x3a4f96(_0x203860(0x17e));let _0x441633=_0x1d3c94[_0x203860(0x19d)]('https://')?replaceYouTubeID(_0x1d3c94):null;if(!_0x441633){const _0x557c68=await dy_scrap[_0x203860(0x169)](_0x1d3c94);if(!_0x557c68?.[_0x203860(0x180)]?.['length'])return await _0x3a4f96(_0x203860(0x185));_0x441633=_0x557c68[_0x203860(0x180)][0x0][_0x203860(0x18e)];}const _0x2f43d4=await dy_scrap['ytsearch'](_0x203860(0x174)+_0x441633);if(!_0x2f43d4?.[_0x203860(0x180)]?.[_0x203860(0x189)])return await _0x3a4f96(_0x203860(0x16f));const {url:_0x5682fb,title:_0x343e04,image:_0x339369,timestamp:_0xa6099b,ago:_0xdf2c9b,views:_0x887ea,author:_0x5e2b36}=_0x2f43d4[_0x203860(0x180)][0x0];let _0x22c06f=_0x203860(0x166)+(_0x203860(0x197)+(_0x343e04||_0x203860(0x16a))+'\x0a')+(_0x203860(0x17f)+(_0xa6099b||_0x203860(0x16a))+'\x0a')+('👀\x20*Views:*\x20'+(_0x887ea||'Unknown')+'\x0a')+(_0x203860(0x17c)+(_0xdf2c9b||_0x203860(0x16a))+'\x0a')+(_0x203860(0x176)+(_0x5e2b36?.[_0x203860(0x16b)]||_0x203860(0x16a))+'\x0a')+('🖇\x20*Url:*\x20'+(_0x5682fb||'Unknown')+'\x0a\x0a')+'🔽\x20*Reply\x20with\x20your\x20choice:*\x0a'+_0x203860(0x19b)+_0x203860(0x18f)+(''+(config['FOOTER']||_0x203860(0x184)));const _0x53da39=await _0x26c63c[_0x203860(0x175)](_0x2fcef9,{'image':{'url':_0x339369},'caption':_0x22c06f},{'quoted':_0x34c2c9}),_0x41c2ce=_0x53da39[_0x203860(0x182)]['id'];await _0x26c63c['sendMessage'](_0x2fcef9,{'react':{'text':'🎶','key':_0x53da39[_0x203860(0x182)]}}),_0x26c63c['ev']['on'](_0x203860(0x18a),async _0xed98f0=>{const _0x11dee4=_0x203860;try{const _0x4f9e47=_0xed98f0?.[_0x11dee4(0x193)][0x0];if(!_0x4f9e47?.[_0x11dee4(0x195)])return;const _0x303685=_0x4f9e47?.[_0x11dee4(0x195)]?.[_0x11dee4(0x196)]||_0x4f9e47?.['message']?.[_0x11dee4(0x181)]?.['text'],_0x9b0fb6=_0x4f9e47?.[_0x11dee4(0x195)]?.[_0x11dee4(0x181)]?.['contextInfo']?.[_0x11dee4(0x178)]===_0x41c2ce;if(!_0x9b0fb6)return;let _0x50433f=_0x303685[_0x11dee4(0x179)](),_0x54d313,_0x1675dd,_0x521423;if(_0x50433f==='1'){_0x54d313=await _0x26c63c[_0x11dee4(0x175)](_0x2fcef9,{'text':'⏳\x20Processing...'},{'quoted':_0x34c2c9}),_0x521423=await dy_scrap[_0x11dee4(0x173)](_0x11dee4(0x174)+_0x441633);let _0x585fda=_0x521423?.[_0x11dee4(0x172)]?.['download']?.['url'];if(!_0x585fda)return await _0x3a4f96(_0x11dee4(0x188));_0x1675dd={'audio':{'url':_0x585fda},'mimetype':_0x11dee4(0x198)};}else{if(_0x50433f==='2'){_0x54d313=await _0x26c63c['sendMessage'](_0x2fcef9,{'text':_0x11dee4(0x170)},{'quoted':_0x34c2c9});const _0x4a080c=await dy_scrap[_0x11dee4(0x173)](_0x11dee4(0x174)+_0x441633);let _0x23fd82=_0x4a080c?.[_0x11dee4(0x172)]?.['download']?.[_0x11dee4(0x199)];if(!_0x23fd82)return await _0x3a4f96(_0x11dee4(0x188));_0x1675dd={'document':{'url':_0x23fd82},'fileName':_0x343e04+_0x11dee4(0x16c),'mimetype':_0x11dee4(0x198),'caption':_0x343e04};}else return await _0x3a4f96(_0x11dee4(0x167));}await _0x26c63c[_0x11dee4(0x175)](_0x2fcef9,_0x1675dd,{'quoted':_0x34c2c9}),await _0x26c63c[_0x11dee4(0x175)](_0x2fcef9,{'text':_0x11dee4(0x18c),'edit':_0x54d313[_0x11dee4(0x182)]});}catch(_0x535558){console[_0x11dee4(0x19c)](_0x535558),await _0x3a4f96('❌\x20*An\x20error\x20occurred\x20while\x20processing:*\x20'+(_0x535558[_0x11dee4(0x195)]||_0x11dee4(0x191)));}});}catch(_0x54ec81){console[_0x203860(0x19c)](_0x54ec81),await _0x26c63c[_0x203860(0x175)](_0x2fcef9,{'react':{'text':'❌','key':_0x34c2c9['key']}}),await _0x3a4f96(_0x203860(0x171)+(_0x54ec81['message']||_0x203860(0x191)));}});
