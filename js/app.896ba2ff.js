(function(t){function e(e){for(var n,o,r=e[0],c=e[1],h=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var l=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"309b":function(t,e,i){},4533:function(t,e,i){t.exports=i.p+"media/asteroid.700707dc.mp3"},"58ce":function(t,e,i){t.exports=i.p+"media/asteroid.960a0b4d.ogg"},"5cd1":function(t,e,i){t.exports=i.p+"media/ship.606800c8.ogg"},"7e73":function(t,e,i){t.exports=i.p+"media/shoot.164324a9.ogg"},b750:function(t,e,i){t.exports=i.p+"media/shoot.ecff5374.mp3"},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap_container",attrs:{id:"app"}},[i("game",{staticClass:"wrap_container"})],1)},s=[],o=i("d4ec"),r=i("bee2"),c=i("262e"),h=i("2caf"),l=i("9ab4"),u=(i("309b"),i("1b40")),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{on:{click:t.handleClick}},[i("div",{staticClass:"options wrap_container"},[i("ul",{staticClass:"results"},[i("li",{staticClass:"subtitle has-text-white game-score"},[t._v("LEVEL: "+t._s(t.$store.state.storeGameModule.level))]),i("li",{staticClass:"subtitle has-text-white game-score"},[t._v("SCORE: "+t._s(t.$store.state.storeGameModule.score))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("LIVES: "+t._s(t.$store.state.storeGameModule.lives))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("shots: "+t._s(t.$store.state.storeGameModule.shots))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("hits: "+t._s(t.$store.state.storeGameModule.hits))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("precision: "+t._s(t.precision))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("---------------")]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("boundingClientRect: "+t._s(t.$store.state.storeDevelopingModule.boundingClientRect))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("deviceSize: "+t._s(t.$store.state.storeDevelopingModule.deviceSize))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("displayRatio: "+t._s(t.$store.state.storeDevelopingModule.displayRatio))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("scale: "+t._s(t.$store.state.storeDevelopingModule.scale))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("sceneSize: "+t._s(t.$store.state.storeDevelopingModule.sceneSize))])]),t.start?i("div",{staticClass:"center"},[t._m(0)]):t._e(),t.finish?i("div",{staticClass:"center"},[t._m(1)]):t._e()]),i("div",{ref:"game",staticClass:"game wrap_container"})])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("ASTEROIDS")]),i("h2",[t._v("Click to start")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("GAME OVER")]),i("h2",[t._v("Click to start")])])}],m=i("1da1"),f=(i("96cf"),i("398f")),p=(i("99af"),function t(e){Object(o["a"])(this,t),this.animation=e}),g=function t(e){Object(o["a"])(this,t),this.fsm=e},y=function(){function t(){Object(o["a"])(this,t),this.toPlay=[]}return Object(r["a"])(t,[{key:"play",value:function(t){this.toPlay.push(t)}}]),t}(),w=function t(){Object(o["a"])(this,t)},b=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(o["a"])(this,t),this.radius=e},S=function t(e){Object(o["a"])(this,t),this.countdown=e},O=function t(e){Object(o["a"])(this,t),this.displayObject=e},E=function(){function t(){Object(o["a"])(this,t),this.state=t.WAIT_FOR_START,this.lives=0,this.level=0,this.hits=0,this.shots=0}return Object(r["a"])(t,[{key:"setForStart",value:function(){this.lives=3,this.level=0,this.hits=0,this.shots=0,this.state=t.PLAY}},{key:"setForFinish",value:function(){this.state=t.FINISH}},{key:"update",value:function(t){this.lives=t.lives,this.level=t.level,this.hits=t.hits,this.shots=t.shots,this.state=t.state}}]),t}();E.WAIT_FOR_START="wait",E.PLAY="play",E.PAUSE="pause",E.FINISH="finish";var _=function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(o["a"])(this,t),this.shooting=!1,this.timeSinceLastShot=0,this.offsetFromParentX=e,this.offsetFromParentY=i,this.minimumShotInterval=n,this.bulletLifetime=a},A=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(o["a"])(this,t),this.trigger=e},M=function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(o["a"])(this,t),this.velocityX=e,this.velocityY=i,this.angularVelocity=n,this.damping=a},T=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;Object(o["a"])(this,t),this.left=e,this.right=i,this.accelerate=n,this.accelerationRate=a,this.rotationRate=s},j=function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(o["a"])(this,t),this.x=e,this.y=i,this.rotation=n},D=function t(e){Object(o["a"])(this,t),this.fsm=e},k=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Object(o["a"])(this,t),this.time=n,this.startX=0,this.startY=0,this.startAngle=0,this.magnitude=16,this.tiltAngle=1,this.randomInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},this.displayObject=e,this.magnitude=i,this.startX=e.x,this.startY=e.y,this.startAngle=e.rotation}return Object(r["a"])(t,[{key:"animate",value:function(t){this.time-=t,this.upAndDownShake()}},{key:"upAndDownShake",value:function(){var t=this.displayObject;if(this.time>=0){t.x=this.startX,t.y=this.startY;var e=this.magnitude*this.time;t.x+=this.randomInt(-e,e),t.y+=this.randomInt(-e,e)}else t.x=this.startX,t.y=this.startY}},{key:"angularShake",value:function(){var t=this.displayObject;if(this.time>=0){var e=this.magnitude*this.time;t.rotation=this.startAngle+e*this.tiltAngle/100,this.tiltAngle*=-1}else t.rotation=this.startAngle}}]),t}(),R=i("b85c"),I=i("7aaa"),C=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t){var n;Object(o["a"])(this,i),n=e.call(this);var a=2*Math.random()*Math.PI,s=Math.random()*t,r=10*Math.random()+10;return n.velocityX=Math.cos(a)*r,n.velocityY=Math.sin(a)*r,n.beginFill(16777215).drawCircle(0,0,1).endFill().setTransform(Math.cos(a)*s,Math.sin(a)*s),n}return i}(I["c"]),F=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t){var n;Object(o["a"])(this,i),n=e.call(this),n.dots=[];for(var a=i.numDots,s=0;s<a;s+=1){var r=new C(t);n.addChild(r),n.dots.push(r)}return n}return Object(r["a"])(i,[{key:"animate",value:function(t){var e,i=Object(R["a"])(this.dots);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.setTransform(n.x+n.velocityX*t,n.y+n.velocityY*t),n.alpha-=t/2}}catch(a){i.e(a)}finally{i.f()}}}]),i}(I["b"]);F.numDots=8;var x=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t){var n;Object(o["a"])(this,i),n=e.call(this),n.moveTo(t,0).beginFill(16777215);var a=0;while(a<2*Math.PI){var s=(.75+.25*Math.random())*t,r=Math.cos(a)*s,c=Math.sin(a)*s;n.lineTo(r,c),a+=.5*Math.random()}return n.lineTo(t,0).endFill(),n}return i}(I["c"]),L=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.call(this),t.beginFill(16777215).drawCircle(0,0,2.5).endFill(),t}return i}(I["c"]),N=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.call(this),t.shape1=new I["c"],t.shape1.moveTo(10,0).beginFill(16777215).lineTo(-7,7).lineTo(-4,0).lineTo(10,0).endFill(),t.addChild(t.shape1),t.shape2=new I["c"],t.shape2.moveTo(10,0).beginFill(16777215).lineTo(-7,-7).lineTo(-4,0).lineTo(10,0).endFill(),t.addChild(t.shape2),t.vel1x=10*Math.random()-5,t.vel1y=10*Math.random()+10,t.vel2x=10*Math.random()-5,t.vel2y=-10*Math.random()-10,t.rot1=3*Math.random()-1.5,t.rot2=3*Math.random()-1.5,t}return Object(r["a"])(i,[{key:"animate",value:function(t){var e=this.shape1,i=this.shape2;e.setTransform(e.x+this.vel1x*t,e.y+this.vel1y*t,1,1,e.rotation+this.rot1*t),i.setTransform(i.x+this.vel2x*t,i.y+this.vel2y*t,1,1,i.rotation+this.rot2*t)}}]),i}(I["b"]),P=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.call(this),t.moveTo(10,0).beginFill(16777215).lineTo(-7,7).lineTo(-4,0).lineTo(-7,-7).lineTo(10,0).endFill(),t}return i}(I["c"]),X=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16777215,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2;Object(o["a"])(this,i),n=e.call(this);var c=2,h=new I["c"];if(h.beginFill(s,r).drawRect(-t/2,-c/2,t,c).endFill(),h.beginFill(s,r).drawRect(-c/2,-t/2,c,t).endFill(),n.addChild(h),a){var l=new I["e"]({fontFamily:"Arial",fontSize:12,fill:16777215}),u=new I["d"](a,l);u.setTransform(-u.width/2,-u.height/2),n.addChild(u)}return n}return i}(I["b"]),U=32,Y=37,z=39,H=38,G={GAME:"game",CAMERA:"camera"},B=function(){function t(e,i){Object(o["a"])(this,t),this.engine=e,this.config=i}return Object(r["a"])(t,[{key:"destroyEntity",value:function(t){this.engine.removeEntity(t)}},{key:"registerCameraContainer",value:function(t){var e=new f["Entity"](G.CAMERA).add(new O(t));return this.engine.addEntity(e),e}},{key:"createGame",value:function(){var t=new f["Entity"](G.GAME).add(new E);return this.engine.addEntity(t),t}},{key:"createAsteroid",value:function(t,e,i){var n=new f["Entity"],a=new f["EntityStateMachine"](n),s=4*(Math.random()-.5)*(50-t),o=4*(Math.random()-.5)*(50-t),r=2*Math.random()-1;a.createState("alive").add(M).withInstance(new M(s,o,r)).add(b).withInstance(new b(t)).add(O).withInstance(new O(new x(t)));var c=new F(t);return a.createState("destroyed").add(M).withInstance(new M(s,o,0)).add(S).withInstance(new S(3)).add(O).withInstance(new O(c)).add(p).withInstance(new p(c)),n.add(new g(a)).add(new j(e,i,0)).add(new y),a.changeState("alive"),this.engine.addEntity(n),n}},{key:"createSpaceship",value:function(){var t=new f["Entity"],e=new f["EntityStateMachine"](t),i=new M(0,0,0,15);e.createState("playing").add(M).withInstance(i).add(T).withInstance(new T(Y,z,H,100,3)).add(_).withInstance(new _(8,0,.3,2)).add(A).withInstance(new A(U)).add(b).withInstance(new b(9)).add(O).withInstance(new O(new P));var n=new N;return e.createState("destroyed").add(M).withInstance(i).add(S).withInstance(new S(5)).add(O).withInstance(new O(n)).add(p).withInstance(new p(n)),t.add(new D(e)).add(new j(this.config.width/2,this.config.height/2,0)).add(new y),e.changeState("playing"),this.engine.addEntity(t),t}},{key:"createUserBullet",value:function(t,e){var i=Math.cos(e.rotation),n=Math.sin(e.rotation),a=(new f["Entity"]).add(new w).add(new S(t.bulletLifetime)).add(new j(i*t.offsetFromParentX-n*t.offsetFromParentY+e.x,n*t.offsetFromParentX+i*t.offsetFromParentY+e.y,0)).add(new b(0)).add(new M(150*i,150*n,0,0)).add(new O(new L));return this.engine.addEntity(a),a}},{key:"createDebugCrossView",value:function(t,e,i){var n=(new f["Entity"]).add(new O(new X(t,"".concat(e,":").concat(i)))).add(new j(e,i));return this.engine.addEntity(n),n}},{key:"cameraShake",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this.engine.getEntityByName(G.CAMERA);if(!i)return null;var n=(new f["Entity"]).add(new S(1)).add(new p(new k(i.get(O).displayObject,t,e)));return this.engine.addEntity(n),n}}]),t}(),W=function t(e,i){Object(o["a"])(this,t),this.width=e,this.height=i};W.DEFAULT_LIVES_COUNT=3,W.DEFAULT_SCREEN_SIZE_AREA=48e4,W.DEFAULT_ASTEROIDS_MIN_COUNT=2,W.DEFAULT_ASTEROID_MAX_SIZE=30,W.DEFAULT_CAMERA_SHAKE_MAGNITUDE_FOR_ASTEROID=W.DEFAULT_ASTEROID_MAX_SIZE/8,W.DEFAULT_CAMERA_SHAKE_TIME_FOR_ASTEROID=2,W.DEFAULT_CAMERA_SHAKE_MAGNITUDE_FOR_SPACESHIP=W.DEFAULT_ASTEROID_MAX_SIZE/4,W.DEFAULT_CAMERA_SHAKE_TIME_FOR_SPACESHIP=3,W.SCALE_SCREEN_TO_DEFAULT_SCREEN_SIZE_AREA=!0;i("d3b7"),i("ddb0"),i("143c"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7");var K,V=32,$=function(){function t(){var e=this;Object(o["a"])(this,t),this.keys=new Int32Array(4),this.keyDownHandler=function(t){var i=t.keyCode,n=Math.floor(i/V);e.keys[n]|=1<<i-n*V},this.keyUpHandler=function(t){var i=t.keyCode,n=Math.floor(i/V);e.keys[n]&=~(1<<i-n*V)},window.addEventListener("keyup",this.keyUpHandler),window.addEventListener("keydown",this.keyDownHandler)}return Object(r["a"])(t,[{key:"isDown",value:function(t){var e=Math.floor(t/V);return 0!==(this.keys[e]&1<<t-e*V)}},{key:"isUp",value:function(t){return!this.isDown(t)}}]),t}(),Z=Object(f["defineNode"])({animation:p},"AnimationNode"),J=Object(f["defineNode"])({asteroid:g,position:j,collision:b,audio:y},"AsteroidCollisionNode"),q=Object(f["defineNode"])({audio:y},"AudioNode"),Q=Object(f["defineNode"])({bullet:w,position:j,collision:b},"BulletCollisionNode"),tt=Object(f["defineNode"])({death:S},"DeathThroesNode"),et=Object(f["defineNode"])({state:E},"GameNode"),it=Object(f["defineNode"])({control:A,gun:_,position:j,audio:y},"GunControlNode"),nt=Object(f["defineNode"])({control:T,position:j,motion:M},"MotionControlNode"),at=Object(f["defineNode"])({position:j,motion:M,collision:b},"MovementNode"),st=Object(f["defineNode"])({position:j,display:O},"RenderNode"),ot=Object(f["defineNode"])({spaceship:D,position:j,collision:b,audio:y},"SpaceshipCollisionNode"),rt=Object(f["defineNode"])({spaceship:D,position:j},"SpaceshipNode"),ct=(Object(f["defineNode"])({shake:k},"CameraShakeNode"),function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){return Object(o["a"])(this,i),e.call(this,Z)}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){t.animation.animation.animate(e)}}]),i}(f["ListIteratingSystem"])),ht=(f["ListIteratingSystem"],i("4057"),i("4ec9"),i("3ca3"),i("d81d"),i("4533")),lt=i.n(ht),ut=i("58ce"),dt=i.n(ut),vt=i("b750"),mt=i.n(vt),ft=i("7e73"),pt=i.n(ft),gt=i("ced2"),yt=i.n(gt),wt=i("5cd1"),bt=i.n(wt);(function(t){t[t["asteroid"]=0]="asteroid",t[t["ship"]=1]="ship",t[t["shoot"]=2]="shoot"})(K||(K={}));var St=[{key:K.asteroid,mp3:lt.a,ogg:dt.a},{key:K.shoot,mp3:mt.a,ogg:pt.a},{key:K.ship,mp3:yt.a,ogg:bt.a}];function Ot(){var t=document.createElement("audio"),e=t.canPlayType("audio/mpeg"),i=t.canPlayType("audio/ogg"),n=null;return"probably"===e?n="mp3":"probably"===i?n="ogg":"maybe"===e?n="mp3":"maybe"===i&&(n="ogg"),n}function Et(t){return _t.apply(this,arguments)}function _t(){return _t=Object(m["a"])(regeneratorRuntime.mark((function t(e){var i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=new Map,n=Ot(),a=function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n,a){var s,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return s=t.sent,t.next=5,s.arrayBuffer();case 5:return o=t.sent,t.next=8,e.decodeAudioData(o);case 8:r=t.sent,i.set(a,r);case 10:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}(),!n){t.next=6;break}return t.next=6,Promise.all(St.map((function(t){return a(t[n],t.key)})));case 6:return t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)}))),_t.apply(this,arguments)}var At=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t){var n;return Object(o["a"])(this,i),n=e.call(this),n.games=null,n.spaceships=null,n.asteroids=null,n.bullets=null,n.creator=t,n}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){this.games=t.getNodeList(et),this.spaceships=t.getNodeList(ot),this.asteroids=t.getNodeList(J),this.bullets=t.getNodeList(Q)}},{key:"update",value:function(t){for(var e=W.DEFAULT_ASTEROID_MAX_SIZE,i=Math.floor(e*(1/3)),n=Math.floor(e/6),a=this.bullets.head;a;a=a.next)for(var s=this.asteroids.head;s;s=s.next){var o=Math.hypot(s.position.x-a.position.x,s.position.y-a.position.y);if(o<=s.collision.radius){if(this.creator.destroyEntity(a.entity),s.collision.radius>i){var r=s.collision.radius-i,c=s.position.x+10*Math.random()-n,h=s.position.y+10*Math.random()-n;this.creator.createAsteroid(r,c,h),c=s.position.x+10*Math.random()-n,h=s.position.y+10*Math.random()-n,this.creator.createAsteroid(r,c,h)}s.asteroid.fsm.changeState("destroyed"),s.audio.play(K.asteroid),this.games.head&&(this.games.head.state.hits+=1);var l=s.collision.radius/W.DEFAULT_ASTEROID_MAX_SIZE,u=W.DEFAULT_CAMERA_SHAKE_MAGNITUDE_FOR_ASTEROID*l;this.creator.cameraShake(Math.floor(u),W.DEFAULT_CAMERA_SHAKE_TIME_FOR_ASTEROID*l);break}}for(var d=this.spaceships.head;d;d=d.next)for(var v=this.asteroids.head;v;v=v.next){var m=Math.hypot(v.position.x-d.position.x,v.position.y-d.position.y);if(m<=v.collision.radius+d.collision.radius){d.spaceship.fsm.changeState("destroyed"),d.audio.play(K.ship),this.games.head&&(this.games.head.state.lives-=1),this.creator.cameraShake(W.DEFAULT_CAMERA_SHAKE_MAGNITUDE_FOR_SPACESHIP,W.DEFAULT_CAMERA_SHAKE_TIME_FOR_SPACESHIP);break}}}},{key:"removeFromEngine",value:function(t){this.games=null,this.spaceships=null,this.asteroids=null,this.bullets=null}}]),i}(f["System"]),Mt=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t){var n;return Object(o["a"])(this,i),n=e.call(this,tt),n.creator=t,n}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){t.death.countdown-=e,t.death.countdown<=0&&this.creator.destroyEntity(t.entity)}}]),i}(f["ListIteratingSystem"]),Tt=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t,n){var a;return Object(o["a"])(this,i),a=e.call(this),a.games=null,a.spaceships=null,a.asteroids=null,a.bullets=null,a.currentGameState="",a.creator=t,a.config=n,a}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){this.games=t.getNodeList(et),this.spaceships=t.getNodeList(rt),this.asteroids=t.getNodeList(J),this.bullets=t.getNodeList(Q)}},{key:"removeFromEngine",value:function(t){this.games=null,this.spaceships=null,this.asteroids=null,this.bullets=null}},{key:"update",value:function(t){var e=this.games.head;if(e)if(e.state.state==E.PLAY){if(this.currentGameState==E.WAIT_FOR_START||this.currentGameState==E.FINISH)while(null!==(i=this.asteroids)&&void 0!==i&&i.head){var i;this.creator.destroyEntity(this.asteroids.head.entity)}if(this.currentGameState=e.state.state,this.spaceships.empty)if(e.state.lives){for(var n=this.config.width/2,a=this.config.height/2,s=Math.floor(1.7*W.DEFAULT_ASTEROID_MAX_SIZE),o=!0,r=this.asteroids.head;r;r=r.next){var c=Math.hypot(r.position.x-n,r.position.y-a);if(c<=r.collision.radius+s){o=!1;break}}o&&this.creator.createSpaceship()}else e.state.setForFinish();if(this.asteroids.empty&&this.bullets.empty&&this.spaceships.head){var h=this.spaceships.head;e.state.level+=1;for(var l=W.DEFAULT_ASTEROIDS_MIN_COUNT+e.state.level,u=Math.floor(2.7*W.DEFAULT_ASTEROID_MAX_SIZE),d=0;d<l;d+=1){var v=void 0,m=void 0;do{v=Math.random()*this.config.width,m=Math.random()*this.config.height}while(Math.hypot(v-h.position.x,m-h.position.y)<=u);this.creator.createAsteroid(W.DEFAULT_ASTEROID_MAX_SIZE,v,m)}}}else this.currentGameState=e.state.state}}]),i}(f["System"]),jt=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t,n,a){var s;return Object(o["a"])(this,i),s=e.call(this),s.guns=null,s.game=null,s.keyPoll=t,s.touchPoll=n,s.creator=a,s}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){this.guns=t.getNodeList(it),this.game=t.getNodeList(et)}},{key:"removeFromEngine",value:function(t){this.guns=null,this.game=null}},{key:"update",value:function(t){for(var e=null===(i=this.guns)||void 0===i?void 0:i.head;e;e=null===(n=e)||void 0===n?void 0:n.next){var i,n,a=e,s=a.control,o=e,r=o.position,c=e,h=c.gun;h.shooting=this.keyPoll.isDown(s.trigger)||this.touchPoll.click,h.timeSinceLastShot+=t,h.shooting&&h.timeSinceLastShot>=h.minimumShotInterval&&(this.game&&this.game.head&&this.game.head.state.shots++,this.creator.createUserBullet(h,r),e.audio.play(K.shoot),h.timeSinceLastShot=0)}}}]),i}(f["System"]),Dt=i("91dc"),kt=i("2f62");n["a"].use(kt["b"]);var Rt,It=new kt["a"]({}),Ct=Object(Dt["createModule"])(It,"storeGameModule",{namespaced:!0,state:{state:E.WAIT_FOR_START,score:0,lives:0,level:0,hits:0,shots:0},mutations:{reset:function(t){t.state=E.WAIT_FOR_START,t.score=0,t.lives=0,t.level=0},setState:function(t,e){t.state=e},setScore:function(t,e){t.score=e},setLives:function(t,e){t.lives=e},setLevel:function(t,e){t.level=e},setHits:function(t,e){t.hits=e},setShots:function(t,e){t.shots=e}},getters:{level:function(t){var e=t.level;return e},state:function(t){var e=t.state;return e},score:function(t){var e=t.score;return e},lives:function(t){var e=t.lives;return e},hits:function(t){var e=t.hits;return e},shots:function(t){var e=t.shots;return e}}}),Ft=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.apply(this,arguments),t.game=null,t.gameState=new E,t}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){this.game=t.getNodeList(et)}},{key:"removeFromEngine",value:function(t){this.game=null}},{key:"update",value:function(t){var e,i,n=null===(e=this.game)||void 0===e||null===(i=e.head)||void 0===i?void 0:i.state;n&&(Ct.getters.state!=this.gameState.state?this.gameState.state!=E.WAIT_FOR_START&&this.gameState.state!=E.FINISH||Ct.getters.state!=E.PLAY?Ct.getters.state==E.FINISH?(this.gameState.setForFinish(),n.setForFinish()):(this.gameState.state=Ct.getters.state,n.state=this.gameState.state):(this.gameState.setForStart(),n.setForStart()):(n.state!=this.gameState.state&&(this.gameState.state=n.state,Ct.mutations.setState(n.state)),Ct.mutations.setLives(n.lives),Ct.mutations.setLevel(n.level),Ct.mutations.setShots(n.shots),Ct.mutations.setHits(n.hits)),this.gameState.update(n))}}]),i}(f["System"]),xt=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t,n){var a;return Object(o["a"])(this,i),a=e.call(this,nt),a.keyPoll=t,a.touchPoll=n,a}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){var i=t.control,n=t.position,a=t.motion;(this.keyPoll.isDown(i.left)||this.touchPoll.left)&&(n.rotation-=i.rotationRate*e,a.velocityX+=Math.cos(n.rotation)*i.accelerationRate/2*e,a.velocityY+=Math.sin(n.rotation)*i.accelerationRate/2*e),(this.keyPoll.isDown(i.right)||this.touchPoll.right)&&(n.rotation+=i.rotationRate*e,a.velocityX+=Math.cos(n.rotation)*i.accelerationRate/2*e,a.velocityY+=Math.sin(n.rotation)*i.accelerationRate/2*e),(this.keyPoll.isDown(i.accelerate)||this.touchPoll.top)&&(a.velocityX+=Math.cos(n.rotation)*i.accelerationRate*e,a.velocityY+=Math.sin(n.rotation)*i.accelerationRate*e)}}]),i}(f["ListIteratingSystem"]),Lt=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t,n){var a;return Object(o["a"])(this,i),a=e.call(this,at),a.creator=t,a.config=n,a}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){var i=t.collision.radius,n=t.position,a=t.motion,s=this.config,o=s.width,r=s.height;n.x+=a.velocityX*e,n.y+=a.velocityY*e;var c=!1;if(n.x<-i&&(n.x+=o+2*i,c=!0),n.x>o+i&&(n.x-=o+2*i,c=!0),n.y<-i&&(n.y+=r+2*i,c=!0),n.y>r+i&&(n.y-=r+2*i,c=!0),c&&t.entity.get(w))this.creator.destroyEntity(t.entity);else if(n.rotation+=a.angularVelocity*e,a.damping>0){var h=Math.abs(Math.cos(n.rotation)*a.damping*e),l=Math.abs(Math.sin(n.rotation)*a.damping*e);a.velocityX>h?a.velocityX-=h:a.velocityX<-h?a.velocityX+=h:a.velocityX=0,a.velocityY>l?a.velocityY-=l:a.velocityY<-l?a.velocityY+=l:a.velocityY=0}}}]),i}(f["ListIteratingSystem"]),Nt=Object(Dt["createModule"])(It,"storeDevelopingModule",{namespaced:!0,state:{displayRatio:1,boundingClientRect:"",deviceSize:"800x600",sceneSize:"800x600",scale:1},mutations:{reset:function(t){t.displayRatio=1,t.deviceSize="",t.sceneSize="",t.scale=1},setBoundingClientRect:function(t,e){t.boundingClientRect=e},setDiplayRatio:function(t,e){t.displayRatio=e},setScale:function(t,e){t.scale=e},setDeviceSize:function(t,e){t.deviceSize=e},setSceneSize:function(t,e){t.sceneSize=e}},getters:{boundingClientRect:function(t){var e=t.boundingClientRect;return e},diplayRatio:function(t){var e=t.displayRatio;return e},scale:function(t){var e=t.scale;return e},deviceSize:function(t){var e=t.deviceSize;return e},sceneSize:function(t){var e=t.sceneSize;return e}}}),Pt=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{emitStageEvents:!0},s=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;Object(o["a"])(this,i),n=e.call(this),n.resized=!1,n.nodes=null,n.spaceship=null,n.addToDisplay=function(t){var e=t.display.displayObject;n.stage.addChild(e),n.options.emitStageEvents&&e.emit("addedToStage")},n.handleWindowResize=function(t){n.resized=!0},n.removeFromDisplay=function(t){var e=t.display.displayObject;n.stage.removeChild(e),n.options.emitStageEvents&&e.emit("removedFromStage")},n.container=t,n.options=a,n.entityCreator=s,n.gameConfig=r;var c=new I["a"]({width:n.gameConfig.width,height:n.gameConfig.height,backgroundColor:0});return n.renderer=c.renderer,n.stage=c.stage,n.view=c.view,n.entityCreator.registerCameraContainer(n.stage),n.resize(),n}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){window.addEventListener("resize",this.handleWindowResize),this.container.appendChild(this.view),this.nodes=t.getNodeList(st);for(var e=this.nodes.head;e;e=e.next)this.addToDisplay(e);this.nodes.nodeAdded.add(this.addToDisplay),this.nodes.nodeRemoved.add(this.removeFromDisplay),this.spaceship=t.getNodeList(rt)}},{key:"update",value:function(t){this.resized&&(this.resized=!1,this.resize());for(var e=this.nodes.head;e;e=e.next){var i=e,n=i.display,a=i.position;n.displayObject.setTransform(a.x,a.y,1,1,a.rotation)}this.renderer.render(this.stage)}},{key:"resize",value:function(){var t=this.container.getBoundingClientRect();t.width=320,t.height=409;var e=t.width*t.height,i=e/W.DEFAULT_SCREEN_SIZE_AREA;i=i<.7?.7:i,this.gameConfig.width=t.width/i,this.gameConfig.height=t.height/i,this.stage.scale.set(i,i),this.renderer.view.style.width=t.width+"px",this.renderer.view.style.height=t.height+"px",this.renderer.resize(t.width,t.height),Nt.mutations.setBoundingClientRect("".concat(t.x,", ").concat(t.y,", ").concat(t.width,", ").concat(t.height)),Nt.mutations.setDeviceSize("".concat(window.innerWidth,", ").concat(window.innerHeight)),Nt.mutations.setDiplayRatio(window.devicePixelRatio),Nt.mutations.setSceneSize("".concat(t.width,", ").concat(t.height)),Nt.mutations.setScale(i)}},{key:"removeFromEngine",value:function(t){this.nodes&&(this.nodes.nodeAdded.remove(this.addToDisplay),this.nodes.nodeRemoved.remove(this.removeFromDisplay),this.nodes=null),this.spaceship=null,this.container.removeChild(this.view)}}]),i}(f["System"]);(function(t){t[t["preUpdate"]=1]="preUpdate",t[t["update"]=2]="update",t[t["move"]=3]="move",t[t["resolveCollisions"]=4]="resolveCollisions",t[t["animate"]=5]="animate",t[t["render"]=6]="render",t[t["audio"]=7]="audio"})(Rt||(Rt={}));var Xt=function(){function t(){var e=this;Object(o["a"])(this,t),this.mouseDown=!1,this.mouseDownX=0,this.mouseDownY=0,this.mouseDownTimestamp=0,this.mouseDownRadius=20,this.mouseMoveX=0,this.mouseMoveY=0,this.clickTimeout=200,this.distance=0,this.mouseLeft=!1,this.mouseRight=!1,this.mouseTop=!1,this.mouseBottom=!1,this.handleTouchStart=function(t){console.log("handleTouchStart",t,t.touches);for(var i=0;i<t.touches.length;i++){console.log(i,t.touches[i].target);break}for(var n=0;n<t.touches.length;n++){e.mouseDown=!0,e.mouseDownX=t.touches[n].clientX,e.mouseDownY=t.touches[n].clientY,e.mouseDownTimestamp=Date.now();break}},this.handleTouchEnd=function(t){e.handleTouchMove(t),e.mouseDown=!1,e.resetDirections()},this.handleTouchMove=function(t){if(e.mouseDown)for(var i=0;i<t.touches.length;i++){e.mouseMoveX=t.touches[0].clientX,e.mouseMoveY=t.touches[0].clientY,e.distance=e.getDistance(e.mouseDownX,e.mouseDownY,e.mouseMoveX,e.mouseMoveY),e.distance>e.mouseDownRadius?e.mouseDownY-e.mouseMoveY>e.mouseDownRadius?e.mouseTop=!0:e.mouseDownX-e.mouseMoveX>e.mouseDownRadius?e.mouseLeft=!0:e.mouseMoveX-e.mouseDownX>e.mouseDownRadius?e.mouseRight=!0:e.mouseBottom=!0:e.resetDirections();break}},this.handleMouseDown=function(t){e.mouseDown=!0,e.mouseDownX=t.clientX,e.mouseDownY=t.clientY,e.mouseDownTimestamp=Date.now()},this.handleMouseUp=function(t){e.handleMouseMove(t),e.mouseDown=!1,e.resetDirections()},this.handleMouseMove=function(t){e.mouseDown&&(e.mouseMoveX=t.clientX,e.mouseMoveY=t.clientY,e.distance=e.getDistance(e.mouseDownX,e.mouseDownY,e.mouseMoveX,e.mouseMoveY),e.distance>e.mouseDownRadius?e.mouseDownY-e.mouseMoveY>e.mouseDownRadius?e.mouseTop=!0:e.mouseDownX-e.mouseMoveX>e.mouseDownRadius?e.mouseLeft=!0:e.mouseMoveX-e.mouseDownX>e.mouseDownRadius?e.mouseRight=!0:e.mouseBottom=!0:e.resetDirections())},window.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove),document.body.addEventListener("touchstart",this.handleTouchStart),document.body.addEventListener("touchend",this.handleTouchEnd),document.body.addEventListener("touchmove",this.handleTouchMove)}return Object(r["a"])(t,[{key:"getDistance",value:function(t,e,i,n){var a=t-i,s=e-n;return Math.sqrt(a*a+s*s)}},{key:"resetDirections",value:function(){this.mouseLeft=!1,this.mouseRight=!1,this.mouseTop=!1,this.mouseBottom=!1}},{key:"left",get:function(){return this.mouseLeft}},{key:"right",get:function(){return this.mouseRight}},{key:"top",get:function(){return this.mouseTop}},{key:"down",get:function(){return this.mouseBottom}},{key:"click",get:function(){return!this.mouseDown&&Date.now()-this.mouseDownTimestamp<=this.clickTimeout&&this.distance<this.mouseDownRadius}}]),t}();function Ut(t){return Yt.apply(this,arguments)}function Yt(){return Yt=Object(m["a"])(regeneratorRuntime.mark((function t(e){var i,n,a,s,o,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=new W(e.clientWidth,e.clientHeight),n=new f["Engine"],a=new B(n,i),s=new $,o=new Xt,r=new f["FrameTickProvider"],c=new AudioContext,t.next=9,Et(c);case 9:t.sent,r.add((function(t){return n.update(t)})),r.start(),n.addSystem(new Tt(a,i),Rt.preUpdate),n.addSystem(new xt(s,o),Rt.update),n.addSystem(new jt(s,o,a),Rt.update),n.addSystem(new Mt(a),Rt.update),n.addSystem(new Lt(a,i),Rt.move),n.addSystem(new At(a),Rt.resolveCollisions),n.addSystem(new ct,Rt.animate),n.addSystem(new Ft,Rt.preUpdate),n.addSystem(new Pt(e,{emitStageEvents:!0},a,i),Rt.render),a.createGame();case 22:case"end":return t.stop()}}),t)}))),Yt.apply(this,arguments)}var zt=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return Object(r["a"])(i,[{key:"mounted",value:function(){var t=this;Ct.mutations.reset(),setTimeout((function(){Ut(t.$refs.game)}),100)}},{key:"destroyed",value:function(){console.log("Game","destroyed")}},{key:"start",get:function(){return Ct.getters.state==E.WAIT_FOR_START}},{key:"finish",get:function(){return Ct.getters.state==E.FINISH}},{key:"precision",get:function(){var t=Math.floor(Ct.getters.hits/Ct.getters.shots*100);return t?"".concat(t,"%"):""}},{key:"handleClick",value:function(){Ct.getters.state!=E.WAIT_FOR_START&&Ct.getters.state!=E.FINISH||Ct.mutations.setState(E.PLAY)}}]),i}(u["b"]);zt=Object(l["a"])([Object(u["a"])({components:{}})],zt);var Ht=zt,Gt=Ht,Bt=(i("efae"),i("2877")),Wt=Object(Bt["a"])(Gt,d,v,!1,null,"64e378ac",null),Kt=Wt.exports,Vt=function(t){Object(c["a"])(i,t);var e=Object(h["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return Object(r["a"])(i,[{key:"mounted",value:function(){console.log("App mounted")}}]),i}(u["b"]);Vt=Object(l["a"])([Object(u["a"])({components:{Game:Kt}})],Vt);var $t=Vt,Zt=$t,Jt=Object(Bt["a"])(Zt,a,s,!1,null,null,null),qt=Jt.exports,Qt=function(){function t(){var e=this;Object(o["a"])(this,t),this.viewportWidth=0,Promise.all([this.setupBridge(),this.setupVK()]).then((function(){e.setupIFrame()})).catch((function(t){}))}return Object(r["a"])(t,[{key:"handleBridgeSubscribe",value:function(t){switch(console.log("vkBridge event",t),t.type){case"VKWebAppUpdateConfig":console.log("e.data.viewport_width, e.data.viewport_height",t.data.viewport_width,t.data.viewport_height),this.viewportWidth=t.data.viewport_width;break;case"VKWebAppResizeWindowResult":console.log("VKWebAppResizeWindowResult",t.data.width,t.data.height);break}}},{key:"handleOnScrollTop",value:function(t,e,i){console.log("handleOnScrollTop",e)}},{key:"setupBridge",value:function(){var t=this;return new Promise((function(e,i){var n=function t(){vkBridge.unsubscribe(t),e(!0)};vkBridge.subscribe(n),vkBridge.subscribe((function(e){t.handleBridgeSubscribe(e)})),vkBridge.send("VKWebAppInit",{})}))}},{key:"setupVK",value:function(){return new Promise((function(t,e){VK.init((function(){t(!0)}),(function(){e(!1)}),"5.130")}))}},{key:"setupIFrame",value:function(){var t=this;VK.addCallback("onScrollTop",(function(e,i,n){t.handleOnScrollTop(e,i,n)})),VK.callMethod("scrollTop")}}]),t}();n["a"].config.productionTip=!1,new n["a"]({store:It,render:function(t){return t(qt)}}).$mount("#app"),new Qt},ced2:function(t,e,i){t.exports=i.p+"media/ship.fc37c3a9.mp3"},efae:function(t,e,i){"use strict";i("f708")},f708:function(t,e,i){}});
//# sourceMappingURL=app.896ba2ff.js.map