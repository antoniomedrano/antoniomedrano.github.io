// Created by iWeb 3.0.4 local-build-20170215

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,353),url:'Videos_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Videos_files/stroke_1.png'},{rect:new IWRect(1,-1,423,2),url:'Videos_files/stroke_2.png'},{rect:new IWRect(424,-1,2,2),url:'Videos_files/stroke_3.png'},{rect:new IWRect(424,1,2,353),url:'Videos_files/stroke_4.png'},{rect:new IWRect(424,354,2,2),url:'Videos_files/stroke_5.png'},{rect:new IWRect(1,354,423,2),url:'Videos_files/stroke_6.png'},{rect:new IWRect(-1,354,2,2),url:'Videos_files/stroke_7.png'}],new IWSize(425,355))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Videos_files/VideosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
