(function(g){var window=this;'use strict';var $rb=function(a){g.S.call(this,{I:"div",S:"ytp-inline-preview-ui"});this.C=!1;this.player=a;this.T(a,"onStateChange",this.M1);this.T(a,"videodatachange",this.N1);this.T(a,"onInlinePreviewModeChange",this.v7);this.B=new g.Ou(this.K1,null,this);g.J(this,this.B)},H6=function(a){g.UV.call(this,a);
this.j=new $rb(this.player);g.J(this,this.j);this.j.hide();g.HU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.ev(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.w($rb,g.S);g.k=$rb.prototype;
g.k.show=function(){g.Pu(this.B);if(!this.C){this.tooltip=new g.fY(this.player,this);g.J(this,this.tooltip);g.HU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rd=new g.xW(this.player);g.J(this,this.Rd);this.j=new g.S({I:"div",Ma:["ytp-inline-preview-scrim"]});g.J(this,this.j);this.j.Ja(this.element);this.T(this.j.element,"click",this.L1);this.D=new g.ZX(this.player,this,300);g.J(this,this.D);this.D.Ja(this.j.element);this.controls=new g.S({I:"div",S:"ytp-inline-preview-controls"});g.J(this,
this.controls);this.controls.Ja(this.element);var a=new g.rX(this.player,this,!1);g.J(this,a);a.Ja(this.controls.element);a=new g.XX(this.player,this);g.J(this,a);a.Ja(this.controls.element);this.progressBar=new g.yX(this.player,this);g.J(this,this.progressBar);g.HU(this.player,this.progressBar.element,4);this.T(this.player,"appresize",this.Zb);this.T(this.player,"fullscreentoggled",this.Zb);this.Zb();this.C=!0}0!==this.player.getPlayerState()&&g.S.prototype.show.call(this);this.progressBar.show();
this.player.jb("onInlinePreviewUiReady")};
g.k.hide=function(){this.B.stop();g.S.prototype.hide.call(this);this.player.isInline()||this.C&&this.progressBar.hide()};
g.k.xa=function(){g.S.prototype.xa.call(this)};
g.k.L1=function(a){a.target===this.j.element&&this.player.jb("onExpandInlinePreview",a)};
g.k.v7=function(){g.hv(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.Vf=function(){this.progressBar.Lc();this.D.Lc()};
g.k.K1=function(){this.Vf();g.Pu(this.B)};
g.k.Zb=function(){g.U_a(this.progressBar,0,this.player.rb().getPlayerSize().width,!1);g.zX(this.progressBar)};
g.k.M1=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.N1=function(a,b){if(this.player.isInline()){g.hv(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.aC);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.hv(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Le=function(){return this.tooltip};
g.k.Et=function(a,b,c,d,e){var f=d=0,h=0,l=g.us(a);if(b){c=g.cv(b,"ytp-mute-button");var m=g.cv(b,"ytp-subtitles-button"),n=g.rs(b,this.element);b=g.us(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.rb().getPlayerSize().width;h=g.je(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};g.w(H6,g.UV);H6.prototype.jl=function(){return!1};
H6.prototype.load=function(){this.player.hideControls();this.j.show()};
H6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.TV("inline_preview",H6);})(_yt_player);
