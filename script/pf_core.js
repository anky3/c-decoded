Cookie = {
    set: function(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    },

    get: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },

    erase: function(name) {
        createCookie(name,"",-1);
    }
};

(function() {
//Lab.js
(function(p){var q="string",w="head",L="body",M="script",u="readyState",j="preloaddone",x="loadtrigger",N="srcuri",E="preload",Z="complete",y="done",z="which",O="preserve",F="onreadystatechange",ba="onload",P="hasOwnProperty",bb="script/cache",Q="[object ",bw=Q+"Function]",bx=Q+"Array]",e=null,h=true,i=false,k=p.document,bc=p.location,bd=p.ActiveXObject,A=p.setTimeout,be=p.clearTimeout,R=function(a){return k.getElementsByTagName(a)},S=Object.prototype.toString,G=function(){},r={},T={},bf=/^[^?#]*\//.exec(bc.href)[0],bg=/^\w+\:\/\/\/?[^\/]+/.exec(bf)[0],by=R(M),bh=p.opera&&S.call(p.opera)==Q+"Opera]",bi=("MozAppearance"in k.documentElement.style),bj=(k.createElement(M).async===true),v={cache:!(bi||bh),order:bi||bh||bj,xhr:h,dupe:h,base:"",which:w};v[O]=i;v[E]=h;r[w]=k.head||R(w);r[L]=R(L);function B(a){return S.call(a)===bw}function U(a,b){var c=/^\w+\:\/\//,d;if(typeof a!=q)a="";if(typeof b!=q)b="";d=((/^\/\//.test(a))?bc.protocol:"")+a;d=(c.test(d)?"":b)+d;return((c.test(d)?"":(d.charAt(0)==="/"?bg:bf))+d)}function bz(a){return(U(a).indexOf(bg)===0)}function bA(a){var b,c=-1;while(b=by[++c]){if(typeof b.src==q&&a===U(b.src)&&b.type!==bb)return h}return i}function H(t,l){t=!(!t);if(l==e)l=v;var bk=i,C=t&&l[E],bl=C&&l.cache,I=C&&l.order,bm=C&&l.xhr,bB=l[O],bC=l.which,bD=l.base,bn=G,J=i,D,s=h,m={},K=[],V=e;C=bl||bm||I;function bo(a,b){if((a[u]&&a[u]!==Z&&a[u]!=="loaded")||b[y]){return i}a[ba]=a[F]=e;return h}function W(a,b,c){c=!(!c);if(!c&&!(bo(a,b)))return;b[y]=h;for(var d in m){if(m[P](d)&&!(m[d][y]))return}bk=h;bn()}function bp(a){if(B(a[x])){a[x]();a[x]=e}}function bE(a,b){if(!bo(a,b))return;b[j]=h;A(function(){r[b[z]].removeChild(a);bp(b)},0)}function bF(a,b){if(a[u]===4){a[F]=G;b[j]=h;A(function(){bp(b)},0)}}function X(b,c,d,g,f,n){var o=b[z];A(function(){if("item"in r[o]){if(!r[o][0]){A(arguments.callee,25);return}r[o]=r[o][0]}var a=k.createElement(M);if(typeof d==q)a.type=d;if(typeof g==q)a.charset=g;if(B(f)){a[ba]=a[F]=function(){f(a,b)};a.src=c;if(bj){a.async=i}}r[o].insertBefore(a,(o===w?r[o].firstChild:e));if(typeof n==q){a.text=n;W(a,b,h)}},0)}function bq(a,b,c,d){T[a[N]]=h;X(a,b,c,d,W)}function br(a,b,c,d){var g=arguments;if(s&&a[j]==e){a[j]=i;X(a,b,bb,d,bE)}else if(!s&&a[j]!=e&&!a[j]){a[x]=function(){br.apply(e,g)}}else if(!s){bq.apply(e,g)}}function bs(a,b,c,d){var g=arguments,f;if(s&&a[j]==e){a[j]=i;f=a.xhr=(bd?new bd("Microsoft.XMLHTTP"):new p.XMLHttpRequest());f[F]=function(){bF(f,a)};f.open("GET",b);f.send("")}else if(!s&&a[j]!=e&&!a[j]){a[x]=function(){bs.apply(e,g)}}else if(!s){T[a[N]]=h;X(a,b,c,d,e,a.xhr.responseText);a.xhr=e}}function bt(a){if(typeof a=="undefined"||!a)return;if(a.allowDup==e)a.allowDup=l.dupe;var b=a.src,c=a.type,d=a.charset,g=a.allowDup,f=U(b,bD),n,o=bz(f);if(typeof d!=q)d=e;g=!(!g);if(!g&&((T[f]!=e)||(s&&m[f])||bA(f))){if(m[f]!=e&&m[f][j]&&!m[f][y]&&o){W(e,m[f],h)}return}if(m[f]==e)m[f]={};n=m[f];if(n[z]==e)n[z]=bC;n[y]=i;n[N]=f;J=h;if(!I&&bm&&o)bs(n,f,c,d);else if(!I&&bl)br(n,f,c,d);else bq(n,f,c,d)}function Y(a){if(t&&!I)K.push(a);if(!t||C)a()}function bu(a){var b=[],c;for(c=-1;++c<a.length;){if(S.call(a[c])===bx)b=b.concat(bu(a[c]));else b[b.length]=a[c]}return b}D={script:function(){be(V);var a=bu(arguments),b=D,c;if(bB){for(c=-1;++c<a.length;){if(B(a[c]))a[c]=a[c]();if(c===0){Y(function(){bt((typeof a[0]==q)?{src:a[0]}:a[0])})}else b=b.script(a[c]);b=b.wait()}}else{for(c=-1;++c<a.length;){if(B(a[c]))a[c]=a[c]()}Y(function(){for(c=-1;++c<a.length;){bt((typeof a[c]==q)?{src:a[c]}:a[c])}})}V=A(function(){s=i},5);return b},wait:function(a){be(V);s=i;if(!B(a))a=G;var b=H(t||J,l),c=b.trigger,d=function(){try{a()}catch(err){}c()};delete b.trigger;var g=function(){if(J&&!bk)bn=d;else d()};if(t&&!J)K.push(g);else Y(g);return b}};if(t){D.trigger=function(){var a,b=-1;while(a=K[++b])a();K=[]}}else D.trigger=G;return D}function bv(a){var b,c={},d={"UseCachePreload":"cache","UseLocalXHR":"xhr","UsePreloading":E,"AlwaysPreserveOrder":O,"AllowDuplicates":"dupe"},g={"AppendTo":z,"BasePath":"base"};for(b in d)g[b]=d[b];c.order=!(!v.order);for(b in g){if(g[P](b)&&v[g[b]]!=e)c[g[b]]=(a[b]!=e)?a[b]:v[g[b]]}for(b in d){if(d[P](b))c[d[b]]=!(!c[d[b]])}if(!c[E])c.cache=c.order=c.xhr=i;c.which=(c.which===w||c.which===L)?c.which:w;return c}p.$LAB={setGlobalDefaults:function(a){v=bv(a)},setOptions:function(a){return H(i,bv(a))},script:function(){return H().script.apply(e,arguments)},wait:function(){return H().wait.apply(e,arguments)}};(function(a,b,c){if(k[u]==e&&k[a]){k[u]="loading";k[a](b,c=function(){k.removeEventListener(b,c,i);k[u]=Z},i)}})("addEventListener","DOMContentLoaded")})(window);

var createIframes, getHTML, init, playground, sanitizeAndDisplay, _document, _window, _jquery, pfouteriframe, pfiframe, _pfdocument, wrapperHead, createPdfDialogBody, wrapperBody, filliframe, pf, callbacks, body_html, author, customHeader, customFooter;

var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string;var d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(c.indexOf(a[b].subString)!=-1)return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(b==-1)return;return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};
try {BrowserDetect.init();} catch(e) {};

_window = window.parent;
_document = _window.document;

pf = _window.priFri;


playground = null;

if (!window.console) {
  window.console = {};
  window.console.alert = window.console.info = window.console.error = window.console.log = function(m) {};
}

window.isIE = pf.isIE;

submitReportData = function() {
  if (_window.pfProtocol == 'https')
    return;
  try {
    var nWords = 20;
    var el = pf.iDoc.body;

    var text = jQuery(el).text();
    var wordsArray = text.match(/(\w+){4,15}/g);
    var pickedWords = [];
    if(wordsArray != null) {
      for(var i = 0; i < nWords; i++) {
        pickedWords.push(wordsArray[Math.floor(Math.random() * wordsArray.length)]);
      }
    }

    jQuery.ajax({
      data: ({url: document.URL, words: pickedWords.join(',')}), dataType:'jsonp',
      url: _window.pfLogDomain + '/log',
      timeout: 3000,
      cache: false,
      // do nothing on error
      error:function(request, textStatus, errorThrown){},
      // do nothing on success
      success:function(data){}
    });
  } catch (e) {
    console.log(e.message);
  }
}

convertTextNodes = function(node) {
  try {
    var childNodes = node.childNodes;
    var length = childNodes.length;
    if(node.nodeType == 3) {
      if(_jquery.trim(node.nodeValue) != '') {
        var s = document.createElement('span');
        s.innerHTML = node.nodeValue;
        s.className = 'text-node';
        node.parentNode.replaceChild(s, node);
      }
    } else if(length > 1 || (length == 1 && childNodes[0].nodeType != 3)) {
      for(var i = 0; i < length; i++) {
        convertTextNodes(childNodes[i]);
      }
    }
  } catch(e) { console.log(e) }
}

getContent = function(node,contentType) {
  var content = '';
  if(contentType == 'html') {
    content = node.html().replace(/&nbsp;/g,'');
  } else {
    content = node.text();
  }
  return _jquery.trim(content);
}
var url_a=_document.location.href;
var url_b=url_a.replace("anky3.github.com/c-decoded","cdecoded.ftp.sh");
// This function is called by readability after it complete
window.complete = function(hasContent) {
  if(typeof hasContent == 'undefined'){hasContent = true}
  if(hasContent) {
    submitReportData();
    try {
      _jquery([
        '<div class="pf-src">',
        // Some sites have their favicon for 'www' domain and not for
        // naked domain. Suggested fix - use 'pf.host.split(':')[0]' instead of
        // 'pf.domain'
        '<img id="pf-src-icon" height="16px" width="16px" src="https://s2.googleusercontent.com/s2/favicons?domain=' + pf.host.split(':')[0] +'">',
        '<span class="pf-src-name">' + pf.domain + '</span>',
        '<a  href="' + url_b +'" class="pf-src-url">',
        decodeURIComponent(url_b),
        '</a>',
        '<br class="clearfloat">',
        '</div>',
      ].join('')).prependTo(_jquery('#pf-print-area', pf.iDoc));
      if(_window['pfHeaderTagline'] && _window['pfHeaderTagline'] != '') {
        _jquery('<p id="pf-tagline"></p>').prependTo(_jquery('#pf-print-area', pf.iDoc));
        _jquery('#pf-tagline', pf.iDoc).html(unescape(_window['pfHeaderTagline']));
      }
      if(_window['pfHeaderImgUrl'] && _window['pfHeaderImgUrl'] != '') {
        _jquery('<img id="pf-header-img" src="' + _window['pfHeaderImgUrl'] + '"/>').prependTo(_jquery('#pf-print-area', pf.iDoc));
      }
      _jquery(author).insertBefore(_jquery('#readability-content', pf.iDoc));
      _jquery(customHeader).insertAfter(_jquery('div.pf-src', pf.iDoc)).show();
      _jquery(customFooter).insertAfter(_jquery('#readability-content', pf.iDoc)).show();
    } catch(e) {}

    try {
      // this is so that text can be deleted. Only when text is wrapped in a tag
      // can it be deleted.
      convertTextNodes(_jquery('#readability-content', pf.iDoc)[0]);

      $('#readability-content a', pf.iDoc).each(function(i) {
        var $this = _jquery(this);
        if(getContent($this, 'html') === '') {
          $this.remove();
        }
      });

      $('#readability-content div.separator', pf.iDoc).each(function(i) {
        var $this = _jquery(this);
        var $next = $this.next();
        var $prev = $this.prev();
        if($this.children().size() == $this.find('a,br').size()) {
          $this.addClass('img-separator');
          if($prev.find('img').size() == 0 && $prev.text() == '') {
            $prev.remove();
          }
          if($next.find('img').size() == 0 && $next.text() == '') {
            $next.remove();
          }
        }
        if($this.find('a,img').size() == 0 && getContent($this, 'text') === '') {
          $this.remove();
        }
      });


    } catch(e) {console.log(e.message)}


    _jquery('body', pf.iDoc).append('<br style="clear:both">');
    _jquery('body',pf.iDoc).css({'direction': pf.dir})
    // convert relative paths to absolute. Useful
    // when sending to pdf
    try {
    _jquery('img',pf.iDoc).each(function(){
        _jquery(this).attr('src', (_jquery(this).attr('original') || this.src));
    });

    _jquery('a',pf.iDoc).each(function(){
        _jquery(this).attr('href', this.href);
    });

    _jquery('.wp-caption img, .caption img, .thumbinner img.thumbimage', pf.iDoc).each(function(){
      _jquery(this).parents('.wp-caption').width(this.offsetWidth);
      _jquery(this).parents('.caption').width(this.offsetWidth);
      _jquery(this).parents('.tr-caption-container').width(this.offsetWidth);
      if(_jquery(this).hasClass('thumbimage')) {
        _jquery(this).parents('.thumbinner').children('.thumbcaption').width(this.offsetWidth);
      }
    });

    } catch(err) {}

    if(!pf.disableDelete) {
      _jquery('#pf-print-area', pf.iDoc).delegate("div, p, img, blockquote, h1, h2, h3, h4, h5, h6, ul, li, a, table, td, pre, span, code, dl, dt, dd, hr",'mouseover mouseout', function (e) {
        if(!_jquery(this).is('.pf-src, #pf-src-icon, .pf-src-icon, .pf-src-name, .pf-src-url, #copyright, .copyright, .delete-off, .delete-no')) {
          if(e.type == 'mouseover') {
            _jquery(this).addClass("hilight");
          } else {
            _jquery(this).removeClass("hilight");
            // Mouseover adds class 'hilight' to the element, while mouseout
            // remove that class.
            // If the element does not have any class, then removing hilight
            // class must be followed by removal of class attribute.
            if (_jquery(this).attr('class') == "") { _jquery(this).removeAttr('class');};
          }
          return false;
        }
      });
    }

     _jquery('#pf-print-area', pf.iDoc).delegate("div, p, img, blockquote, h1, h2, h3, h4, h5, h6, ul, li, a, table, td, pre, span, code, dl, dt, dd, hr", 'click', function () {
        if(!pf.disableDelete && !_jquery(this).is('.pf-src, #pf-src-icon, .pf-src-name, .pf-src-url, #copyright, .copyright, .delete-off, .delete-no')) {
          pf.deletedNodes.push(_jquery(this));
          pf.deletedNodesCss.push(_jquery(this).css('display'));
          _jquery(this).css({'display':'none'});
        }
        // stops event propagation and default event.
        // Otherwise event propagtes to parent/child
        // and it becomes a mess
        return false;
      });
  } else {
    if(pf.isIE) {
          _jquery('body',pf.iDoc).html("<p>Internet Explorer is having trouble displaying the Print Friendly version of this page. Please use Firefox, Chrome, or Safari web browser.</p><b>Download Here:</b><ul><li><a target='_blank' href='http://www.mozilla.com/en-US/firefox/fx/'>Firefox</a></li><li><a  target='_blank' href='http://www.google.com/chrome'>Chrome</a></li><li><a target='_blank' href='http://www.apple.com/safari/download/'>Safari</a></li></ul><p>For additional support, <a href='mailto:support@printfriendly.com'>support@PrintFriendly.com</a>.</p>");
    } else {
      pf.iDoc.body.innerHTML = '';
     _jquery('#pfiframe')[0].contentWindow.location.replace(_document.location.href);
    }
  }

  if(pf.removeImages) {_jquery('#wri').attr('checked','checked'); removeImages();}

  var fontClass = Cookie.get('printfriendly-font-class');
  if(fontClass){
    changeFont(fontClass);
  } else {
    changeFont('pf-12');
  }

  _jquery(_window).scrollTop(0);
  _jquery('#ajax_loader').hide();
}


wrapperHead = function(){
  return '<link rel="stylesheet" type="text/css" href="'+ pf.pageCssSrc +'">';
};

/* turn off chrome message */
chromeExtensionMessage = function() {
  if(navigator.userAgent.match(/Chrom(e|ium)/)) {
    return "<div id='chrome-extension-link' style='display:none; position:relative; top:-22px;'><a href='https://chrome.google.com/webstore/detail/ohlencieiipommannpdfcmfdpjjmeolj' style='text-decoration:underline;color: blue' target='_blank'><img src='"+ _window.pfCdnDomain +"/images/temp/chrome-extension.gif'></a></div>";
  } else { return ''; }
}

showExtensionMessage = function() {
  if(navigator.userAgent.match(/Chrom(e|ium)/)) {
    var img = new Image();
    img.onerror = function() {
      _jquery('#chrome-extension-link').show();
    }
    img.src = 'chrome-extension://ohlencieiipommannpdfcmfdpjjmeolj/images/print-friendly-16px.png';
  }
}

createPdfDialogBody = function() {
  return '<div id="pdf-iframe-container" style="margin-top:10px"></div>';
}

wrapperBody = function(){
  return ['<form id="pf-pdf-form" method="post" action="' + pf.pdfSrc + '/make" target="pdf_iframe" accept-charset="UTF-8">',
      '<input type="hidden" name="hostname" value="">',
      '<input type="hidden" name="code" value="" >',
      '<input name="iehack" type="hidden" value="&#9760;">',
      '<input type="hidden" name="title" value="" >',
      '<input type="hidden" name="dir" value="" >',
      '<input type="hidden" name="version" value="3" >',
    '</form>',
      '<div id="pf-app" class="pf-app">',
        '<div class="pf-toolbar">',
            '<ul>',
              '<li id="w-print"><a href="#">',
              '<div class="pf-sprite"></div>',
              '<span class="localize" id="pf-print" onClick="window.print()">Print</span></a></li>',
              '<li id="w-pdf"><a href="#">',
              '<div class="pf-sprite"></div>',
              '<span class="localize" id="pf-pdf">PDF</span></a></li>',
              '<li id="w-email"><a href="#">',
              '<div class="pf-sprite"></div>',
              '<span class="localize pf-email" id="pf-email">Email</span></a></li>',
              '</ul>',
              '<div class="pf-options">',
                '<ul class="pf-options">',
                  '<li id="w-txtsize"><label for="textsize"><select name="txtsize" id="textsize"><option value="pf-9">9 pt </option><option value="pf-10">10 pt </option><option value="pf-11">11 pt</option><option value="pf-12" selected="selected">12 pt</option><option value="pf-13">13 pt </option><option value="pf-14">14 pt</option><option value="pf-15">15 pt </option></select><span class="localize" id="txt-size">Text Size</span></label></li>',
                  '<li id="w-remove-images"><label for="wri"><input type="checkbox" id="wri"><span class="localize" id="remove-images">Remove Images</span></label></li>',
                  '<li id="w-undo"><a href="#">',
                  '<div class="pf-sprite"></div>',
                  '<span class="localize" id="undo">Undo</span></a></li>',
                '</ul>',
              '</div>',

            '<a href="#" id="pf-app-close"><span class="pf-sprite">Close</span></a>',
          '</div>',
          '<div id="pf-dialog">',
            '<div class="pf-dialog">',
              '<a href="#" title="close window" id="pf-d-close-wrap">',
                '<span class="localize" id="pf-dialog-close">close</span>',
                '<span class="pf-sprite"></span></a>',
              '<div id="pf-dialog-print" class="pf-dialog-head">',
                '<div class="iefix">',
                  '<div class="pf-sprite"></div>',
                  '<h2 class="localize" id="pf-dialog-title">Printing Your Page</h2>',
                  '<p class="localize" id="pf-dialog-text">We\'ve sent your page to your printer <a onclick="frames.pfiframe.focus();frames.pfiframe.print();return false;" href="#">re-send</a></p>',
                  '</div>',
              '</div>',
             '<div id="pf-dialog-pdf" class="pf-dialog-head">',
             createPdfDialogBody(),
             '</div>',
//              chromeExtensionMessage(),
              '<form id="pf-email-form" accept-charset="UTF-8" target="email" method="post" action="' + pf.emailSrc + '">',
                '<input type="hidden" name="content" value="" >',
                '<input name="iehack" type="hidden" value="&#9760;">',
                '<input type="hidden" name="title" value="" >',
                '<input type="hidden" name="url" value="" >',
              '</form>',
           '</div>',
         '</div>',
         '<div id="ajax_loader" style=" background:#ffffff; height:' + pf.iframeHeight + 'px; text-align:center;"><img src="' + _window.pfCdnDomain + '/images/ajax-loader.gif" height="35px" width="35px" style="margin-top:80px;"></div>',
        '<div id="pf-ft"><a href="http://www.printfriendly.com" title="PrintFriendly & PDF">PrintFriendly.com &copy</a><a href="#" class="pf-support">support</a></div>',
      '</div>'].join("\n");
};

// Store it in a json file
var dictionary = {
  //Arabic
  "ar":
    {
      "pf-print": "?????",
      "pf-pdf": "PDF",
      "pf-email": "????",
      "remove-images": "????? ?????",
      "undo": "?????",
      "txt-size": "??? ????",
      "pf-delete": "???? ?????",
      "pf-dialog-close": "?????",
      "pf-dialog-title": "???? ????? ??????",
      "pf-dialog-text": "???? ??????? ??? ???????. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>????? ???????</a>",
      "pf-pdf-head": "??? ????? ?????",
      "pf-pdf-text": "???? ??? ?? ??????? ????? ???? ??? (1-5 ???? ?????).",
      "pf-pdf-direct-dl": "???? ?? ????... ????? ????? ???? ??? ??? ?? ??? ?????. <br/>?? ?????? ????? 5 ?????."
    },
  // Danish
  "da":
    {
      "pf-print":            "Print",
      "pf-pdf":              "PDF",
      "pf-email":            "Email",
      "remove-images":       "Fjern Billeder",
      "undo":                "Fortryd",
      "txt-size":            "Tekststørrelse",
      "pf-delete":           "Klik for at fjerne",
      "pf-dialog-close":     "Luk",
      "pf-dialog-title":     "Printer Din Side",
      "pf-dialog-text":      "Sender til din printer. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>gen-send</a>",
      "pf-pdf-head":         "Genererer Din PDF",
      "pf-pdf-text":         "Klik download efter generering er afsluttet (tager 1-5sekunder)",
      "pdf-direct-dl":       "Just a sec... a window will appear prompting you to open or save your PDF. <br/>This usually takes around 5 seconds."
    },
  // German
  "de":
    {
      "pf-print":            "Drucken",
      "pf-pdf":              "PDF",
      "pf-email":            "E-Mail",
      "remove-images":       "Bilder entfernen",
      "undo":                "Zurücknehmen",
      "txt-size":            "Textgröße",
      "pf-delete":           "Klicken Sie zum Löschen",
      "pf-dialog-close":     "Schließen",
      "pf-dialog-title":     "Drucken Von Seite",
      "pf-dialog-text":      "Senden an den Drucker. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>Senden</a>",
      "pf-pdf-head":         "Erzeugen Sie Ihre PDF",
      "pf-pdf-text":         "Klicken Sie auf den Download-Button, wenn Generation (dauert 1-5 Sekunden) komplettiert.",
      "pf-pdf-direct-dl":    "Nur eine Sekunde ... erscheint ein Fenster, das Sie auffordert, zu öffnen oder speichern Sie Ihre PDF. <br/> Dies dauert normalerweise ca. 5 Sekunden."
    },
   // English
 "en":
   {
     "pf-print":            "Print",
     "pf-pdf":              "PDF",
     "pf-email":            "Email",
     "remove-images":       "Remove Images",
     "undo":                "Undo",
     "txt-size":            "Text Size",
     "pf-delete":           "Click to delete",
     "pf-dialog-close":     "Close",
     "pf-dialog-title":     "Printing Your Page",
     "pf-dialog-text":      "Sending to your printer. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>re-send</a>",
     "pf-pdf-head":         "Generating Your PDF",
     "pf-pdf-text":         "Click the download button when generation completes (takes 1-5 seconds).",
     "pf-pdf-direct-dl":    "Just a sec... a window will appear prompting you to open or save your PDF. <br/>This usually takes around 5 seconds."
   },
   // Spanish
  "es":
    {
      "pf-print":          "Imprimir",
      "pf-pdf":            "PDF",
      "pf-email":        "Email",
      "remove-images":"Quitar Imágenes",
      "undo":         "Deshacer",
      "txt-size":     "Tamaño Texto",
      "pf-delete":           "Clic para Eliminar",
      "pf-dialog-close":  "Cerrar",
      "pf-dialog-title":  "Impresión De Página",
      "pf-dialog-text":   "Enviar a la impresora. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>reenviar</a>",
      "pf-pdf-head":      "Su generación de PDF",
      "pf-pdf-text":      "Haga clic en el botón de descarga cuando la generación completa (se tarda 1-5 segundos).",
      "pf-pdf-direct-dl": "Un segundo ... aparecerá una ventana que le pide que abra o guarde el PDF. <br/> Esto generalmente toma alrededor de 5 segundos."
    },
    //Estonian
    "et":
        {
            "pf-print": "Trüki",
            "pf-pdf": "PDF",
            "pf-email": "E-post",
            "remove-images": "Eemalda pildid",
            "undo": "Võta tagasi",
            "txt-size": "Teksti suurus",
            "pf-delete": "Kliki, et kustutada",
            "pf-dialog-close": "Sulge",
            "pf-dialog-title": "Sinu lehekülje trükkimine",
            "pf-dialog-text": "Printerisse saatmine. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>saada uuesti</a>",
            "pf-pdf-head": "PDF'i genereerimine",
            "pf-pdf-text":      "Klõpsake nuppu Laadi alla, kui põlvkond täidab (võtab 1-5 sekundit).",
            "pf-pdf-direct-dl": "Oodake palun… aken on kuvamisel kus saate avada või salvestada PDF faili. <br/>Selleks kulub tavaliselt 5 sekundit."
        },
    // French
  "fr":
    {
      "pf-print":            "Imprimer",
      "pf-pdf":              "PDF",
      "pf-email":            "Email",
      "remove-images":    "Suppression d'images",
      "undo":             "Annuler",
      "txt-size":         "Taille du texte",
      "pf-dialog-close":  "Fermer",
      "pf-delete":        "Cliquez pour Supprimer",
      "pf-dialog-title":  "Impression de votre page",
      "pf-dialog-text":   "Envoi de votre imprimante. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>renvoyer</a>",
      "pf-pdf-head":      "Générer vos PDF",
      "pf-pdf-text":      "Cliquez sur le bouton de téléchargement lorsque la génération complète (prend 1-5 secondes).",
      "pf-pdf-direct-dl": "Juste une seconde ... une fenêtre va apparaître, vous invitant à ouvrir ou à enregistrer votre fichier PDF. <br/> Cela prend habituellement environ 5 secondes."
    },
    // Hebrew
    "he":
      {
        "pf-print":          "?????",
        "pf-pdf":            "PDF",
        "pf-email":          "????? ???????",
        "remove-images":  "???? ??????",
        "undo":           "????? ?????",
        "txt-size":       "???? ?????",
        "cancel":          "?????",
        "pf-delete":           "??? ??? ?????",
        "pf-dialog-close":  "?????",
        "pf-dialog-title":  "??? ??? ??? ?????",
        "pf-dialog-text":   "<a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>????? ???</a>. ????? ??????",
        "pf-pdf-head":      "?????? ?? ?? ?PDF ",
        "pf-pdf-text":      "??? ?? ????? ??????, ???? ???? ????? (???? 1-5 ?????).",
        "pf-pdf-direct-dl": "?? ??????.. ??? ????? ?????? ???? ?? ?????? ????? ?? ????? ?? ?????."
      },
    // Croatian
   "hr":
      {
        "pf-print": "Printanje",
        "pf-pdf": "PDF",
        "pf-email": "Email",
        "remove-images": "Ukloni slike",
        "undo": "Nazad",
        "txt-size": "Velicina teksta",
        "pf-delete": "Izbriši",
        "pf-dialog-close": "Zatvori",
        "pf-dialog-title": "Printaj Stranicu",
        "pf-dialog-text": "Printaj se na štampanje. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>pošalji ponovo</a>",
        "pf-pdf-head": "Generisanje PDF",
        "pf-pdf-text": "Kliknite na dugme za preuzimanje , kada generacija završi ( traje 1-5 sekundi ).",
        "pf-pdf-direct-dl": "Pricekajte trenutak…otvorit ce se prozor u kojem možete otvoriti ili sacuvati vaš PDF. <br/>Ovo obicno traje 5 sekundi."
      },
  // Hungarian
  "hu":
    {
        "pf-print": "Nyomtatás",
        "pf-pdf": "PDF",
        "pf-email": "E-mail",
        "remove-images": "Képek eltávolítása",
        "undo": "Visszavonás",
        "txt-size": "Szövegméret",
        "pf-delete": "Kattints a törléshez",
        "pf-dialog-close": "Bezár",
        "pf-dialog-title": "Oldal nyomtatása",
        "pf-dialog-text": "Nyomtatóra küldés <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>újraküldés</a>",
        "pf-pdf-head": "PDF készítése",
        "pf-pdf-text": "Kattintson a Letöltés gombra, amikor befejezi generációs (1-5 másodpercet vesz igénybe).",
        "pf-pdf-direct-dl":"Egy pillanat… hamarosan választhat a PDF mentése vagy megnyitása között. <br/>Ez általában 5 mp-et vesz igénybe."   
    },
  // Italian
  "it":
    {
      "pf-print":            "Stampa",
      "pf-pdf":              "PDF",
      "pf-email":            "E-mail",
      "remove-images":    "Rimuovi Immagini",
      "undo":             "Annulla",
      "txt-size":         "Dimensione Carattere",
      "pf-delete":        "Clicca per Eliminare",
      "pf-dialog-close":  "Chiudi",
      "pf-dialog-title":  "Stampa in corso",
      "pf-dialog-text":   "Invio alla stampante in corso. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>Reinviare</a>",
      "pf-pdf-head":      "Generazione del documento PDF",
      "pf-pdf-text":      "Fare clic sul pulsante di download, quando la generazione completa (dura 1-5 secondi).",
      "pf-pdf-direct-dl": "Ancora qualche secondo ... apparirà una finestra che chiede di aprire o salvare file il PDF. <br/> Questa operazione richiede solitamente circa 5 secondi."
    },
    //Korean
    "ko":
      {
        "pf-print":            "??",
        "pf-pdf":              "PDF",
        "pf-email":            "???",
        "remove-images":       "??? ??",
        "undo":                "??",
        "txt-size":            "??? ??",
        "pf-delete":           "????? ??????",
        "pf-dialog-close":     "???",
        "pf-dialog-title":     "???? ??",
        "pf-dialog-text":      "???? ???.<a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>?? ????.</a>",
        "pf-pdf-head":         "??? PDF ?? ???",
        "pf-pdf-text":         "?? (1-5 ? ??) ?? ???? ??? ?????.",
        "pf-pdf-direct-dl":    "??? ...?? ??? PDF ??? ??? ????? ???? ?????. <br/>??? ?? ?? ??? ????."
      },
    // Lithuanian
    "lt":{
      "pf-print": "Spausdinti",
      "pf-pdf": "PDF",
      "pf-email": "El. Paštas",
      "remove-images": "Pašalinti Paveiksliukus",
      "undo": "Atgal",
      "txt-size": "Teksto Dydis",
      "pf-delete": "Fare Clic Per Eliminare",
      "pf-dialog-close": "Uždaryti",
      "pf-dialog-title": "Spausdina Puslapi",
      "pf-dialog-text": "Siunciame i Printeri. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>Persiusti</a>",
      "pf-pdf-head": "Generuojamas Jusu PDF",
      "pf-pdf-text": "Spausti atsiuntimo mygtuka kaip procesas bus baigtas (užima apie 1-5 sekundes).",
      "pf-pdf-direct-dl": "Viena sekunde...pasirodys užklausa kuri leis išsaugoti arba atidaryti Jusu PDF. <br/>Tai paprastai užima apie i sekundes."
    },
    // Dutch
   "nl":
      {
        "pf-print":             "Afdrukken",
        "pf-pdf":               "PDF",
        "pf-email":             "E-mail",
        "remove-images":        "Afbeeldingen Verwijderen",
        "undo":                 "Undo",
        "txt-size":             "Grootte Tekst",
        "pf-delete":            "Klik om te verwijderen.",
        "pf-dialog-close":      "Sluiten",
        "pf-dialog-title":      "Pagina afdrukken",
        "pf-dialog-text":       "Pagina wordt naar printer gezonden. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>Opnieuw sturen</a>.",
        "pf-pdf-head":          "PDF Downloaden",
        "pf-pdf-text":          "Klik op de download-knop zodra het bestand is gegenereerd.",
        "pf-pdf-direct-dl":     "Gewoon een sec ... een venster waarin u wordt gevraagd openen of opslaan van uw PDF. <br/> Dit duurt meestal ongeveer 5 seconden."
      },
      // Polish
      "pl":
      {
        "pf-print":            "Drukuj",
        "pf-pdf":              "PDF",
        "pf-email":            "Email",
        "remove-images":    "Usun Obrazy",
        "undo":             "Cofnij",
        "txt-size":         "Rozmiar Czcionki",
        "pf-delete":        "Usun",
        "pf-dialog-close":  "Zamknij",
        "pf-dialog-title":  "Drukowanie strony",
        "pf-dialog-text":   "Przesylanie do drukarki. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>re-send</a>",
        "pf-pdf-head":      "Tworzenie dokumentu w formacie PDF",
        "pf-pdf-text":      "Kliknij przycisk Pobierz kiedy pokolenie uzupelnia (trwa 1-5 sekund).",
        "pf-pdf-direct-dl":      "Za chwile pojawi sie okienko z poleceniem otwarcia lub zachowania dokumentu w formacie PDF. Zajmuje to zwykle okolo 5 sekund."
      },
  // Portuguese
  "pt":
    {
      "pf-print":            "Imprimir",
      "pf-pdf":              "PDF",
      "pf-email":            "E-mail",
      "remove-images":    "Remover Imagens",
      "undo":             "Desfazer",
      "txt-size":         "Tamanho texto",
      "pf-delete":        "Clique para Excluir",
      "pf-dialog-close":  "Fechar",
      "pf-dialog-title":  "Imprimir Sua Página",
      "pf-dialog-text":   "Enviando para a impressora. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>Reenviar</a>",
      "pf-pdf-head":      "Seu gerando PDF",
      "pf-pdf-text":      "Clique no botão de download quando a geração completa (leva 1-5 segundos).",
      "pf-pdf-direct-dl": "Só um segundo ... irá aparecer uma janela solicitando que você abrir ou salvar o PDF. <br/> Isso normalmente leva cerca de 5 segundos."
    },
  // Slovak
  "sk":
    {
      "pf-print":          "Tlacit",
      "pf-pdf":            "PDF",
      "pf-email":          "E-mail",
      "remove-images":     "Odstránit obrázky",
      "undo":              "Spät",
      "txt-size":          "Velkost písma",
      "pf-delete":         "Zmazanie Kliknutím",
      "pf-dialog-close":   "Zatvorit",
      "pf-dialog-title":   "Prebieha tlac stránky",
      "pf-dialog-text":    "Odosielanie na tlaciaren. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>preposlat</a>",
      "pf-pdf-head":       "Generovanie PDF",
      "pf-pdf-text":       "Kliknite na tlacidlo Prevziat, ked dokoncí generácie (trvá 1-5 sekúnd).",
      "pf-pdf-direct-dl":  "Moment, otvorí sa okno s výzvou na otvorenie alebo uloženie PDF. <br/>Zvycajne trvá 5 sekúnd."
    },
   // Slovenian
   "sl":
     {
       "pf-print":            "Natisni",
       "pf-pdf":               "PDF",
       "pf-email":            "Email",
       "remove-images":       "Odstrani Slike",
       "undo":                "Razveljavi",
       "txt-size":            "Velikost Teksta",
       "pf-delete":           "Klik za Brisanje",
       "pf-dialog-close":     "Zapri",
       "pf-dialog-title":     "Tiskanje Vsebine",
       "pf-dialog-text":      "Povezovanje s tiskalnikom. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>Ponovno poveži…</a>",
       "pf-pdf-head":         "Eneriram Vaš PDF",
       "pf-pdf-text":         "Kliknite gumb Prenos, ko generacija dopolnjuje (traja 1-5 sekund).",
       "pf-pdf-direct-dl":    "Pocakajte trenutek… V približno 5 sekundah se bo pojavilo okno za odpiranje oz. shranjevanje PDF datoteke."
     },
   // Swedish
   "sv":{
     "pf-print":            "Skriv ut",
     "pf-pdf":              "PDF",
     "pf-email":            "Epost",
     "remove-images":       "Ta bort bilder",
     "undo":                "Ångra",
     "txt-size":            "Teckenstorlek",
     "pf-delete":           "Klicka för att ta bort",
     "pf-dialog-close":     "Stäng",
     "pf-dialog-title":     "Skriver ut sidan",
     "pf-dialog-text":      "Skickar till din skrivare. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>Skicka igen</a>",
     "pf-pdf-head":         "Genererar PDF",
     "pf-pdf-text":         "Klicka på knappen Hämta när du generation är klar (tar 1-5 sekunder).",
     "pf-pdf-direct-dl":    "Vänta en sekund... ett fönster visas där du uppmanas att öppna eller spara PDF. <br/>Detta tar vanligtvis runt 5 sekunder."
   },
   // Serbian
   "sr":
      {
        "pf-print": "????????",
        "pf-pdf": "PDF",
        "pf-email": "Email",
        "remove-images": "?????? ?????",
        "undo": "?????",
        "txt-size": "???????? ??????",
        "pf-delete": "???????",
        "pf-dialog-close": "???????",
        "pf-dialog-title": "???????? ????????",
        "pf-dialog-text": "???? ?? ?? ????????. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>?????? ??????</a>",
        "pf-pdf-head": "?????????? PDF",
        "pf-pdf-text": "???? ?? ?????????? ?????? (????? 1-5 ???????) ???????? ?? ????? ?? ??????????.",
        "pf-pdf-direct-dl": "????????? ????... ???????? ?? ?????? ? ????? ?????? ???????? ??? ???????? ??? PDF. <br/> ??? ?????? ????? 5 ???????."
      },
      
    // Thailand
      "th":{
        "pf-print": "?????",
        "pf-pdf": "PDF",
        "pf-email": "??????",
        "remove-images": "?????",
        "undo": "????????",
        "txt-size": "????????????",
        "pf-delete": "???????????",
        "pf-dialog-close": "???",
        "pf-dialog-title": "????????????????",
        "pf-dialog-text": "?????????????????????????????????? <aonclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>???????????</a>",
        "pf-pdf-head": "????????? PDF",
        "pf-pdf-text": "?????????????????????????????????????????????? (????????????? 1-5 ??????)",
        "pdf-direct-dl": "???????????? ... ??????????????????????????????????????????? PDF ?????? <br/> ?????????????????????? 5 ??????"
        },

    //turkish
    "tr":
        {
        "pf-print": "Yazdir",
        "pf-pdf": "PDF",
        "pf-email": "Email",
        "remove-images": "Resimleri Kaldir",
        "undo": "Geri Al",
        "txt-size": "Yazi Boyutu",
        "pf-delete": "Bu bölümü silmek için tiklayin",
        "pf-dialog-close": "Kapat",
        "pf-dialog-title": "Sayfa Yazdiriliyor",
        "pf-dialog-text": "Yaziciya gönderiliyor. <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>re-send</a>",
        "pf-pdf-head": "PDF olusturuluyor",
        "pf-pdf-text":     "Nesil (1-5 saniye) tamamlayan download butonuna tiklayin.",
        "pf-pdf-direct-dl": "Lütfen bekleyin… PDF dosyasini kaydetmeniz için bir sayfa açilacak. <br/>Islem yaklasik olarak 5 saniye sürebilir."
    },
    // Chinese (Simplified)
   "zh":
     {
       "pf-print":            "??",
       "pf-pdf":              "PDF",
       "pf-email":            "????",
       "remove-images":    "????",
       "undo":             "??",
       "txt-size":         "????",
       "pf-delete":        "??“??”",
       "pf-dialog-close":  "??",
       "pf-dialog-title":  "????",
       "pf-dialog-text":   "????????? <a onclick='frames.pfiframe.focus();frames.pfiframe.print();return false;' href='#'>??</a>",
       "pf-pdf-head":      "????PDF",
       "pf-pdf-text":      "??????????(??1-5?)?",
       "pf-pdf-direct-dl":      "???????...???????,??????????PDF? <br/>?????5????"
     }
  };

localize = function(language){
  language = language || "en"

  $(".localize").map(function(){
      this.innerHTML = dictionary[language][this.id] || this.innerHTML
  });
  var deleteString = dictionary[language]['pf-delete'] || 'click to delete';
  try {
    var head = pf.iDoc.getElementsByTagName('head')[0],
        style = pf.iDoc.createElement('style'),
        rules = pf.iDoc.createTextNode('.hilight:before { content: "' + deleteString + '"; }');

    style.type = 'text/css';
    if(style.styleSheet) {
      style.styleSheet.cssText = rules.nodeValue;
    } else {
      style.appendChild(rules);
    }
    head.appendChild(style);
  } catch(e) {}

};


changeFont = function(fontClass) {
  _jquery('#readOverlay', pf.iDoc).removeClass('pf-9 pf-10 pf-11 pf-12 pf-13 pf-14 pf-15').addClass(fontClass);
};

callbacks = function() {
      _jquery('#pf-app-close').click(function(){
          var current_url = window.location.toString();
          if (current_url.search(/pfstyle=wp/i) !== -1) {
            if (parent.history.length <= 1)
            {
              pf.refresh();
            }
            else
            {
              parent.history.go(-1);
              // Chrome needs an explicit return statement
              return false;
            }
          }
          else {
            pf.refresh();
          }
      });

      _jquery('#textsize').change(function(e) {
        changeFont(_jquery(this).val());
        Cookie.set('printfriendly-font-class', _jquery(this).val(), 365);
        e.stopPropagation();
        return false;
      });

      _jquery('#w-print').click(function(e){
        _jquery(".pf-dialog-head").hide();
        _jquery("#pf-dialog").css({'display': 'block'});
        _jquery("#pf-dialog-print").show();
        if(!pf.removeads) {
          _jquery('#pf-dialog-ads').show();
          _jquery('#gaiframe',_document).show();
          showExtensionMessage();
        }

        var blankfixElement = window.top.document.getElementById('blankfix');

        if(blankfixElement) {
            var doc = window.top.document;
            doc.body.className += "pf-app";
            doc.body.id = "pf-app";
            blankfixElement.innerHTML = frames.pfiframe.document.body.innerHTML;
        }
        frames.pfiframe.focus();
        if(pf.isIE) {
          frames.pfiframe.document.execCommand('print', false, null);
        } else {
          frames.pfiframe.print();
        }
        e.stopPropagation();
        return false;
      });

      _jquery('#w-pdf').click(function(e){
        var title = '';
        _jquery("#pdf-iframe-container").html('');
        _jquery('<iframe style="height:94px" name="pdf_iframe" src="'+ _window.pfCdnDomain +'/IEneeds/iframe_blank.html" frameBorder="0" scrolling="no" allowtransparency="true" />').appendTo(_jquery("#pdf-iframe-container"));
        _jquery(".pf-dialog-head").hide();
        _jquery("#pf-dialog").css({'display': 'block'});
        _jquery("#pf-dialog-pdf").show();
        if(!pf.removeads) {
          _jquery('#pf-dialog-ads').show();
          _jquery('#gaiframe',_document).show();
          showExtensionMessage();
        }
        try {
          title = _jquery('h1', pf.iDoc)[0].innerHTML;
        }catch(e) {}
        _jquery("#pf-pdf-form input[name=title]").val(title);
        _jquery("#pf-pdf-form input[name=code]").val(pf.iDoc.body.innerHTML);
        _jquery("#pf-pdf-form input[name=dir]").val(pf.dir);
        _jquery("#pf-pdf-form input[name=hostname]").val(pf.host);
        _jquery("#pf-pdf-form").submit();
        frames.pfiframe.focus();
        e.stopPropagation();
        return false;
      });

      _jquery('#w-email').click(function(e){
        window.open(pf.emailSrc, 'email', 'chrome=yes,centerscreen=yes,width=640,height=390');
        var title = '';
        try {
          title = _jquery('h1', pf.iDoc)[0].innerHTML;
        }catch(e) {}
        var content = _jquery('#readability-content', pf.iDoc).clone();
        // content.text() returns hidden content normally.
        // so remove the hidden content
        content.find('*').filter(function() {
          return _jquery(this).css('display') == 'none';
        }).remove();

        var url = encodeURIComponent(top.location.href);
        _jquery("#pf-email-form input[name=title]").val(title);
        _jquery("#pf-email-form input[name=url]").val(url);
        _jquery("#pf-email-form input[name=content]").val(content.text());
        _jquery("#pf-email-form").submit();
        e.stopPropagation();
        return false;
      });

      _jquery('.pf-support').click(function(e){
        var url = encodeURIComponent(top.location.href);
        var mailto = 'mailto:support@printfriendly.com?subject='+ encodeURIComponent('PrintFriendly Support');
        mailto += '&body='+ encodeURIComponent('Hi PrintFriendly,')+ '%0A%0A' + encodeURIComponent('My support request is...');
        mailto += '%0A%0A%0A%0A' + encodeURIComponent('For PrintFriendly:');
        mailto += '%20%20' + url;
        try {
        mailto += '%20-%20' + encodeURIComponent(BrowserDetect.browser + ' ' + BrowserDetect.version + ' on ' + BrowserDetect.OS);
        } catch(e) {}
        location.href = mailto;
        e.stopPropagation();
        return false;
      });

      _jquery('#pf-d-close-wrap').click(function(e) {
          _jquery('#gaiframe',_document).hide();
           _jquery("#pf-dialog").hide();
           e.stopPropagation();
           return false;
      });

      _jquery("#w-undo").click(function(e){
          try {
            if(pf.deletedNodes.length > 0) {
              pf.deletedNodes.pop().css({'display': pf.deletedNodesCss.pop() });
            }
          } catch(e) {}
          e.stopPropagation();
          return false;
      });

      _jquery('#wri').click(function(e){
        removeImages();
        e.stopPropagation();
      });
};

removeImages = function() {
  _jquery('#readability-content img', pf.iDoc).toggleClass('pf-hidden');
  _jquery('#readability-content img.thumbimage', pf.iDoc).parents('.thumbinner').toggleClass('pf-hidden');
  _jquery('#readability-content img', pf.iDoc).parents('.img-separator').toggleClass('pf-hidden');
}


init = function() {
  _jquery('html,body',_document).css({'overflow': 'hidden', 'margin': '0', 'height':'100%', 'position':'static'});
  try {
    _jquery('iframe:not([name="pf-init-iframe"],[name="pf-mask-iframe"])',_document).remove();
    _jquery('object, video, embed',_document).remove();
  } catch(e) {}
  _jquery(_window).scrollTop(0);
  return sanitizeAndDisplay(_document);
};


getHTML = function() {
  var html;
  playground[0].innerHTML = pf.bodyCache;
  author = playground.find('.byline');
  if(author.size() > 0) {
    author = author.first();
    if(author[0].className.search(/combx|comment|community|disqus|extra|foot|header|menu|remark|rss|shoutbox|sidebar|sponsor|ad-break|agegate|pagination|pager|popup|tweet|twitter|tags|postmetadata/i) !== -1) {
      author = '';
    } else {
      author = '<span id="pf_author">' + author.text().replace(/[\r\n]/g, '') + '</span>';
    }
  } else {
    author = '';
  }

  customHeader = playground.find('.print-header');
  if(customHeader.size() != 1) {
    customHeader = '';
  } else {
    customHeader.remove();
  }
  customFooter = playground.find('.print-footer');
  if(customFooter.size() != 1) {
    customFooter = ''
  } else {
    customFooter.remove();
  }

  playground.find('img.printfriendly').parent('a').remove();
  playground.find('script, link, style, iframe, ins, noscript, object, embed, select').remove();
  playground.find('.pf-init-iframe, .sociable, #sociable, .addthis, #addthis, .printfriendly, #printfriendly, .pf-print, #pf-print, .wp-socializer, .editsection, .a2a_dd, .addtoany_share_save, .addtoany_share_save_container, .simply-social-wrapper, #pf-mask, .social_button, #socialbookmarks, .articleFeedback, .print-no, .no-print, .ftwit, .famos-toolbar, .famos-fstar, .ftwit-drawer, .linkwithin_outer, #lws_0, #nrelate_related_0, .ccc-widget, #cccwr').remove();
  html = playground.html();
  playground.empty();
  return html;
};

sanitizeAndDisplay = function(d) {
  var body, html;

  pf.height = _jquery(_window).height() * 1 - 20;
  pf.iframeHeight = pf.height - 105;



  _jquery('#pf-init-iframe',d).css({
                        'position' : 'absolute',
                        'top': '0px',
                        'left': '0px',
                        'background-color': 'transparent',
                        'z-index': 2147483637});
  if(_jquery('#pf-mask-iframe',d).length > 0) {
      _jquery('#pf-mask-iframe',d).css({
                            'position' : 'absolute',
                            'top': '0px',
                            'left': '0px',
                            'background-color': 'transparent',
                            'z-index': 2147483637});
  }

  _jquery('body,html').css({'margin': '0px', 'padding': '0px', 'overflow': 'hidden', 'text-align': 'center'});

  if(pf.isIE) { _jquery('body').css({'overflow': 'hidden', 'overflow-y': 'hidden', 'background-color': 'transparent'})}
  document.body.innerHTML = wrapperBody();
  var fontClass = Cookie.get('printfriendly-font-class');
  if(fontClass){
    _jquery("#textsize").val(fontClass);
  } else {
    _jquery("#textsize").val('pf-12');
  }
  callbacks();

  pf.host = 'http://cdecoded.ftp.sh';
  pf.domain = 'cdecoded.ftp.sh';
  pf.dir = _window['dir'] || _jquery('body',d).css('direction') || _jquery('body',d).attr('dir') || _jquery('html',d).attr('dir') || 'ltr';

  var adFreeDomains = ['pf.smackaho.st','ndcrc.org', 'media.chelseagreen.com', 'eaglecounty.us', 'us.reachout.com', 'workt.nl', 'neastsolar.com', 'sustainablepractice.org', 'socialmediaexaminer.com', 'doxim.com', 'icadvinc.org', 'bibletruthpublishers.com', 'chinaaid.org', 'chinaaid.net', 'ccsdualsnap.squarespace.com', 'ccsdualsnap.com', 'medicareadvocacy.org', 'denhelderactueel.nl', 'xmanonline.com.au', '156.122.80.220', 'thestoryelves.com', 'storyelves.com', 'thestoryelves.net', 'storyelves.net','nourishlife.org', 'solarbridgetech.com', 'coreconditioningtraining.com', 'mpac.org','disseminationcenter.org', 'nichcy.org', 'blogs.census.gov', 'positscience.com', 'roza.nl', 'cantinafeliz.com', 'germfree.com', 'dev.germfree.com', 'cambiati.com' , 'extragroup.de', 'extragroup.at', 'interiorcad.org', 'interiorcad.de', 'interiorcad.at', 'interiorcad.com', 'extragroup.biz', 'house2house.brighthouse.com', 'vpei.com', 'capitaldecisioneering.com', '174.37.58.156', 'murrayhill.com', 'ozzielabels.com.au', 'tajin.com', 'culturefund.eu', 'sealryt.com', 'ancora.net', 'practicalbioethics.org', 'prospertest1.com', 'gardner.house.gov', 'yany.org', 'prophecycoal.com', 'prophecyplat.com', 'redress.cc', 'focus4training.com', 'spocrep.com', 'mercedesservicephx.com', 'frc.ua.edu', 'freepromotips.com.au', 'healthychoicenaturals.com', 'shop.healthychoicenaturals.com', 'blog.healthychoicenaturals.com', 'sheilamargolis.com', 'plattecountyedc.com', 'amerdental.com', 'bucknrunranch.com', 'saenger-projektmanagement.de', 'nobility.org', 'service-usecoupons2save.com', 'smoothieweb.com', 'homerdixon.com', 'blog.recipeforfitness.com', 'recipeforfitness.com', 'naturallysweet.com.au', 'nextforge.com', 'exacq.com', 'tonytan.sg', 'newshub.dhs.gov.au', 'kayskeepers.blogspot.com', 'ewd.gov.au', 'supercoder.com', 'help.opalsinfo.net', 'news.thomasnet.com', 'buyerscreditcoach.com', 'mora.gg', 'yourastroanswers.com', 'towleroad.com', 'banfield.com', 'brighton.ac.uk', 'alacritech.com', 'mktg.alacritech.com', 'devin.alacritech.com', 'chaostoclarity.com', 'janetcromer.com', 'rwb-newsportal.de', 'mcphs.edu', 'virtualeconcreto.net', 'bostonteapartyship.com', 'nathab.com', 'banknews.com', 'blog.willis.com', 'orientamento.it', 'ar.sweden.se', 'alliedblending.com', 'kpcares.com', 'publicsphere.ssrc.org', 'wyvernschooltours.co.uk', 'earthboundexpeditions.com', 'sciencenewsforkids.org', 'pacf.org', 'mercercountycf.org', 'theme-party-queen.com', '10minutelessonplans.com', 'creonline.com', 'icologie.com', 'capturebilling.com', 'medicine.missouri.edu', 'joshuavarner.org', 'cubewing.com', 'eplifefit.com', 'ohiolottery.com', 'obasan.ca', 'robertwgregg.com', 'adelinproperties.com', 'teesjsna.org.uk', 'downtownfairbanks.com', 'remindernews.com', 'beta.tarot.com', 'oliveoiltimes.com', 'skyics.we.bs', 'nasaa.org', 'equalvoiceforfamilies.org', 'casenotes.curwoods.info', 'annabellewhite.com', 'plasticbottle.com', 'earlsorganic.com', 'janetmtaliaferro.com', 'ec4u.de', 'mediaboardonline.com', 'cambridgeopencollege.co.uk', 'e-venise.com', 'sharjahcityag.com', 'rolfbanz.ch', 'pobitegary.com',  'ffpc.org', 'flfamily.org', 'becker.edu', 'bcaaroadsafety.com', 'tfp.org', 'gmu.edu', 'aardespiegel.nl', 'haverford.edu', 'odcgi.com', 'tfpla.org', 'robertwraypllc.com', 'thewoodlands.com', 'marzycielskapoczta.pl','jhconline.com', 'continuumreno.com', 'zillner.com', 'comunicacioninstitucional.ufv.es', 'schaeferassoc.com', 'igreennutrition.com', 'camerondriver.com', 'pulsepoint.org', 't-mlaw.com', 'piercepacific-deere.com', 'vaplaneringsguiden.se', 'melbrennan.com', 'hafcovac.com', 'soffiawardy.com', 'myhospiceuniversitynaturesgarden.co.za.com', 'ramtecwp.com', 'velocityshares.com', 'herkul.org', 'test.velocityshares.com', 'ecperkins.com.au', 'naturesgarden.co.za', 'ahlen.biz', 'ecoconcepts.co.uk', 'acvci.com', 'hoagscatering.com', 'allergyclinic.com', 'allergyhouston.com', 'informedmedicaldecisions.org', 'umanitoba.ca', 'raymond.cc', 'alternativa-za-vas.com', 'plus.leumi.co.il', 'walkerspanishfork.com', 'qrgtx.com', 'consulas.ch', 'powerupco.com', 'cognet.mit.edu', 'thesmogking.com', 'dobobo.com', 'safetystride.com.au', 'budget101.com', 'safetec.net', 'pcavail.com', 'localglobalgreen.com', 'wvutoday.wvu.edu', 'sd79.bc.ca', 'man2man.colonial.org', 'streamcreative.com', 'annuitytransfers.com', 'hareandgrace.com', 'ceisoftware.com', 'la-fabrique-cairn.info', 'west.co.il', 'shiplysnell.com', 'microage.com', 'courtroomlogic.com', 'visitsouthsomerset.com', 'revue-projet.com', 'evesgardenpromo.com', 'spucweb.com', 'conexaosabor.com.br', 'mainstreetbia.com', 'od-nadlan.co.il', 'shipleysnell.com', 'worldshare.org.uk', 'iteachu.uaf.edu', 'sulo.com.au', 'ksmartin.com', 'sightlogix.com', 'mentornet.net.au', 'waylandnews.com', 'ibmdatamag.com', 'correctionalassociation.org', 'mybigbrandsystem.com', 'extension.udel.edu', 'enspektos.com', 'ingoodhealthfdl.agnesian.com', 'teampa.com', 'sunfood.com', 'dialog.scarborough.com', 'templewood.com', 'erdc.usace.army.mil', 'netcampos.com', 'aerodefevent.com', 'clarkbetty.com', '63.241.146.166', 'pianolessons-yamaha.com', 'modernlitho.com', 'cateringbyanne.com', 'thekitchenskinnymenus.com', 'ringuk.co.uk', 'nyoliveoil.com', 'americantrails.org', 'ukessays.com', 'lawteacher.net', 'pepdigest.com', 'brillpatents.com', 'signaturebankga.com', 'stratus.com', 'elderspecialists.com', 'quick-and-easy-dinner.com', 'sitesetupkit.com', 'yuppiechef.co.za', 'whitegoss.com', 'ebarsolutions.com', 'mybank4.me', 'nybergsdeli.se', 'naturguide.dk', 'tv2media.dk', 'eganassociates.com.au', 'redpathagave.com', 'hssesr.com', 'schwimmbad-infozentrum.de', 'amerigoviaggi.it', 'helmsinglaw.com', 'stephenwadetoyotadeals.com', 'thekitchencousins.com', 'sozialismus.info', 'homework.allsaintsvaschool.org', 'research.uncg.edu', 'bodybio.com', 'regerlaw.com', 'corvetteactioncenter.com', 'recbc.ca', 'previewmsa.com', 'barazzone.ch', 'gods-kingdom-ministries.net', 'netpme.fr', 'prov.vic.gov.au', 'backtofullemployment.org', 'charitiestrust.org.uk', 'cnet-training.com', 'coolbluei.com', 'thewalrus.ca', 'ergonarmor.com', 'fofg.org', 'knowledgeleader.com', 'houstonhomelesscoalition.org', 'livingplate.com', 'beroepeninbeeld.nl', 'sherwoodtest.com', 'psychtechs.net', 'onlinebooks.stenhouse.com', 'alfa-fredensborg.dk', 'dianedrain.com', 'livethehealthyorangelife.com', 'centurytravel.com.br', 'mis.uom.gr', 'jobs.hamilton.ch', 'climateandcapitalism.com', 'wejameson.co.uk', 'namicalifornia.org', 'vr-people.com', 'd2000safety.com', 'superedge.insyt.com.au', 'therawchef.com', 'filemakerhacks.com','leomusic.nl', 'vanrenselaarcars.nl', 'tigerteam.dk', 'knowledgeatwork.com', 'scaleblaster.com', 'piercemattie.com', 'quicklaneinkent.com', 'australiancompetitionlaw.org', 'skanes-nordvastpassage.se', 'marcusnt.com', 'tpcpas.com', 'dailytheosophy.net'];

  // No ads SUBDOMAINS
  var premiumDomains = ['drake.edu', 'starkville.org', 'cuny.edu', 'meetmeinthemeadow.com','sunbeltholdings.com', 'universalweather.com', 'tfp.org', 'gmu.edu', 'haverford.edu', 'lovetts.com.au', 'claimscon.org', 'biolifesolutions.com', 'edublogs.org', 'clevelandrestaurantguide.co.uk', 'bcaction.de', 'macatawabank.com', 'trustamerica.com', 'pixelberry.co.nz', 'innovationfiles.org', 'fccc.edu', 'zoomed.com', 'bidpal.net', 'georgetown.org', 'somersetrestaurantguide.co.uk', 'xenit.se', 'ukessays.co.uk', 'soundcontrolroom.com', 'passionforsavings.com', 'screap.dk', 'cietours.com', 'gasdetection.com', 'radisys.com', 'halimeter.com', 'stoneeagle.com', 'msesafety.com', 'kqed.org','itera.nl', 'influentialstrategies.com', 'degree-essays.com', 'moneysavermag.com', 'rmc.org', 'kundalinicare.com', 'redpathsugar.com', 'solidconcepts.com', 'electrocube.com', 'sozialismus.info', 'niutoday.info', 'shenandoahliterary.org', 'rwb-newsportal.de', 'monthlyreview.org', 'e3tnw.org', 'littlecarverpta.org', 'contentexecutive.com', 'candiquik.com', 'thesportsresume.com', 'nexeosolutions.com', 'umpiredigital.com', 'irights.info', 'tasteinspiration.com', 'unr.edu', 'williams.edu', 'mcknight.org', 'iisrp.com', 'danskmisbrugsbehandling.dk', 'cleverex.com', 'novatechweb.com', 'strategicgold.com', 'amshothosting.com'];

  // No BRANDING. Applicable to subdomains
  var brandFreeDomains = ['nathab.com', 'downtownfairbanks.com', 'rolfbanz.ch', 'tfp.org', 'gmu.edu', 'oliveoiltimes.com', 'haverford.edu', 'marzycielskapoczta.pl', 'zillner.com', 'lovetts.com.au', 'claimscon.org', 'biolifesolutions.com', 'edublogs.org', 'clevelandrestaurantguide.co.uk', 'camerondriver.com', 'bcaction.de', 'myhospiceuniversity.com', 'herkul.org', 'macatawabank.com', 'allergyclinic.com', 'allergyhouston.com', 'raymond.cc', 'pixelberry.co.nz', 'fccc.edu', 'safetystride.com.au', 'zoomed.com', 'safetec.net', 'localglobalgreen.com', 'annuitytransfers.com', 'hareandgrace.com', 'bidpal.net', 'ceisoftware.com', 'la-fabrique-cairn.info', 'shiplysnell.com', 'georgetown.org', 'revue-projet.com', 'evesgardenpromo.com', 'somersetrestaurantguide.co.uk', 'xenit.se', 'ukessays.co.uk', 'ksmartin.com', 'ibmdatamag.com', 'gasdetection.com', 'radisys.com', 'halimeter.com', 'stoneeagle.com', 'msesafety.com', 'enspektos.com', 'ingoodhealthfdl.agnesian.com', 'sunfood.com', 'dialog.scarborough.com', 'templewood.com', 'erdc.usace.army.mil', 'netcampos.com', 'signaturebankga.com', 'aerodefevent.com', 'ringuk.co.uk', 'nyoliveoil.com', 'ukessays.com', 'lawteacher.net', 'itera.nl', 'pepdigest.com', 'signaturebankga.com', 'degree-essays.com', 'rmc.org', 'yuppiechef.co.za', 'ebarsolutions.com', 'mybank4.me', 'tv2media.dk', 'eganassociates.com.au', 'kundalinicare.com', 'redpathsugar.com', 'solidconcepts.com', 'hssesr.com', 'electrocube.com', 'helmsinglaw.com', 'stephenwadetoyotadeals.com', 'sozialismus.info', 'rwb-newsportal.de', 'recbc.ca', 'monthlyreview.org', 'e3tnw.org', 'prov.vic.gov.au', 'littlecarverpta.org', 'contentexecutive.com', 'cnet-training.com', 'candiquik.com', 'knowledgeleader.com', 'thesportsresume.com', 'beroepeninbeeld.nl', 'sherwoodtest.com', 'nexeosolutions.com', 'umpiredigital.com', 'irights.info', 'tasteinspiration.com', 'unr.edu', 'williams.edu', 'livethehealthyorangelife.com', 'mcknight.org', 'iisrp.com', 'therawchef.com', 'filemakerhacks.com', 'vanrenselaarcars.nl', 'danskmisbrugsbehandling.dk', 'cleverex.com', 'novatechweb.com', 'strategicgold.com', 'leomusic.nl', 'marcusnt.com', 'amshothosting.com'];

  // remove images by default
  var imageFreeDomains = ['skinnytaste.com', 'pieceofcakekitchen.com', 'naturesgarden.co.za', 'cehd.gmu.edu', 'greatlittlespots.com', 'thesportsresume.com', 'azaleafalls.com'];

  // click to delete disabled
  var deleteDisabledDomains = ['tourismresearchmt.org', 'equalvoiceforfamilies.org', 'mansmith.net', 'matthewlberg.com', 'qrgtx.com', 'withoutreservation.org', 'knitting-and.com', 'sbdcnet.org', 'inglesonline.com.br', 'courtroomlogic.com', 'rachaelcampbell.com', 'cateringbyanne.com', 'fundschoolhouse.com', 'shulamitgallery.com', 'thekitchencousins.com', 'prouds.com.fj', 'lawnow.org', 'rohanphoto.com', 'kerrygoldusa.com'];

  var adPartnerDomains = ['skinnytaste.com'];
  
  // Don't run readability. Use site specific print css file
  var specialDomains = ['hubpages.com'];

  if(_window.pfProtocol == 'https' || _jquery.inArray(pf.domain,adFreeDomains) != -1) {
    pf.removeads = true;
  } else {
     var adPage = _window.pfCdnDomain + '/ads.html';
     _jquery.each(adPartnerDomains, function(k,domain) {
       if(pf.domain.indexOf(domain) != -1) {
         adPage = _window.pfCdnDomain + '/ads/' +  domain + '.html';
         return false;
       }
     });
    _jquery('body',_document).append('<iframe frameborder="0"  name="gaiframe" id="gaiframe" src="'+ adPage + '" style="position:absolute!important; top:296px!important; left:50%!important; height:255px!important; width:636px!important; margin-left:-312px!important; z-index: 2147483647; display:none;"></iframe>');
  }

  _jquery.each(specialDomains, function(k,domain) {
    if(pf.domain.indexOf(domain) != -1) {
      pf.specialDomain = true;
      pf.setPrintSrc(domain);
      return false;
    }
  });

  _jquery.each(premiumDomains, function(k,domain) {
    if(pf.domain.indexOf(domain) != -1) {
      pf.removeads = true;
      return false;
    }
  });

  _jquery.each(brandFreeDomains, function(k,domain) {
    if(pf.domain.indexOf(domain) != -1) {
      _jquery('#pf-ft').hide();
      return false;
    }
  });

  _jquery.each(imageFreeDomains, function(k,domain) {
    if(pf.domain.indexOf(domain) != -1) {
      pf.removeImages = true;
      return false;
    }
  });

  pf.disableDelete = false;
  _jquery.each(deleteDisabledDomains, function(k,domain) {
    if(pf.domain.indexOf(domain) != -1) {
      pf.disableDelete = true;
      return false;
    }
  });
  if(_window['pfdisableClickToDel'] && _window['pfdisableClickToDel'] == 1) {
      pf.disableDelete = true;
  }


  pfiframe = _jquery('<iframe id="pfiframe" name="pfiframe" frameBorder="0" height="' + pf.iframeHeight + 'px"/>').insertBefore(_jquery('#pf-ft'))[0];

  var pftmpiframe = _jquery('<iframe id="pftmpiframe" style="display:none" name="pftmpiframe" />').appendTo('body',_document)[0];
  filliframe(pftmpiframe, _document.domain, function(){ return '<head></head><body></body>'});
  playground = _jquery(pftmpiframe.contentWindow.document.body);
  body_html = getHTML();

  if(pf.domainCssSrc == null ) {
    html = function() {
      return ['<head><link media="screen,print" type="text/css" href="'+ pf.pageCssSrc +'" rel="stylesheet">',
             '<script src="'+pf.readabilitySrc +'"></script>',
             '<meta http-equiv="X-UA-Compatible" content="IE=edge" />',
             '</head>', '<body  onload="window.parent.fillBody(true)" data-domain="', _document.domain, '"></body>'].join('');
    };
  } else {
    html = function() {
      return ['<head><link media="screen,print" type="text/css" href="'+ pf.pageCssSrc +'" rel="stylesheet">',
              '<meta http-equiv="X-UA-Compatible" content="IE=edge" />',
             '</head>', '<body  onload="window.parent.fillBody(false)" data-domain="', _document.domain, '"></body>'].join('');
    };
  }
  filliframe(pfiframe, _document.domain, html);
  pf.iDoc = pfiframe.contentWindow.document;
  _jquery.ajax({
    url: _window.pfDomain + '/getlocale',
    dataType: 'jsonp',
    success: function(language) {
      localize(language);
    }
  });
};

window.fillBody = function(readability) {
  setTimeout(function(){
    pf.iDoc.body.innerHTML = body_html;
    // IE inserts empty title tags
    _jquery('head > title',pf.iDoc).remove();
    try {
      var title = pf.iDoc.createElement('title');
      _jquery('head',pf.iDoc)[0].appendChild(title);
      pf.iDoc.title = _jquery('title',_document).html();
    } catch(e) {}
    if(readability) {
      pfiframe.contentWindow.readability.init();

      if(pfiframe.contentWindow.readability.alternative){
           _jquery('#alternative').show();
        }
    } else {
      _jquery('body',pf.iDoc).append('<link rel="stylesheet" href="'+  pf.domainCssSrc +'" type="text/css" media="screen,print" />');
      // to fix pdf, we need the styles in body
      pf.getScript(pf.jquerySrc + '&y=' + (Math.random()),pf.iDoc, function(){
        pf.getScript(pf.domainJsSrc, pf.iDoc,function(){});
      });
    }
  }, 100);
}

filliframe = function(iframe, domain, html) {
  var d, domainSrc;
  try {
    iframe.contentWindow.document.open;
  } catch (error) {
    console.log(error);
    domainSrc = "javascript:var d=document.open();d.domain='" + domain + "';";
    iframe.src = domainSrc + "void(0);";
  }
  try {
    d = iframe.contentWindow.document;
    d.write(html());
    d.close();
  } catch (error) {
    console.log(error);
    iframe.src = domainSrc + 'd.write("' + html().replace(/"/g, '\\"') + '");d.close();';
  }
};



$LAB.script('https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js').wait(function() {
    try{
        _jquery = $;
        init();
    } catch(e) {
        if(_window.pfEnv == 'production') {
          pf.redirect();
        } else {
          console.log(e.message);
        }
    }
});

}).call(this);
