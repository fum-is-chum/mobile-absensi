"use strict";(self.webpackChunkangular_SIMAt=self.webpackChunkangular_SIMAt||[]).push([[179],{6762:(m,d,t)=>{t.d(d,{a:()=>l});var s=t(5978),n=t(8007),S=t(931);let l=(()=>{class a{constructor(c,i){this._authService=c,this._router=i}canActivate(){return!!this._authService.isLoggedIn||(this._router.navigate(["/login"]),!1)}canLoad(){return!!this._authService.isLoggedIn||(this._router.navigate(["/login"]),!1)}}return a.\u0275fac=function(c){return new(c||a)(s.LFG(n.e),s.LFG(S.F0))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},601:(m,d,t)=>{t.d(d,{i:()=>l});var s=t(5978),n=t(8007),S=t(931);let l=(()=>{class a{constructor(c,i){this._authService=c,this._router=i}canActivate(){return!this._authService.isLoggedIn||(this._router.navigate(["/app/home"]),!1)}canLoad(){return!this._authService.isLoggedIn||(this._router.navigate(["/app/home"]),!1)}}return a.\u0275fac=function(c){return new(c||a)(s.LFG(n.e),s.LFG(S.F0))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},398:(m,d,t)=>{t.d(d,{r:()=>a});var s=t(8006),n=t(5978),S=t(3046),l=t(8007);let a=(()=>{class e{constructor(i,p){this._http=i,this._authService=p}login(i){return new Promise((p,h)=>{this._http.post(`${s.N.apiUrl}/login`,i,{responseType:"json"}).subscribe({next:f=>{const g=f.Result;null!==g.Data?(g.Data.username=i.username,g.Data.password=i.password,this._authService.updateToken(g.AccessToken),this._authService.updateUserData(g.Data),p(g)):h("Data user kosong! Silahkan cek tipe akun user")},error:f=>{var g;return h(null!==(g=f.error)&&void 0!==g?g:f)},complete:()=>{}})})}register(i){return new Promise((p,h)=>{this._http.post(`${s.N.apiUrl}/register`,i,{responseType:"json"}).subscribe({next:f=>p(f.Result),error:f=>h(f.error),complete:()=>{}})})}logout(){return new Promise((i,p)=>{this._http.post(`${s.N.apiUrl}/logout`,null,{responseType:"json"}).subscribe({next:h=>i(h),error:h=>p(h.error),complete:()=>{this._authService.reset()}})})}}return e.\u0275fac=function(i){return new(i||e)(n.LFG(S.eN),n.LFG(l.e))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8007:(m,d,t)=>{t.d(d,{e:()=>S});var s=t(8435),n=t(5978);let S=(()=>{class l{constructor(){this.TokenSubject=new s.X(null),this.UserSubject=new s.X(null),this.retrieveToken(),this.retrieveUserData()}get token$(){return this.TokenSubject.asObservable()}get userId(){var e;return(null===(e=this.getUserData())||void 0===e?void 0:e.id)||null}getAuthToken(){var e;return null!==(e=this.TokenSubject.value)&&void 0!==e?e:this.retrieveToken()}getUserData(){var e;return null!==(e=this.UserSubject.value)&&void 0!==e?e:this.retrieveUserData()}updateToken(e){e?localStorage.setItem("AccessToken",e):localStorage.removeItem("AccessToken"),this.TokenSubject.next(e)}retrieveToken(){const e=localStorage.getItem("AccessToken");return this.updateToken(e),e}updateUserData(e){localStorage.setItem("user_data",JSON.stringify(e)),this.UserSubject.next(e)}retrieveUserData(){const e=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")):null;return this.UserSubject.next(e),e}getSavedCredentials(){if(this.getUserData()){const{username:e,password:c}=this.getUserData();return{username:e,password:c}}return null}get isLoggedIn(){return null!==this.TokenSubject.value}reset(){this.UserSubject.next(null),this.TokenSubject.next(null),localStorage.removeItem("AccessToken"),localStorage.removeItem("user_data")}}return l.\u0275fac=function(e){return new(e||l)},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8006:(m,d,t)=>{t.d(d,{N:()=>s});const s={production:!0,apiUrl:"https://presensi.ypsimlibrary.com/api",url:"https://presensi.ypsimlibrary.com"}},5830:(m,d,t)=>{var s=t(6562),n=t(5978),S=t(5154),l=t(3046),a=t(9351),e=t(7338),c=t(8208),i=t(9894),p=t(8006),h=t(931),f=t(6762);const L=[{path:"",pathMatch:"full",redirectTo:"app"},{path:"login",canLoad:[t(601).i],loadChildren:()=>Promise.all([t.e(613),t.e(223),t.e(596)]).then(t.bind(t,9596)).then(r=>r.LoginModule)},{path:"app",canLoad:[f.a],loadChildren:()=>Promise.all([t.e(613),t.e(223),t.e(266),t.e(718)]).then(t.bind(t,5718)).then(r=>r.LayoutModule)},{path:"camera",loadChildren:()=>Promise.all([t.e(613),t.e(266),t.e(114)]).then(t.bind(t,7114)).then(r=>r.CameraModule)}];let M=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[h.Bz.forRoot(L,{useHash:!0,preloadingStrategy:h.wm})],h.Bz]}),r})();var U=t(2610);let P=(()=>{class r{constructor(o,v){this.swUpdate=o,this.ngZone=v,this.title="angular-SIMAt",o.isEnabled&&window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(u){for(let A of u)A.unregister()}).finally(()=>{navigator.serviceWorker.register("ngsw-worker.js"),this.ngZone.runOutsideAngular(()=>(0,U.F)(6e4).subscribe(u=>{o.checkForUpdate().then(A=>{A&&this.swUpdate.activateUpdate().then(()=>document.location.reload())})}))})}ngOnInit(){}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(c.yO),n.Y36(n.R0b))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-root"]],decls:1,vars:0,template:function(o,v){1&o&&n._UZ(0,"router-outlet")},directives:[h.lC],styles:[""]}),r})();var I=t(6785),O=t(8934),D=t(6725),y=t(7520),C=t(1145),E=t(2683),j=t(8007),F=t(398);let R=(()=>{class r{constructor(o,v,u){this._authService=o,this._router=v,this._loginService=u,this.reloginInProgress=!1}injectToken(o,v){const u=v||this._authService.getAuthToken();return o.clone({setHeaders:{Authorization:`Bearer ${u}`}})}handleUnauthorized(o,v){if(this.reloginInProgress)return this._authService.token$.pipe((0,y.h)(u=>null!==u),(0,C.q)(1),(0,D.w)(u=>v.handle(this.injectToken(o,u)).pipe((0,E.K)(A=>(0,I._)(()=>A)))));{this.reloginInProgress=!0,this._authService.updateToken(null);const u=this._authService.getSavedCredentials();return u?(0,O.D)(this._loginService.login(u)).pipe((0,D.w)(()=>v.handle(this.injectToken(o)))):(this._authService.reset(),this._router.navigateByUrl("/login"),(0,I._)(()=>"Token expired"))}}intercept(o,v){return this._authService.isLoggedIn?v.handle(this.injectToken(o)).pipe((0,E.K)(u=>u instanceof l.UA&&401===u.status?this.handleUnauthorized(o,v):(0,I._)(()=>u))):v.handle(o)}}return r.\u0275fac=function(o){return new(o||r)(n.LFG(j.e),n.LFG(h.F0),n.LFG(F.r))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})(),W=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=n.oAB({type:r,bootstrap:[P]}),r.\u0275inj=n.cJS({providers:[S.uU,{provide:l.TP,useClass:R,multi:!0}],imports:[[s.b2,M,i.IJ,e.PW,c.Wr.register("ngsw-worker.js",{enabled:p.N.production,registrationStrategy:"registerWhenStable:30000"}),l.JF,a.ZX]]}),r})();p.N.production&&(0,n.G48)(),s.q6().bootstrapModule(W).then(()=>{"serviceWorker"in navigator&&p.N.production&&navigator.serviceWorker.register("ngsw-worker.js")}).catch(r=>console.error(r))}},m=>{m.O(0,[736],()=>m(m.s=5830)),m.O()}]);