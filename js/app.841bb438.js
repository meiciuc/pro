(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var h=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"309b":function(t,e,i){},4533:function(t,e,i){t.exports=i.p+"media/asteroid.700707dc.mp3"},"58ce":function(t,e,i){t.exports=i.p+"media/asteroid.960a0b4d.ogg"},"5cd1":function(t,e,i){t.exports=i.p+"media/ship.606800c8.ogg"},"690a":function(t,e,i){"use strict";i("c032")},"7e73":function(t,e,i){t.exports=i.p+"media/shoot.164324a9.ogg"},b750:function(t,e,i){t.exports=i.p+"media/shoot.ecff5374.mp3"},c032:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap_container",attrs:{id:"app"}},[i("game",{staticClass:"wrap_container"})],1)},s=[],o=i("d4ec"),r=i("bee2"),c=i("262e"),l=i("2caf"),h=i("9ab4"),d=(i("309b"),i("1b40")),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{on:{click:t.handleClick}},[i("div",{ref:"game",staticClass:"game wrap_container"}),i("div",{staticClass:"options wrap_container"},[i("ul",{staticClass:"results"},[i("li",{staticClass:"subtitle has-text-white game-score"},[t._v("LEVEL: "+t._s(t.$store.state.storeGameModule.level))]),i("li",{staticClass:"subtitle has-text-white game-score"},[t._v("SCORE: "+t._s(t.$store.state.storeGameModule.score))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("LIVES: "+t._s(t.$store.state.storeGameModule.lives))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("shots: "+t._s(t.$store.state.storeGameModule.shots))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("hits: "+t._s(t.$store.state.storeGameModule.hits))]),i("li",{staticClass:"subtitle has-text-white game-lives"},[t._v("precision: "+t._s(t.precision))])]),t.start?i("div",{staticClass:"center"},[t._m(0)]):t._e(),t.finish?i("div",{staticClass:"center"},[t._m(1)]):t._e()])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("ASTEROIDS")]),i("h2",[t._v("Click to start")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("GAME OVER")]),i("h2",[t._v("Click to start")])])}],f=i("1da1"),p=(i("96cf"),i("398f")),m=(i("99af"),function t(e){Object(o["a"])(this,t),this.animation=e}),g=function t(e){Object(o["a"])(this,t),this.fsm=e},y=function(){function t(){Object(o["a"])(this,t),this.toPlay=[]}return Object(r["a"])(t,[{key:"play",value:function(t){this.toPlay.push(t)}}]),t}(),b=function t(e){Object(o["a"])(this,t),this.lifeTime=e},w=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(o["a"])(this,t),this.radius=e},O=function t(e){Object(o["a"])(this,t),this.countdown=e},j=function t(e){Object(o["a"])(this,t),this.displayObject=e},S=function(){function t(){Object(o["a"])(this,t),this.state=t.WAIT_FOR_START,this.lives=0,this.level=0,this.hits=0,this.shots=0}return Object(r["a"])(t,[{key:"setForStart",value:function(){this.lives=3,this.level=0,this.hits=0,this.shots=0,this.state=t.PLAY}},{key:"setForFinish",value:function(){this.state=t.FINISH}},{key:"update",value:function(t){this.lives=t.lives,this.level=t.level,this.hits=t.hits,this.shots=t.shots,this.state=t.state}}]),t}();S.WAIT_FOR_START="wait",S.PLAY="play",S.PAUSE="pause",S.FINISH="finish";var T=function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(o["a"])(this,t),this.shooting=!1,this.timeSinceLastShot=0,this.offsetFromParentX=e,this.offsetFromParentY=i,this.minimumShotInterval=n,this.bulletLifetime=a},_=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(o["a"])(this,t),this.trigger=e},E=function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(o["a"])(this,t),this.velocityX=e,this.velocityY=i,this.angularVelocity=n,this.damping=a},k=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;Object(o["a"])(this,t),this.left=e,this.right=i,this.accelerate=n,this.accelerationRate=a,this.rotationRate=s},M=function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(o["a"])(this,t),this.x=e,this.y=i,this.rotation=n},F=function t(e){Object(o["a"])(this,t),this.fsm=e},I=i("b85c"),A=i("7aaa"),x=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n;Object(o["a"])(this,i),n=e.call(this);var a=2*Math.random()*Math.PI,s=Math.random()*t,r=10*Math.random()+10;return n.velocityX=Math.cos(a)*r,n.velocityY=Math.sin(a)*r,n.beginFill(16777215).drawCircle(0,0,1).endFill().setTransform(Math.cos(a)*s,Math.sin(a)*s),n}return i}(A["c"]),N=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n;Object(o["a"])(this,i),n=e.call(this),n.dots=[];for(var a=i.numDots,s=0;s<a;s+=1){var r=new x(t);n.addChild(r),n.dots.push(r)}return n}return Object(r["a"])(i,[{key:"animate",value:function(t){var e,i=Object(I["a"])(this.dots);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.setTransform(n.x+n.velocityX*t,n.y+n.velocityY*t),n.alpha-=t/2}}catch(a){i.e(a)}finally{i.f()}}}]),i}(A["b"]);N.numDots=8;var C=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n;Object(o["a"])(this,i),n=e.call(this),n.moveTo(t,0).beginFill(16777215);var a=0;while(a<2*Math.PI){var s=(.75+.25*Math.random())*t,r=Math.cos(a)*s,c=Math.sin(a)*s;n.lineTo(r,c),a+=.5*Math.random()}return n.lineTo(t,0).endFill(),n}return i}(A["c"]),L=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.call(this),t.beginFill(16777215).drawCircle(0,0,2.5).endFill(),t}return i}(A["c"]),R=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.call(this),t.shape1=new A["c"],t.shape1.moveTo(10,0).beginFill(16777215).lineTo(-7,7).lineTo(-4,0).lineTo(10,0).endFill(),t.addChild(t.shape1),t.shape2=new A["c"],t.shape2.moveTo(10,0).beginFill(16777215).lineTo(-7,-7).lineTo(-4,0).lineTo(10,0).endFill(),t.addChild(t.shape2),t.vel1x=10*Math.random()-5,t.vel1y=10*Math.random()+10,t.vel2x=10*Math.random()-5,t.vel2y=-10*Math.random()-10,t.rot1=3*Math.random()-1.5,t.rot2=3*Math.random()-1.5,t}return Object(r["a"])(i,[{key:"animate",value:function(t){var e=this.shape1,i=this.shape2;e.setTransform(e.x+this.vel1x*t,e.y+this.vel1y*t,1,1,e.rotation+this.rot1*t),i.setTransform(i.x+this.vel2x*t,i.y+this.vel2y*t,1,1,i.rotation+this.rot2*t)}}]),i}(A["b"]),D=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.call(this),t.moveTo(10,0).beginFill(16777215).lineTo(-7,7).lineTo(-4,0).lineTo(-7,-7).lineTo(10,0).endFill(),t}return i}(A["c"]),P=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16777215,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2;Object(o["a"])(this,i),n=e.call(this);var c=2,l=new A["c"];if(l.beginFill(s,r).drawRect(-t/2,-c/2,t,c).endFill(),l.beginFill(s,r).drawRect(-c/2,-t/2,c,t).endFill(),n.addChild(l),a){var h=new A["e"]({fontFamily:"Arial",fontSize:12,fill:16777215}),d=new A["d"](a,h);d.setTransform(-d.width/2,-d.height/2),n.addChild(d)}return n}return i}(A["b"]),U=32,G=37,X=39,Y=38,H=function(){function t(e,i){Object(o["a"])(this,t),this.engine=e,this.config=i}return Object(r["a"])(t,[{key:"destroyEntity",value:function(t){this.engine.removeEntity(t)}},{key:"createGame",value:function(){var t=new p["Entity"]("game").add(new S);return this.engine.addEntity(t),t}},{key:"createAsteroid",value:function(t,e,i){var n=new p["Entity"],a=new p["EntityStateMachine"](n),s=4*(Math.random()-.5)*(50-t),o=4*(Math.random()-.5)*(50-t),r=2*Math.random()-1;a.createState("alive").add(E).withInstance(new E(s,o,r)).add(w).withInstance(new w(t)).add(j).withInstance(new j(new C(t)));var c=new N(t);return a.createState("destroyed").add(E).withInstance(new E(s,o,0)).add(O).withInstance(new O(3)).add(j).withInstance(new j(c)).add(m).withInstance(new m(c)),n.add(new g(a)).add(new M(e,i,0)).add(new y),a.changeState("alive"),this.engine.addEntity(n),n}},{key:"createSpaceship",value:function(){var t=new p["Entity"],e=new p["EntityStateMachine"](t),i=new E(0,0,0,15);e.createState("playing").add(E).withInstance(i).add(k).withInstance(new k(G,X,Y,100,3)).add(T).withInstance(new T(8,0,.3,2)).add(_).withInstance(new _(U)).add(w).withInstance(new w(9)).add(j).withInstance(new j(new D));var n=new R;return e.createState("destroyed").add(E).withInstance(i).add(O).withInstance(new O(5)).add(j).withInstance(new j(n)).add(m).withInstance(new m(n)),t.add(new F(e)).add(new M(this.config.width/2,this.config.height/2,0)).add(new y),e.changeState("playing"),this.engine.addEntity(t),t}},{key:"createUserBullet",value:function(t,e){var i=Math.cos(e.rotation),n=Math.sin(e.rotation),a=(new p["Entity"]).add(new b(t.bulletLifetime)).add(new M(i*t.offsetFromParentX-n*t.offsetFromParentY+e.x,n*t.offsetFromParentX+i*t.offsetFromParentY+e.y,0)).add(new w(0)).add(new E(150*i,150*n,0,0)).add(new j(new L));return this.engine.addEntity(a),a}},{key:"createDebugCrossView",value:function(t,e,i){var n=(new p["Entity"]).add(new j(new P(t,"".concat(e,":").concat(i)))).add(new M(e,i));return this.engine.addEntity(n),n}}]),t}(),z=function t(e,i){Object(o["a"])(this,t),this.width=e,this.height=i};z.DEFAULT_LIVES_COUNT=3,z.DEFAULT_SCREEN_SIZE_AREA=48e4,z.DEFAULT_ASTEROIDS_MIN_COUNT=2,z.DEFAULT_ASTEROID_MAX_SIZE=30,z.SCALE_SCREEN_TO_DEFAULT_SCREEN_SIZE_AREA=!0;i("d3b7"),i("ddb0"),i("143c"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7");var W,$=32,Z=function(){function t(){var e=this;Object(o["a"])(this,t),this.keys=new Int32Array(4),this.keyDownHandler=function(t){var i=t.keyCode,n=Math.floor(i/$);e.keys[n]|=1<<i-n*$},this.keyUpHandler=function(t){var i=t.keyCode,n=Math.floor(i/$);e.keys[n]&=~(1<<i-n*$)},window.addEventListener("keyup",this.keyUpHandler),window.addEventListener("keydown",this.keyDownHandler)}return Object(r["a"])(t,[{key:"isDown",value:function(t){var e=Math.floor(t/$);return 0!==(this.keys[e]&1<<t-e*$)}},{key:"isUp",value:function(t){return!this.isDown(t)}}]),t}(),V=Object(p["defineNode"])({animation:m},"AnimationNode"),B=Object(p["defineNode"])({asteroid:g,position:M,collision:w,audio:y},"AsteroidCollisionNode"),J=Object(p["defineNode"])({audio:y},"AudioNode"),q=Object(p["defineNode"])({bullet:b},"BulletAgeNode"),K=Object(p["defineNode"])({bullet:b,position:M,collision:w},"BulletCollisionNode"),Q=Object(p["defineNode"])({death:O},"DeathThroesNode"),tt=Object(p["defineNode"])({state:S},"GameNode"),et=Object(p["defineNode"])({control:_,gun:T,position:M,audio:y},"GunControlNode"),it=Object(p["defineNode"])({control:k,position:M,motion:E},"MotionControlNode"),nt=Object(p["defineNode"])({position:M,motion:E},"MovementNode"),at=Object(p["defineNode"])({position:M,display:j},"RenderNode"),st=Object(p["defineNode"])({spaceship:F,position:M,collision:w,audio:y},"SpaceshipCollisionNode"),ot=Object(p["defineNode"])({spaceship:F,position:M},"SpaceshipNode"),rt=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.call(this,V)}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){t.animation.animation.animate(e)}}]),i}(p["ListIteratingSystem"]),ct=(p["ListIteratingSystem"],function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n;return Object(o["a"])(this,i),n=e.call(this,q),n.creator=t,n}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){var i=t.bullet;i.lifeTime-=e,i.lifeTime<=0&&this.creator.destroyEntity(t.entity)}}]),i}(p["ListIteratingSystem"])),lt=(i("4057"),i("4ec9"),i("3ca3"),i("d81d"),i("4533")),ht=i.n(lt),dt=i("58ce"),ut=i.n(dt),vt=i("b750"),ft=i.n(vt),pt=i("7e73"),mt=i.n(pt),gt=i("ced2"),yt=i.n(gt),bt=i("5cd1"),wt=i.n(bt);(function(t){t[t["asteroid"]=0]="asteroid",t[t["ship"]=1]="ship",t[t["shoot"]=2]="shoot"})(W||(W={}));var Ot=[{key:W.asteroid,mp3:ht.a,ogg:ut.a},{key:W.shoot,mp3:ft.a,ogg:mt.a},{key:W.ship,mp3:yt.a,ogg:wt.a}];function jt(){var t=document.createElement("audio"),e=t.canPlayType("audio/mpeg"),i=t.canPlayType("audio/ogg"),n=null;return"probably"===e?n="mp3":"probably"===i?n="ogg":"maybe"===e?n="mp3":"maybe"===i&&(n="ogg"),n}function St(t){return Tt.apply(this,arguments)}function Tt(){return Tt=Object(f["a"])(regeneratorRuntime.mark((function t(e){var i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=new Map,n=jt(),a=function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(n,a){var s,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return s=t.sent,t.next=5,s.arrayBuffer();case 5:return o=t.sent,t.next=8,e.decodeAudioData(o);case 8:r=t.sent,i.set(a,r);case 10:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}(),!n){t.next=6;break}return t.next=6,Promise.all(Ot.map((function(t){return a(t[n],t.key)})));case 6:return t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)}))),Tt.apply(this,arguments)}var _t=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n;return Object(o["a"])(this,i),n=e.call(this),n.games=null,n.spaceships=null,n.asteroids=null,n.bullets=null,n.creator=t,n}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){this.games=t.getNodeList(tt),this.spaceships=t.getNodeList(st),this.asteroids=t.getNodeList(B),this.bullets=t.getNodeList(K)}},{key:"update",value:function(t){for(var e=z.DEFAULT_ASTEROID_MAX_SIZE,i=Math.floor(e*(1/3)),n=Math.floor(e/6),a=this.bullets.head;a;a=a.next)for(var s=this.asteroids.head;s;s=s.next){var o=Math.hypot(s.position.x-a.position.x,s.position.y-a.position.y);if(o<=s.collision.radius){if(this.creator.destroyEntity(a.entity),s.collision.radius>i){var r=s.collision.radius-i,c=s.position.x+10*Math.random()-n,l=s.position.y+10*Math.random()-n;this.creator.createAsteroid(r,c,l),c=s.position.x+10*Math.random()-n,l=s.position.y+10*Math.random()-n,this.creator.createAsteroid(r,c,l)}s.asteroid.fsm.changeState("destroyed"),s.audio.play(W.asteroid),this.games.head&&(this.games.head.state.hits+=1);break}}for(var h=this.spaceships.head;h;h=h.next)for(var d=this.asteroids.head;d;d=d.next){var u=Math.hypot(d.position.x-h.position.x,d.position.y-h.position.y);if(u<=d.collision.radius+h.collision.radius){h.spaceship.fsm.changeState("destroyed"),h.audio.play(W.ship),this.games.head&&(this.games.head.state.lives-=1);break}}}},{key:"removeFromEngine",value:function(t){this.games=null,this.spaceships=null,this.asteroids=null,this.bullets=null}}]),i}(p["System"]),Et=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n;return Object(o["a"])(this,i),n=e.call(this,Q),n.creator=t,n}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){t.death.countdown-=e,t.death.countdown<=0&&this.creator.destroyEntity(t.entity)}}]),i}(p["ListIteratingSystem"]),kt=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t,n){var a;return Object(o["a"])(this,i),a=e.call(this),a.games=null,a.spaceships=null,a.asteroids=null,a.bullets=null,a.currentGameState="",a.creator=t,a.config=n,a}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){this.games=t.getNodeList(tt),this.spaceships=t.getNodeList(ot),this.asteroids=t.getNodeList(B),this.bullets=t.getNodeList(K)}},{key:"removeFromEngine",value:function(t){this.games=null,this.spaceships=null,this.asteroids=null,this.bullets=null}},{key:"update",value:function(t){var e=this.games.head;if(e)if(e.state.state==S.PLAY){if(this.currentGameState==S.WAIT_FOR_START||this.currentGameState==S.FINISH)while(null!==(i=this.asteroids)&&void 0!==i&&i.head){var i;this.creator.destroyEntity(this.asteroids.head.entity)}if(this.currentGameState=e.state.state,this.spaceships.empty)if(e.state.lives){for(var n=this.config.width/2,a=this.config.height/2,s=Math.floor(1.7*z.DEFAULT_ASTEROID_MAX_SIZE),o=!0,r=this.asteroids.head;r;r=r.next){var c=Math.hypot(r.position.x-n,r.position.y-a);if(c<=r.collision.radius+s){o=!1;break}}o&&this.creator.createSpaceship()}else e.state.setForFinish();if(this.asteroids.empty&&this.bullets.empty&&this.spaceships.head){var l=this.spaceships.head;e.state.level+=1;for(var h=z.DEFAULT_ASTEROIDS_MIN_COUNT+e.state.level,d=Math.floor(2.7*z.DEFAULT_ASTEROID_MAX_SIZE),u=0;u<h;u+=1){var v=void 0,f=void 0;do{v=Math.random()*this.config.width,f=Math.random()*this.config.height}while(Math.hypot(v-l.position.x,f-l.position.y)<=d);this.creator.createAsteroid(z.DEFAULT_ASTEROID_MAX_SIZE,v,f)}}}else this.currentGameState=e.state.state}}]),i}(p["System"]),Mt=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t,n){var a;return Object(o["a"])(this,i),a=e.call(this),a.guns=null,a.game=null,a.keyPoll=t,a.creator=n,a}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){this.guns=t.getNodeList(et),this.game=t.getNodeList(tt)}},{key:"removeFromEngine",value:function(t){this.guns=null,this.game=null}},{key:"update",value:function(t){for(var e=null===(i=this.guns)||void 0===i?void 0:i.head;e;e=null===(n=e)||void 0===n?void 0:n.next){var i,n,a=e,s=a.control,o=e,r=o.position,c=e,l=c.gun;l.shooting=this.keyPoll.isDown(s.trigger),l.timeSinceLastShot+=t,l.shooting&&l.timeSinceLastShot>=l.minimumShotInterval&&(this.game&&this.game.head&&this.game.head.state.shots++,this.creator.createUserBullet(l,r),e.audio.play(W.shoot),l.timeSinceLastShot=0)}}}]),i}(p["System"]),Ft=i("91dc"),It=i("2f62");n["a"].use(It["b"]);var At,xt=new It["a"]({}),Nt=Object(Ft["createModule"])(xt,"storeGameModule",{namespaced:!0,state:{state:S.WAIT_FOR_START,score:0,lives:0,level:0,hits:0,shots:0},mutations:{reset:function(t){t.state=S.WAIT_FOR_START,t.score=0,t.lives=0,t.level=0},setState:function(t,e){t.state=e},setScore:function(t,e){t.score=e},setLives:function(t,e){t.lives=e},setLevel:function(t,e){t.level=e},setHits:function(t,e){t.hits=e},setShots:function(t,e){t.shots=e}},getters:{level:function(t){var e=t.level;return e},state:function(t){var e=t.state;return e},score:function(t){var e=t.score;return e},lives:function(t){var e=t.lives;return e},hits:function(t){var e=t.hits;return e},shots:function(t){var e=t.shots;return e}}}),Ct=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(o["a"])(this,i),t=e.apply(this,arguments),t.game=null,t.gameState=new S,t}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){this.game=t.getNodeList(tt)}},{key:"removeFromEngine",value:function(t){this.game=null}},{key:"update",value:function(t){var e,i,n=null===(e=this.game)||void 0===e||null===(i=e.head)||void 0===i?void 0:i.state;n&&(Nt.getters.state!=this.gameState.state?this.gameState.state!=S.WAIT_FOR_START&&this.gameState.state!=S.FINISH||Nt.getters.state!=S.PLAY?Nt.getters.state==S.FINISH?(this.gameState.setForFinish(),n.setForFinish()):(this.gameState.state=Nt.getters.state,n.state=this.gameState.state):(this.gameState.setForStart(),n.setForStart()):(n.state!=this.gameState.state&&(this.gameState.state=n.state,Nt.mutations.setState(n.state)),Nt.mutations.setLives(n.lives),Nt.mutations.setLevel(n.level),Nt.mutations.setShots(n.shots),Nt.mutations.setHits(n.hits)),this.gameState.update(n))}}]),i}(p["System"]),Lt=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n;return Object(o["a"])(this,i),n=e.call(this,it),n.keyPoll=t,n}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){var i=t.control,n=t.position,a=t.motion;this.keyPoll.isDown(i.left)&&(n.rotation-=i.rotationRate*e),this.keyPoll.isDown(i.right)&&(n.rotation+=i.rotationRate*e),this.keyPoll.isDown(i.accelerate)&&(a.velocityX+=Math.cos(n.rotation)*i.accelerationRate*e,a.velocityY+=Math.sin(n.rotation)*i.accelerationRate*e)}}]),i}(p["ListIteratingSystem"]),Rt=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n;return Object(o["a"])(this,i),n=e.call(this,nt),n.config=t,n}return Object(r["a"])(i,[{key:"updateNode",value:function(t,e){var i=t.position,n=t.motion,a=this.config,s=a.width,o=a.height;if(i.x+=n.velocityX*e,i.y+=n.velocityY*e,i.x<0&&(i.x+=s),i.x>s&&(i.x-=s),i.y<0&&(i.y+=o),i.y>o&&(i.y-=o),i.rotation+=n.angularVelocity*e,n.damping>0){var r=Math.abs(Math.cos(i.rotation)*n.damping*e),c=Math.abs(Math.sin(i.rotation)*n.damping*e);n.velocityX>r?n.velocityX-=r:n.velocityX<-r?n.velocityX+=r:n.velocityX=0,n.velocityY>c?n.velocityY-=c:n.velocityY<-c?n.velocityY+=c:n.velocityY=0}}}]),i}(p["ListIteratingSystem"]),Dt=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{emitStageEvents:!0},s=arguments.length>2?arguments[2]:void 0;Object(o["a"])(this,i),n=e.call(this),n.resized=!1,n.nodes=null,n.spaceship=null,n.addToDisplay=function(t){var e=t.display.displayObject;n.stage.addChild(e),n.options.emitStageEvents&&e.emit("addedToStage")},n.handleWindowResize=function(t){n.resized=!0},n.removeFromDisplay=function(t){var e=t.display.displayObject;n.stage.removeChild(e),n.options.emitStageEvents&&e.emit("removedFromStage")},n.container=t,n.options=a,n.gameConfig=s;var r=new A["a"]({width:n.gameConfig.width,height:n.gameConfig.height,backgroundColor:0});return n.renderer=r.renderer,n.stage=r.stage,n.view=r.view,n.resize(),n}return Object(r["a"])(i,[{key:"addToEngine",value:function(t){window.addEventListener("resize",this.handleWindowResize),this.container.appendChild(this.view),this.nodes=t.getNodeList(at);for(var e=this.nodes.head;e;e=e.next)this.addToDisplay(e);this.nodes.nodeAdded.add(this.addToDisplay),this.nodes.nodeRemoved.add(this.removeFromDisplay),this.spaceship=t.getNodeList(ot)}},{key:"update",value:function(t){this.resized&&(this.resized=!1,this.resize());for(var e=this.nodes.head;e;e=e.next){var i=e,n=i.display,a=i.position;n.displayObject.setTransform(a.x,a.y,1,1,a.rotation)}this.renderer.render(this.stage)}},{key:"resize",value:function(){var t=this.container.getBoundingClientRect(),e=t.width*t.height,i=e/z.DEFAULT_SCREEN_SIZE_AREA;this.gameConfig.width=t.width/i,this.gameConfig.height=t.height/i,this.stage.scale.set(i,i),this.renderer.view.style.width=t.width+"px",this.renderer.view.style.height=t.height+"px",this.renderer.resize(t.width,t.height)}},{key:"removeFromEngine",value:function(t){this.nodes&&(this.nodes.nodeAdded.remove(this.addToDisplay),this.nodes.nodeRemoved.remove(this.removeFromDisplay),this.nodes=null),this.spaceship=null,this.container.removeChild(this.view)}}]),i}(p["System"]);function Pt(t){return Ut.apply(this,arguments)}function Ut(){return Ut=Object(f["a"])(regeneratorRuntime.mark((function t(e){var i,n,a,s,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=new z(e.clientWidth,e.clientHeight),n=new p["Engine"],a=new H(n,i),s=new Z,o=new p["FrameTickProvider"],r=new AudioContext,t.next=8,St(r);case 8:t.sent,o.add((function(t){return n.update(t)})),o.start(),n.addSystem(new kt(a,i),At.preUpdate),n.addSystem(new Lt(s),At.update),n.addSystem(new Mt(s,a),At.update),n.addSystem(new ct(a),At.update),n.addSystem(new Et(a),At.update),n.addSystem(new Rt(i),At.move),n.addSystem(new _t(a),At.resolveCollisions),n.addSystem(new rt,At.animate),n.addSystem(new Ct,At.preUpdate),n.addSystem(new Dt(e,{emitStageEvents:!0},i),At.render),a.createGame();case 22:case"end":return t.stop()}}),t)}))),Ut.apply(this,arguments)}(function(t){t[t["preUpdate"]=1]="preUpdate",t[t["update"]=2]="update",t[t["move"]=3]="move",t[t["resolveCollisions"]=4]="resolveCollisions",t[t["animate"]=5]="animate",t[t["render"]=6]="render",t[t["audio"]=7]="audio"})(At||(At={}));var Gt=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return Object(r["a"])(i,[{key:"mounted",value:function(){var t=this;Nt.mutations.reset(),setTimeout((function(){Pt(t.$refs.game)}),100)}},{key:"destroyed",value:function(){console.log("Game","destroyed")}},{key:"start",get:function(){return Nt.getters.state==S.WAIT_FOR_START}},{key:"finish",get:function(){return Nt.getters.state==S.FINISH}},{key:"precision",get:function(){var t=Math.floor(Nt.getters.hits/Nt.getters.shots*100);return t?"".concat(t,"%"):""}},{key:"handleClick",value:function(){Nt.getters.state!=S.WAIT_FOR_START&&Nt.getters.state!=S.FINISH||Nt.mutations.setState(S.PLAY)}}]),i}(d["b"]);Gt=Object(h["a"])([Object(d["a"])({components:{}})],Gt);var Xt=Gt,Yt=Xt,Ht=(i("690a"),i("2877")),zt=Object(Ht["a"])(Yt,u,v,!1,null,"883e05de",null),Wt=zt.exports,$t=function(t){Object(c["a"])(i,t);var e=Object(l["a"])(i);function i(){return Object(o["a"])(this,i),e.apply(this,arguments)}return Object(r["a"])(i,[{key:"mounted",value:function(){console.log("App mounted")}}]),i}(d["b"]);$t=Object(h["a"])([Object(d["a"])({components:{Game:Wt}})],$t);var Zt=$t,Vt=Zt,Bt=Object(Ht["a"])(Vt,a,s,!1,null,null,null),Jt=Bt.exports;n["a"].config.productionTip=!1,new n["a"]({store:xt,render:function(t){return t(Jt)}}).$mount("#app")},ced2:function(t,e,i){t.exports=i.p+"media/ship.fc37c3a9.mp3"}});
//# sourceMappingURL=app.841bb438.js.map