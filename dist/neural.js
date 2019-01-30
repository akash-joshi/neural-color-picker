(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.neuralColor=f()}})(function(){var define,module,exports;return(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){const brain=require('brain.js');const neuralColor=(red,green,blue)=>{const network=new brain.NeuralNetwork();network.train([{input:{r:0.62,g:0.72,b:0.88},output:{light:1}},{input:{r:0.1,g:0.84,b:0.72},output:{light:1}},{input:{r:0.33,g:0.24,b:0.29},output:{dark:1}},{input:{r:0.74,g:0.78,b:0.86},output:{light:1}},{input:{r:0.31,g:0.35,b:0.41},output:{dark:1}},{input:{r:1,g:0.99,b:0},output:{light:1}},{input:{r:1,g:0.42,b:0.52},output:{dark:1}}]);red=Math.round(parseInt(red)/2.55)/100;green=Math.round(parseInt(green)/2.55)/100;blue=Math.round(parseInt(blue)/2.55)/100;const result=brain.likely({r:red,g:green,b:blue},network)
if(result=='light')
return'dark';else return'light'}
module.exports=neuralColor},{"brain.js":46}],2:[function(require,module,exports){(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(exports):typeof define==='function'&&define.amd?define(['exports'],factory):(factory((global.acorn={})))}(this,(function(exports){'use strict';var reservedWords={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"};var ecma5AndLessKeywords="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";var keywords={5:ecma5AndLessKeywords,6:ecma5AndLessKeywords+" const class extends export import super"};var keywordRelationalOperator=/^in(stanceof)?$/;var nonASCIIidentifierStartChars="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312e\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fea\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ae\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab65\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";var nonASCIIidentifierChars="\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d4-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";var nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]");var nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;var astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,257,0,11,39,8,0,22,0,12,39,3,3,55,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,698,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,1,31,6124,20,754,9486,286,82,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541];var astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,280,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,19719,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239];function isInAstralSet(code,set){var pos=0x10000;for(var i=0;i<set.length;i+=2){pos+=set[i];if(pos>code){return!1}
pos+=set[i+1];if(pos>=code){return!0}}}
function isIdentifierStart(code,astral){if(code<65){return code===36}
if(code<91){return!0}
if(code<97){return code===95}
if(code<123){return!0}
if(code<=0xffff){return code>=0xaa&&nonASCIIidentifierStart.test(String.fromCharCode(code))}
if(astral===!1){return!1}
return isInAstralSet(code,astralIdentifierStartCodes)}
function isIdentifierChar(code,astral){if(code<48){return code===36}
if(code<58){return!0}
if(code<65){return!1}
if(code<91){return!0}
if(code<97){return code===95}
if(code<123){return!0}
if(code<=0xffff){return code>=0xaa&&nonASCIIidentifier.test(String.fromCharCode(code))}
if(astral===!1){return!1}
return isInAstralSet(code,astralIdentifierStartCodes)||isInAstralSet(code,astralIdentifierCodes)}
var TokenType=function TokenType(label,conf){if(conf===void 0)conf={};this.label=label;this.keyword=conf.keyword;this.beforeExpr=!!conf.beforeExpr;this.startsExpr=!!conf.startsExpr;this.isLoop=!!conf.isLoop;this.isAssign=!!conf.isAssign;this.prefix=!!conf.prefix;this.postfix=!!conf.postfix;this.binop=conf.binop||null;this.updateContext=null};function binop(name,prec){return new TokenType(name,{beforeExpr:!0,binop:prec})}
var beforeExpr={beforeExpr:!0};var startsExpr={startsExpr:!0};var keywords$1={};function kw(name,options){if(options===void 0)options={};options.keyword=name;return keywords$1[name]=new TokenType(name,options)}
var types={num:new TokenType("num",startsExpr),regexp:new TokenType("regexp",startsExpr),string:new TokenType("string",startsExpr),name:new TokenType("name",startsExpr),eof:new TokenType("eof"),bracketL:new TokenType("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr:!0,startsExpr:!0}),braceR:new TokenType("}"),parenL:new TokenType("(",{beforeExpr:!0,startsExpr:!0}),parenR:new TokenType(")"),comma:new TokenType(",",beforeExpr),semi:new TokenType(";",beforeExpr),colon:new TokenType(":",beforeExpr),dot:new TokenType("."),question:new TokenType("?",beforeExpr),arrow:new TokenType("=>",beforeExpr),template:new TokenType("template"),invalidTemplate:new TokenType("invalidTemplate"),ellipsis:new TokenType("...",beforeExpr),backQuote:new TokenType("`",startsExpr),dollarBraceL:new TokenType("${",{beforeExpr:!0,startsExpr:!0}),eq:new TokenType("=",{beforeExpr:!0,isAssign:!0}),assign:new TokenType("_=",{beforeExpr:!0,isAssign:!0}),incDec:new TokenType("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new TokenType("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:binop("||",1),logicalAND:binop("&&",2),bitwiseOR:binop("|",3),bitwiseXOR:binop("^",4),bitwiseAND:binop("&",5),equality:binop("==/!=/===/!==",6),relational:binop("</>/<=/>=",7),bitShift:binop("<</>>/>>>",8),plusMin:new TokenType("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:binop("%",10),star:binop("*",10),slash:binop("/",10),starstar:new TokenType("**",{beforeExpr:!0}),_break:kw("break"),_case:kw("case",beforeExpr),_catch:kw("catch"),_continue:kw("continue"),_debugger:kw("debugger"),_default:kw("default",beforeExpr),_do:kw("do",{isLoop:!0,beforeExpr:!0}),_else:kw("else",beforeExpr),_finally:kw("finally"),_for:kw("for",{isLoop:!0}),_function:kw("function",startsExpr),_if:kw("if"),_return:kw("return",beforeExpr),_switch:kw("switch"),_throw:kw("throw",beforeExpr),_try:kw("try"),_var:kw("var"),_const:kw("const"),_while:kw("while",{isLoop:!0}),_with:kw("with"),_new:kw("new",{beforeExpr:!0,startsExpr:!0}),_this:kw("this",startsExpr),_super:kw("super",startsExpr),_class:kw("class",startsExpr),_extends:kw("extends",beforeExpr),_export:kw("export"),_import:kw("import"),_null:kw("null",startsExpr),_true:kw("true",startsExpr),_false:kw("false",startsExpr),_in:kw("in",{beforeExpr:!0,binop:7}),_instanceof:kw("instanceof",{beforeExpr:!0,binop:7}),_typeof:kw("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:kw("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:kw("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})};var lineBreak=/\r\n?|\n|\u2028|\u2029/;var lineBreakG=new RegExp(lineBreak.source,"g");function isNewLine(code){return code===10||code===13||code===0x2028||code===0x2029}
var nonASCIIwhitespace=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;var skipWhiteSpace=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;var ref=Object.prototype;var hasOwnProperty=ref.hasOwnProperty;var toString=ref.toString;function has(obj,propName){return hasOwnProperty.call(obj,propName)}
var isArray=Array.isArray||(function(obj){return(toString.call(obj)==="[object Array]")});var Position=function Position(line,col){this.line=line;this.column=col};Position.prototype.offset=function offset(n){return new Position(this.line,this.column+n)};var SourceLocation=function SourceLocation(p,start,end){this.start=start;this.end=end;if(p.sourceFile!==null){this.source=p.sourceFile}};function getLineInfo(input,offset){for(var line=1,cur=0;;){lineBreakG.lastIndex=cur;var match=lineBreakG.exec(input);if(match&&match.index<offset){++line;cur=match.index+match[0].length}else{return new Position(line,offset-cur)}}}
var defaultOptions={ecmaVersion:7,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1,plugins:{}};function getOptions(opts){var options={};for(var opt in defaultOptions)
{options[opt]=opts&&has(opts,opt)?opts[opt]:defaultOptions[opt]}
if(options.ecmaVersion>=2015)
{options.ecmaVersion-=2009}
if(options.allowReserved==null)
{options.allowReserved=options.ecmaVersion<5}
if(isArray(options.onToken)){var tokens=options.onToken;options.onToken=function(token){return tokens.push(token)}}
if(isArray(options.onComment))
{options.onComment=pushComment(options,options.onComment)}
return options}
function pushComment(options,array){return function(block,text,start,end,startLoc,endLoc){var comment={type:block?"Block":"Line",value:text,start:start,end:end};if(options.locations)
{comment.loc=new SourceLocation(this,startLoc,endLoc)}
if(options.ranges)
{comment.range=[start,end]}
array.push(comment)}}
var plugins={};function keywordRegexp(words){return new RegExp("^(?:"+words.replace(/ /g,"|")+")$")}
var Parser=function Parser(options,input,startPos){this.options=options=getOptions(options);this.sourceFile=options.sourceFile;this.keywords=keywordRegexp(keywords[options.ecmaVersion>=6?6:5]);var reserved="";if(!options.allowReserved){for(var v=options.ecmaVersion;;v--)
{if(reserved=reservedWords[v]){break}}
if(options.sourceType=="module"){reserved+=" await"}}
this.reservedWords=keywordRegexp(reserved);var reservedStrict=(reserved?reserved+" ":"")+reservedWords.strict;this.reservedWordsStrict=keywordRegexp(reservedStrict);this.reservedWordsStrictBind=keywordRegexp(reservedStrict+" "+reservedWords.strictBind);this.input=String(input);this.containsEsc=!1;this.loadPlugins(options.plugins);if(startPos){this.pos=startPos;this.lineStart=this.input.lastIndexOf("\n",startPos-1)+1;this.curLine=this.input.slice(0,this.lineStart).split(lineBreak).length}else{this.pos=this.lineStart=0;this.curLine=1}
this.type=types.eof;this.value=null;this.start=this.end=this.pos;this.startLoc=this.endLoc=this.curPosition();this.lastTokEndLoc=this.lastTokStartLoc=null;this.lastTokStart=this.lastTokEnd=this.pos;this.context=this.initialContext();this.exprAllowed=!0;this.inModule=options.sourceType==="module";this.strict=this.inModule||this.strictDirective(this.pos);this.potentialArrowAt=-1;this.inFunction=this.inGenerator=this.inAsync=!1;this.yieldPos=this.awaitPos=0;this.labels=[];if(this.pos===0&&options.allowHashBang&&this.input.slice(0,2)==="#!")
{this.skipLineComment(2)}
this.scopeStack=[];this.enterFunctionScope();this.regexpState=null};Parser.prototype.isKeyword=function isKeyword(word){return this.keywords.test(word)};Parser.prototype.isReservedWord=function isReservedWord(word){return this.reservedWords.test(word)};Parser.prototype.extend=function extend(name,f){this[name]=f(this[name])};Parser.prototype.loadPlugins=function loadPlugins(pluginConfigs){var this$1=this;for(var name in pluginConfigs){var plugin=plugins[name];if(!plugin){throw new Error("Plugin '"+name+"' not found")}
plugin(this$1,pluginConfigs[name])}};Parser.prototype.parse=function parse(){var node=this.options.program||this.startNode();this.nextToken();return this.parseTopLevel(node)};var pp=Parser.prototype;var literal=/^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;pp.strictDirective=function(start){var this$1=this;for(;;){skipWhiteSpace.lastIndex=start;start+=skipWhiteSpace.exec(this$1.input)[0].length;var match=literal.exec(this$1.input.slice(start));if(!match){return!1}
if((match[1]||match[2])=="use strict"){return!0}
start+=match[0].length}};pp.eat=function(type){if(this.type===type){this.next();return!0}else{return!1}};pp.isContextual=function(name){return this.type===types.name&&this.value===name&&!this.containsEsc};pp.eatContextual=function(name){if(!this.isContextual(name)){return!1}
this.next();return!0};pp.expectContextual=function(name){if(!this.eatContextual(name)){this.unexpected()}};pp.canInsertSemicolon=function(){return this.type===types.eof||this.type===types.braceR||lineBreak.test(this.input.slice(this.lastTokEnd,this.start))};pp.insertSemicolon=function(){if(this.canInsertSemicolon()){if(this.options.onInsertedSemicolon)
{this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc)}
return!0}};pp.semicolon=function(){if(!this.eat(types.semi)&&!this.insertSemicolon()){this.unexpected()}};pp.afterTrailingComma=function(tokType,notNext){if(this.type==tokType){if(this.options.onTrailingComma)
{this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc)}
if(!notNext)
{this.next()}
return!0}};pp.expect=function(type){this.eat(type)||this.unexpected()};pp.unexpected=function(pos){this.raise(pos!=null?pos:this.start,"Unexpected token")};function DestructuringErrors(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1}
pp.checkPatternErrors=function(refDestructuringErrors,isAssign){if(!refDestructuringErrors){return}
if(refDestructuringErrors.trailingComma>-1)
{this.raiseRecoverable(refDestructuringErrors.trailingComma,"Comma is not permitted after the rest element")}
var parens=isAssign?refDestructuringErrors.parenthesizedAssign:refDestructuringErrors.parenthesizedBind;if(parens>-1){this.raiseRecoverable(parens,"Parenthesized pattern")}};pp.checkExpressionErrors=function(refDestructuringErrors,andThrow){if(!refDestructuringErrors){return!1}
var shorthandAssign=refDestructuringErrors.shorthandAssign;var doubleProto=refDestructuringErrors.doubleProto;if(!andThrow){return shorthandAssign>=0||doubleProto>=0}
if(shorthandAssign>=0)
{this.raise(shorthandAssign,"Shorthand property assignments are valid only in destructuring patterns")}
if(doubleProto>=0)
{this.raiseRecoverable(doubleProto,"Redefinition of __proto__ property")}};pp.checkYieldAwaitInDefaultParams=function(){if(this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos))
{this.raise(this.yieldPos,"Yield expression cannot be a default value")}
if(this.awaitPos)
{this.raise(this.awaitPos,"Await expression cannot be a default value")}};pp.isSimpleAssignTarget=function(expr){if(expr.type==="ParenthesizedExpression")
{return this.isSimpleAssignTarget(expr.expression)}
return expr.type==="Identifier"||expr.type==="MemberExpression"};var pp$1=Parser.prototype;pp$1.parseTopLevel=function(node){var this$1=this;var exports={};if(!node.body){node.body=[]}
while(this.type!==types.eof){var stmt=this$1.parseStatement(!0,!0,exports);node.body.push(stmt)}
this.adaptDirectivePrologue(node.body);this.next();if(this.options.ecmaVersion>=6){node.sourceType=this.options.sourceType}
return this.finishNode(node,"Program")};var loopLabel={kind:"loop"};var switchLabel={kind:"switch"};pp$1.isLet=function(){if(this.options.ecmaVersion<6||!this.isContextual("let")){return!1}
skipWhiteSpace.lastIndex=this.pos;var skip=skipWhiteSpace.exec(this.input);var next=this.pos+skip[0].length,nextCh=this.input.charCodeAt(next);if(nextCh===91||nextCh==123){return!0}
if(isIdentifierStart(nextCh,!0)){var pos=next+1;while(isIdentifierChar(this.input.charCodeAt(pos),!0)){++pos}
var ident=this.input.slice(next,pos);if(!keywordRelationalOperator.test(ident)){return!0}}
return!1};pp$1.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))
{return!1}
skipWhiteSpace.lastIndex=this.pos;var skip=skipWhiteSpace.exec(this.input);var next=this.pos+skip[0].length;return!lineBreak.test(this.input.slice(this.pos,next))&&this.input.slice(next,next+8)==="function"&&(next+8==this.input.length||!isIdentifierChar(this.input.charAt(next+8)))};pp$1.parseStatement=function(declaration,topLevel,exports){var starttype=this.type,node=this.startNode(),kind;if(this.isLet()){starttype=types._var;kind="let"}
switch(starttype){case types._break:case types._continue:return this.parseBreakContinueStatement(node,starttype.keyword)
case types._debugger:return this.parseDebuggerStatement(node)
case types._do:return this.parseDoStatement(node)
case types._for:return this.parseForStatement(node)
case types._function:if(!declaration&&this.options.ecmaVersion>=6){this.unexpected()}
return this.parseFunctionStatement(node,!1)
case types._class:if(!declaration){this.unexpected()}
return this.parseClass(node,!0)
case types._if:return this.parseIfStatement(node)
case types._return:return this.parseReturnStatement(node)
case types._switch:return this.parseSwitchStatement(node)
case types._throw:return this.parseThrowStatement(node)
case types._try:return this.parseTryStatement(node)
case types._const:case types._var:kind=kind||this.value;if(!declaration&&kind!="var"){this.unexpected()}
return this.parseVarStatement(node,kind)
case types._while:return this.parseWhileStatement(node)
case types._with:return this.parseWithStatement(node)
case types.braceL:return this.parseBlock()
case types.semi:return this.parseEmptyStatement(node)
case types._export:case types._import:if(!this.options.allowImportExportEverywhere){if(!topLevel)
{this.raise(this.start,"'import' and 'export' may only appear at the top level")}
if(!this.inModule)
{this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")}}
return starttype===types._import?this.parseImport(node):this.parseExport(node,exports)
default:if(this.isAsyncFunction()){if(!declaration){this.unexpected()}
this.next();return this.parseFunctionStatement(node,!0)}
var maybeName=this.value,expr=this.parseExpression();if(starttype===types.name&&expr.type==="Identifier"&&this.eat(types.colon))
{return this.parseLabeledStatement(node,maybeName,expr)}
else{return this.parseExpressionStatement(node,expr)}}};pp$1.parseBreakContinueStatement=function(node,keyword){var this$1=this;var isBreak=keyword=="break";this.next();if(this.eat(types.semi)||this.insertSemicolon()){node.label=null}
else if(this.type!==types.name){this.unexpected()}
else{node.label=this.parseIdent();this.semicolon()}
var i=0;for(;i<this.labels.length;++i){var lab=this$1.labels[i];if(node.label==null||lab.name===node.label.name){if(lab.kind!=null&&(isBreak||lab.kind==="loop")){break}
if(node.label&&isBreak){break}}}
if(i===this.labels.length){this.raise(node.start,"Unsyntactic "+keyword)}
return this.finishNode(node,isBreak?"BreakStatement":"ContinueStatement")};pp$1.parseDebuggerStatement=function(node){this.next();this.semicolon();return this.finishNode(node,"DebuggerStatement")};pp$1.parseDoStatement=function(node){this.next();this.labels.push(loopLabel);node.body=this.parseStatement(!1);this.labels.pop();this.expect(types._while);node.test=this.parseParenExpression();if(this.options.ecmaVersion>=6)
{this.eat(types.semi)}
else{this.semicolon()}
return this.finishNode(node,"DoWhileStatement")};pp$1.parseForStatement=function(node){this.next();var awaitAt=(this.options.ecmaVersion>=9&&this.inAsync&&this.eatContextual("await"))?this.lastTokStart:-1;this.labels.push(loopLabel);this.enterLexicalScope();this.expect(types.parenL);if(this.type===types.semi){if(awaitAt>-1){this.unexpected(awaitAt)}
return this.parseFor(node,null)}
var isLet=this.isLet();if(this.type===types._var||this.type===types._const||isLet){var init$1=this.startNode(),kind=isLet?"let":this.value;this.next();this.parseVar(init$1,!0,kind);this.finishNode(init$1,"VariableDeclaration");if((this.type===types._in||(this.options.ecmaVersion>=6&&this.isContextual("of")))&&init$1.declarations.length===1&&!(kind!=="var"&&init$1.declarations[0].init)){if(this.options.ecmaVersion>=9){if(this.type===types._in){if(awaitAt>-1){this.unexpected(awaitAt)}}else{node.await=awaitAt>-1}}
return this.parseForIn(node,init$1)}
if(awaitAt>-1){this.unexpected(awaitAt)}
return this.parseFor(node,init$1)}
var refDestructuringErrors=new DestructuringErrors;var init=this.parseExpression(!0,refDestructuringErrors);if(this.type===types._in||(this.options.ecmaVersion>=6&&this.isContextual("of"))){if(this.options.ecmaVersion>=9){if(this.type===types._in){if(awaitAt>-1){this.unexpected(awaitAt)}}else{node.await=awaitAt>-1}}
this.toAssignable(init,!1,refDestructuringErrors);this.checkLVal(init);return this.parseForIn(node,init)}else{this.checkExpressionErrors(refDestructuringErrors,!0)}
if(awaitAt>-1){this.unexpected(awaitAt)}
return this.parseFor(node,init)};pp$1.parseFunctionStatement=function(node,isAsync){this.next();return this.parseFunction(node,!0,!1,isAsync)};pp$1.parseIfStatement=function(node){this.next();node.test=this.parseParenExpression();node.consequent=this.parseStatement(!this.strict&&this.type==types._function);node.alternate=this.eat(types._else)?this.parseStatement(!this.strict&&this.type==types._function):null;return this.finishNode(node,"IfStatement")};pp$1.parseReturnStatement=function(node){if(!this.inFunction&&!this.options.allowReturnOutsideFunction)
{this.raise(this.start,"'return' outside of function")}
this.next();if(this.eat(types.semi)||this.insertSemicolon()){node.argument=null}
else{node.argument=this.parseExpression();this.semicolon()}
return this.finishNode(node,"ReturnStatement")};pp$1.parseSwitchStatement=function(node){var this$1=this;this.next();node.discriminant=this.parseParenExpression();node.cases=[];this.expect(types.braceL);this.labels.push(switchLabel);this.enterLexicalScope();var cur;for(var sawDefault=!1;this.type!=types.braceR;){if(this$1.type===types._case||this$1.type===types._default){var isCase=this$1.type===types._case;if(cur){this$1.finishNode(cur,"SwitchCase")}
node.cases.push(cur=this$1.startNode());cur.consequent=[];this$1.next();if(isCase){cur.test=this$1.parseExpression()}else{if(sawDefault){this$1.raiseRecoverable(this$1.lastTokStart,"Multiple default clauses")}
sawDefault=!0;cur.test=null}
this$1.expect(types.colon)}else{if(!cur){this$1.unexpected()}
cur.consequent.push(this$1.parseStatement(!0))}}
this.exitLexicalScope();if(cur){this.finishNode(cur,"SwitchCase")}
this.next();this.labels.pop();return this.finishNode(node,"SwitchStatement")};pp$1.parseThrowStatement=function(node){this.next();if(lineBreak.test(this.input.slice(this.lastTokEnd,this.start)))
{this.raise(this.lastTokEnd,"Illegal newline after throw")}
node.argument=this.parseExpression();this.semicolon();return this.finishNode(node,"ThrowStatement")};var empty=[];pp$1.parseTryStatement=function(node){this.next();node.block=this.parseBlock();node.handler=null;if(this.type===types._catch){var clause=this.startNode();this.next();this.expect(types.parenL);clause.param=this.parseBindingAtom();this.enterLexicalScope();this.checkLVal(clause.param,"let");this.expect(types.parenR);clause.body=this.parseBlock(!1);this.exitLexicalScope();node.handler=this.finishNode(clause,"CatchClause")}
node.finalizer=this.eat(types._finally)?this.parseBlock():null;if(!node.handler&&!node.finalizer)
{this.raise(node.start,"Missing catch or finally clause")}
return this.finishNode(node,"TryStatement")};pp$1.parseVarStatement=function(node,kind){this.next();this.parseVar(node,!1,kind);this.semicolon();return this.finishNode(node,"VariableDeclaration")};pp$1.parseWhileStatement=function(node){this.next();node.test=this.parseParenExpression();this.labels.push(loopLabel);node.body=this.parseStatement(!1);this.labels.pop();return this.finishNode(node,"WhileStatement")};pp$1.parseWithStatement=function(node){if(this.strict){this.raise(this.start,"'with' in strict mode")}
this.next();node.object=this.parseParenExpression();node.body=this.parseStatement(!1);return this.finishNode(node,"WithStatement")};pp$1.parseEmptyStatement=function(node){this.next();return this.finishNode(node,"EmptyStatement")};pp$1.parseLabeledStatement=function(node,maybeName,expr){var this$1=this;for(var i$1=0,list=this$1.labels;i$1<list.length;i$1+=1)
{var label=list[i$1];if(label.name===maybeName)
{this$1.raise(expr.start,"Label '"+maybeName+"' is already declared")}}
var kind=this.type.isLoop?"loop":this.type===types._switch?"switch":null;for(var i=this.labels.length-1;i>=0;i--){var label$1=this$1.labels[i];if(label$1.statementStart==node.start){label$1.statementStart=this$1.start;label$1.kind=kind}else{break}}
this.labels.push({name:maybeName,kind:kind,statementStart:this.start});node.body=this.parseStatement(!0);if(node.body.type=="ClassDeclaration"||node.body.type=="VariableDeclaration"&&node.body.kind!="var"||node.body.type=="FunctionDeclaration"&&(this.strict||node.body.generator))
{this.raiseRecoverable(node.body.start,"Invalid labeled declaration")}
this.labels.pop();node.label=expr;return this.finishNode(node,"LabeledStatement")};pp$1.parseExpressionStatement=function(node,expr){node.expression=expr;this.semicolon();return this.finishNode(node,"ExpressionStatement")};pp$1.parseBlock=function(createNewLexicalScope){var this$1=this;if(createNewLexicalScope===void 0)createNewLexicalScope=!0;var node=this.startNode();node.body=[];this.expect(types.braceL);if(createNewLexicalScope){this.enterLexicalScope()}
while(!this.eat(types.braceR)){var stmt=this$1.parseStatement(!0);node.body.push(stmt)}
if(createNewLexicalScope){this.exitLexicalScope()}
return this.finishNode(node,"BlockStatement")};pp$1.parseFor=function(node,init){node.init=init;this.expect(types.semi);node.test=this.type===types.semi?null:this.parseExpression();this.expect(types.semi);node.update=this.type===types.parenR?null:this.parseExpression();this.expect(types.parenR);this.exitLexicalScope();node.body=this.parseStatement(!1);this.labels.pop();return this.finishNode(node,"ForStatement")};pp$1.parseForIn=function(node,init){var type=this.type===types._in?"ForInStatement":"ForOfStatement";this.next();if(type=="ForInStatement"){if(init.type==="AssignmentPattern"||(init.type==="VariableDeclaration"&&init.declarations[0].init!=null&&(this.strict||init.declarations[0].id.type!=="Identifier")))
{this.raise(init.start,"Invalid assignment in for-in loop head")}}
node.left=init;node.right=type=="ForInStatement"?this.parseExpression():this.parseMaybeAssign();this.expect(types.parenR);this.exitLexicalScope();node.body=this.parseStatement(!1);this.labels.pop();return this.finishNode(node,type)};pp$1.parseVar=function(node,isFor,kind){var this$1=this;node.declarations=[];node.kind=kind;for(;;){var decl=this$1.startNode();this$1.parseVarId(decl,kind);if(this$1.eat(types.eq)){decl.init=this$1.parseMaybeAssign(isFor)}else if(kind==="const"&&!(this$1.type===types._in||(this$1.options.ecmaVersion>=6&&this$1.isContextual("of")))){this$1.unexpected()}else if(decl.id.type!="Identifier"&&!(isFor&&(this$1.type===types._in||this$1.isContextual("of")))){this$1.raise(this$1.lastTokEnd,"Complex binding patterns require an initialization value")}else{decl.init=null}
node.declarations.push(this$1.finishNode(decl,"VariableDeclarator"));if(!this$1.eat(types.comma)){break}}
return node};pp$1.parseVarId=function(decl,kind){decl.id=this.parseBindingAtom(kind);this.checkLVal(decl.id,kind,!1)};pp$1.parseFunction=function(node,isStatement,allowExpressionBody,isAsync){this.initFunction(node);if(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!isAsync)
{node.generator=this.eat(types.star)}
if(this.options.ecmaVersion>=8)
{node.async=!!isAsync}
if(isStatement){node.id=isStatement==="nullableID"&&this.type!=types.name?null:this.parseIdent();if(node.id){this.checkLVal(node.id,"var")}}
var oldInGen=this.inGenerator,oldInAsync=this.inAsync,oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,oldInFunc=this.inFunction;this.inGenerator=node.generator;this.inAsync=node.async;this.yieldPos=0;this.awaitPos=0;this.inFunction=!0;this.enterFunctionScope();if(!isStatement)
{node.id=this.type==types.name?this.parseIdent():null}
this.parseFunctionParams(node);this.parseFunctionBody(node,allowExpressionBody);this.inGenerator=oldInGen;this.inAsync=oldInAsync;this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;this.inFunction=oldInFunc;return this.finishNode(node,isStatement?"FunctionDeclaration":"FunctionExpression")};pp$1.parseFunctionParams=function(node){this.expect(types.parenL);node.params=this.parseBindingList(types.parenR,!1,this.options.ecmaVersion>=8);this.checkYieldAwaitInDefaultParams()};pp$1.parseClass=function(node,isStatement){var this$1=this;this.next();this.parseClassId(node,isStatement);this.parseClassSuper(node);var classBody=this.startNode();var hadConstructor=!1;classBody.body=[];this.expect(types.braceL);while(!this.eat(types.braceR)){var member=this$1.parseClassMember(classBody);if(member&&member.type==="MethodDefinition"&&member.kind==="constructor"){if(hadConstructor){this$1.raise(member.start,"Duplicate constructor in the same class")}
hadConstructor=!0}}
node.body=this.finishNode(classBody,"ClassBody");return this.finishNode(node,isStatement?"ClassDeclaration":"ClassExpression")};pp$1.parseClassMember=function(classBody){var this$1=this;if(this.eat(types.semi)){return null}
var method=this.startNode();var tryContextual=function(k,noLineBreak){if(noLineBreak===void 0)noLineBreak=!1;var start=this$1.start,startLoc=this$1.startLoc;if(!this$1.eatContextual(k)){return!1}
if(this$1.type!==types.parenL&&(!noLineBreak||!this$1.canInsertSemicolon())){return!0}
if(method.key){this$1.unexpected()}
method.computed=!1;method.key=this$1.startNodeAt(start,startLoc);method.key.name=k;this$1.finishNode(method.key,"Identifier");return!1};method.kind="method";method.static=tryContextual("static");var isGenerator=this.eat(types.star);var isAsync=!1;if(!isGenerator){if(this.options.ecmaVersion>=8&&tryContextual("async",!0)){isAsync=!0;isGenerator=this.options.ecmaVersion>=9&&this.eat(types.star)}else if(tryContextual("get")){method.kind="get"}else if(tryContextual("set")){method.kind="set"}}
if(!method.key){this.parsePropertyName(method)}
var key=method.key;if(!method.computed&&!method.static&&(key.type==="Identifier"&&key.name==="constructor"||key.type==="Literal"&&key.value==="constructor")){if(method.kind!=="method"){this.raise(key.start,"Constructor can't have get/set modifier")}
if(isGenerator){this.raise(key.start,"Constructor can't be a generator")}
if(isAsync){this.raise(key.start,"Constructor can't be an async method")}
method.kind="constructor"}else if(method.static&&key.type==="Identifier"&&key.name==="prototype"){this.raise(key.start,"Classes may not have a static property named prototype")}
this.parseClassMethod(classBody,method,isGenerator,isAsync);if(method.kind==="get"&&method.value.params.length!==0)
{this.raiseRecoverable(method.value.start,"getter should have no params")}
if(method.kind==="set"&&method.value.params.length!==1)
{this.raiseRecoverable(method.value.start,"setter should have exactly one param")}
if(method.kind==="set"&&method.value.params[0].type==="RestElement")
{this.raiseRecoverable(method.value.params[0].start,"Setter cannot use rest params")}
return method};pp$1.parseClassMethod=function(classBody,method,isGenerator,isAsync){method.value=this.parseMethod(isGenerator,isAsync);classBody.body.push(this.finishNode(method,"MethodDefinition"))};pp$1.parseClassId=function(node,isStatement){node.id=this.type===types.name?this.parseIdent():isStatement===!0?this.unexpected():null};pp$1.parseClassSuper=function(node){node.superClass=this.eat(types._extends)?this.parseExprSubscripts():null};pp$1.parseExport=function(node,exports){var this$1=this;this.next();if(this.eat(types.star)){this.expectContextual("from");if(this.type!==types.string){this.unexpected()}
node.source=this.parseExprAtom();this.semicolon();return this.finishNode(node,"ExportAllDeclaration")}
if(this.eat(types._default)){this.checkExport(exports,"default",this.lastTokStart);var isAsync;if(this.type===types._function||(isAsync=this.isAsyncFunction())){var fNode=this.startNode();this.next();if(isAsync){this.next()}
node.declaration=this.parseFunction(fNode,"nullableID",!1,isAsync)}else if(this.type===types._class){var cNode=this.startNode();node.declaration=this.parseClass(cNode,"nullableID")}else{node.declaration=this.parseMaybeAssign();this.semicolon()}
return this.finishNode(node,"ExportDefaultDeclaration")}
if(this.shouldParseExportStatement()){node.declaration=this.parseStatement(!0);if(node.declaration.type==="VariableDeclaration")
{this.checkVariableExport(exports,node.declaration.declarations)}
else{this.checkExport(exports,node.declaration.id.name,node.declaration.id.start)}
node.specifiers=[];node.source=null}else{node.declaration=null;node.specifiers=this.parseExportSpecifiers(exports);if(this.eatContextual("from")){if(this.type!==types.string){this.unexpected()}
node.source=this.parseExprAtom()}else{for(var i=0,list=node.specifiers;i<list.length;i+=1){var spec=list[i];this$1.checkUnreserved(spec.local)}
node.source=null}
this.semicolon()}
return this.finishNode(node,"ExportNamedDeclaration")};pp$1.checkExport=function(exports,name,pos){if(!exports){return}
if(has(exports,name))
{this.raiseRecoverable(pos,"Duplicate export '"+name+"'")}
exports[name]=!0};pp$1.checkPatternExport=function(exports,pat){var this$1=this;var type=pat.type;if(type=="Identifier")
{this.checkExport(exports,pat.name,pat.start)}
else if(type=="ObjectPattern")
{for(var i=0,list=pat.properties;i<list.length;i+=1)
{var prop=list[i];this$1.checkPatternExport(exports,prop)}}
else if(type=="ArrayPattern")
{for(var i$1=0,list$1=pat.elements;i$1<list$1.length;i$1+=1){var elt=list$1[i$1];if(elt){this$1.checkPatternExport(exports,elt)}}}
else if(type=="Property")
{this.checkPatternExport(exports,pat.value)}
else if(type=="AssignmentPattern")
{this.checkPatternExport(exports,pat.left)}
else if(type=="RestElement")
{this.checkPatternExport(exports,pat.argument)}
else if(type=="ParenthesizedExpression")
{this.checkPatternExport(exports,pat.expression)}};pp$1.checkVariableExport=function(exports,decls){var this$1=this;if(!exports){return}
for(var i=0,list=decls;i<list.length;i+=1)
{var decl=list[i];this$1.checkPatternExport(exports,decl.id)}};pp$1.shouldParseExportStatement=function(){return this.type.keyword==="var"||this.type.keyword==="const"||this.type.keyword==="class"||this.type.keyword==="function"||this.isLet()||this.isAsyncFunction()};pp$1.parseExportSpecifiers=function(exports){var this$1=this;var nodes=[],first=!0;this.expect(types.braceL);while(!this.eat(types.braceR)){if(!first){this$1.expect(types.comma);if(this$1.afterTrailingComma(types.braceR)){break}}else{first=!1}
var node=this$1.startNode();node.local=this$1.parseIdent(!0);node.exported=this$1.eatContextual("as")?this$1.parseIdent(!0):node.local;this$1.checkExport(exports,node.exported.name,node.exported.start);nodes.push(this$1.finishNode(node,"ExportSpecifier"))}
return nodes};pp$1.parseImport=function(node){this.next();if(this.type===types.string){node.specifiers=empty;node.source=this.parseExprAtom()}else{node.specifiers=this.parseImportSpecifiers();this.expectContextual("from");node.source=this.type===types.string?this.parseExprAtom():this.unexpected()}
this.semicolon();return this.finishNode(node,"ImportDeclaration")};pp$1.parseImportSpecifiers=function(){var this$1=this;var nodes=[],first=!0;if(this.type===types.name){var node=this.startNode();node.local=this.parseIdent();this.checkLVal(node.local,"let");nodes.push(this.finishNode(node,"ImportDefaultSpecifier"));if(!this.eat(types.comma)){return nodes}}
if(this.type===types.star){var node$1=this.startNode();this.next();this.expectContextual("as");node$1.local=this.parseIdent();this.checkLVal(node$1.local,"let");nodes.push(this.finishNode(node$1,"ImportNamespaceSpecifier"));return nodes}
this.expect(types.braceL);while(!this.eat(types.braceR)){if(!first){this$1.expect(types.comma);if(this$1.afterTrailingComma(types.braceR)){break}}else{first=!1}
var node$2=this$1.startNode();node$2.imported=this$1.parseIdent(!0);if(this$1.eatContextual("as")){node$2.local=this$1.parseIdent()}else{this$1.checkUnreserved(node$2.imported);node$2.local=node$2.imported}
this$1.checkLVal(node$2.local,"let");nodes.push(this$1.finishNode(node$2,"ImportSpecifier"))}
return nodes};pp$1.adaptDirectivePrologue=function(statements){for(var i=0;i<statements.length&&this.isDirectiveCandidate(statements[i]);++i){statements[i].directive=statements[i].expression.raw.slice(1,-1)}};pp$1.isDirectiveCandidate=function(statement){return(statement.type==="ExpressionStatement"&&statement.expression.type==="Literal"&&typeof statement.expression.value==="string"&&(this.input[statement.start]==="\""||this.input[statement.start]==="'"))};var pp$2=Parser.prototype;pp$2.toAssignable=function(node,isBinding,refDestructuringErrors){var this$1=this;if(this.options.ecmaVersion>=6&&node){switch(node.type){case "Identifier":if(this.inAsync&&node.name==="await")
{this.raise(node.start,"Can not use 'await' as identifier inside an async function")}
break
case "ObjectPattern":case "ArrayPattern":case "RestElement":break
case "ObjectExpression":node.type="ObjectPattern";if(refDestructuringErrors){this.checkPatternErrors(refDestructuringErrors,!0)}
for(var i=0,list=node.properties;i<list.length;i+=1){var prop=list[i];this$1.toAssignable(prop,isBinding);if(prop.type==="RestElement"&&(prop.argument.type==="ArrayPattern"||prop.argument.type==="ObjectPattern")){this$1.raise(prop.argument.start,"Unexpected token")}}
break
case "Property":if(node.kind!=="init"){this.raise(node.key.start,"Object pattern can't contain getter or setter")}
this.toAssignable(node.value,isBinding);break
case "ArrayExpression":node.type="ArrayPattern";if(refDestructuringErrors){this.checkPatternErrors(refDestructuringErrors,!0)}
this.toAssignableList(node.elements,isBinding);break
case "SpreadElement":node.type="RestElement";this.toAssignable(node.argument,isBinding);if(node.argument.type==="AssignmentPattern")
{this.raise(node.argument.start,"Rest elements cannot have a default value")}
break
case "AssignmentExpression":if(node.operator!=="="){this.raise(node.left.end,"Only '=' operator can be used for specifying default value.")}
node.type="AssignmentPattern";delete node.operator;this.toAssignable(node.left,isBinding);case "AssignmentPattern":break
case "ParenthesizedExpression":this.toAssignable(node.expression,isBinding);break
case "MemberExpression":if(!isBinding){break}
default:this.raise(node.start,"Assigning to rvalue")}}else if(refDestructuringErrors){this.checkPatternErrors(refDestructuringErrors,!0)}
return node};pp$2.toAssignableList=function(exprList,isBinding){var this$1=this;var end=exprList.length;for(var i=0;i<end;i++){var elt=exprList[i];if(elt){this$1.toAssignable(elt,isBinding)}}
if(end){var last=exprList[end-1];if(this.options.ecmaVersion===6&&isBinding&&last&&last.type==="RestElement"&&last.argument.type!=="Identifier")
{this.unexpected(last.argument.start)}}
return exprList};pp$2.parseSpread=function(refDestructuringErrors){var node=this.startNode();this.next();node.argument=this.parseMaybeAssign(!1,refDestructuringErrors);return this.finishNode(node,"SpreadElement")};pp$2.parseRestBinding=function(){var node=this.startNode();this.next();if(this.options.ecmaVersion===6&&this.type!==types.name)
{this.unexpected()}
node.argument=this.parseBindingAtom();return this.finishNode(node,"RestElement")};pp$2.parseBindingAtom=function(){if(this.options.ecmaVersion>=6){switch(this.type){case types.bracketL:var node=this.startNode();this.next();node.elements=this.parseBindingList(types.bracketR,!0,!0);return this.finishNode(node,"ArrayPattern")
case types.braceL:return this.parseObj(!0)}}
return this.parseIdent()};pp$2.parseBindingList=function(close,allowEmpty,allowTrailingComma){var this$1=this;var elts=[],first=!0;while(!this.eat(close)){if(first){first=!1}
else{this$1.expect(types.comma)}
if(allowEmpty&&this$1.type===types.comma){elts.push(null)}else if(allowTrailingComma&&this$1.afterTrailingComma(close)){break}else if(this$1.type===types.ellipsis){var rest=this$1.parseRestBinding();this$1.parseBindingListItem(rest);elts.push(rest);if(this$1.type===types.comma){this$1.raise(this$1.start,"Comma is not permitted after the rest element")}
this$1.expect(close);break}else{var elem=this$1.parseMaybeDefault(this$1.start,this$1.startLoc);this$1.parseBindingListItem(elem);elts.push(elem)}}
return elts};pp$2.parseBindingListItem=function(param){return param};pp$2.parseMaybeDefault=function(startPos,startLoc,left){left=left||this.parseBindingAtom();if(this.options.ecmaVersion<6||!this.eat(types.eq)){return left}
var node=this.startNodeAt(startPos,startLoc);node.left=left;node.right=this.parseMaybeAssign();return this.finishNode(node,"AssignmentPattern")};pp$2.checkLVal=function(expr,bindingType,checkClashes){var this$1=this;switch(expr.type){case "Identifier":if(this.strict&&this.reservedWordsStrictBind.test(expr.name))
{this.raiseRecoverable(expr.start,(bindingType?"Binding ":"Assigning to ")+expr.name+" in strict mode")}
if(checkClashes){if(has(checkClashes,expr.name))
{this.raiseRecoverable(expr.start,"Argument name clash")}
checkClashes[expr.name]=!0}
if(bindingType&&bindingType!=="none"){if(bindingType==="var"&&!this.canDeclareVarName(expr.name)||bindingType!=="var"&&!this.canDeclareLexicalName(expr.name)){this.raiseRecoverable(expr.start,("Identifier '"+(expr.name)+"' has already been declared"))}
if(bindingType==="var"){this.declareVarName(expr.name)}else{this.declareLexicalName(expr.name)}}
break
case "MemberExpression":if(bindingType){this.raiseRecoverable(expr.start,"Binding member expression")}
break
case "ObjectPattern":for(var i=0,list=expr.properties;i<list.length;i+=1)
{var prop=list[i];this$1.checkLVal(prop,bindingType,checkClashes)}
break
case "Property":this.checkLVal(expr.value,bindingType,checkClashes);break
case "ArrayPattern":for(var i$1=0,list$1=expr.elements;i$1<list$1.length;i$1+=1){var elem=list$1[i$1];if(elem){this$1.checkLVal(elem,bindingType,checkClashes)}}
break
case "AssignmentPattern":this.checkLVal(expr.left,bindingType,checkClashes);break
case "RestElement":this.checkLVal(expr.argument,bindingType,checkClashes);break
case "ParenthesizedExpression":this.checkLVal(expr.expression,bindingType,checkClashes);break
default:this.raise(expr.start,(bindingType?"Binding":"Assigning to")+" rvalue")}};var pp$3=Parser.prototype;pp$3.checkPropClash=function(prop,propHash,refDestructuringErrors){if(this.options.ecmaVersion>=9&&prop.type==="SpreadElement")
{return}
if(this.options.ecmaVersion>=6&&(prop.computed||prop.method||prop.shorthand))
{return}
var key=prop.key;var name;switch(key.type){case "Identifier":name=key.name;break
case "Literal":name=String(key.value);break
default:return}
var kind=prop.kind;if(this.options.ecmaVersion>=6){if(name==="__proto__"&&kind==="init"){if(propHash.proto){if(refDestructuringErrors&&refDestructuringErrors.doubleProto<0){refDestructuringErrors.doubleProto=key.start}
else{this.raiseRecoverable(key.start,"Redefinition of __proto__ property")}}
propHash.proto=!0}
return}
name="$"+name;var other=propHash[name];if(other){var redefinition;if(kind==="init"){redefinition=this.strict&&other.init||other.get||other.set}else{redefinition=other.init||other[kind]}
if(redefinition)
{this.raiseRecoverable(key.start,"Redefinition of property")}}else{other=propHash[name]={init:!1,get:!1,set:!1}}
other[kind]=!0};pp$3.parseExpression=function(noIn,refDestructuringErrors){var this$1=this;var startPos=this.start,startLoc=this.startLoc;var expr=this.parseMaybeAssign(noIn,refDestructuringErrors);if(this.type===types.comma){var node=this.startNodeAt(startPos,startLoc);node.expressions=[expr];while(this.eat(types.comma)){node.expressions.push(this$1.parseMaybeAssign(noIn,refDestructuringErrors))}
return this.finishNode(node,"SequenceExpression")}
return expr};pp$3.parseMaybeAssign=function(noIn,refDestructuringErrors,afterLeftParse){if(this.inGenerator&&this.isContextual("yield")){return this.parseYield()}
var ownDestructuringErrors=!1,oldParenAssign=-1,oldTrailingComma=-1;if(refDestructuringErrors){oldParenAssign=refDestructuringErrors.parenthesizedAssign;oldTrailingComma=refDestructuringErrors.trailingComma;refDestructuringErrors.parenthesizedAssign=refDestructuringErrors.trailingComma=-1}else{refDestructuringErrors=new DestructuringErrors;ownDestructuringErrors=!0}
var startPos=this.start,startLoc=this.startLoc;if(this.type==types.parenL||this.type==types.name)
{this.potentialArrowAt=this.start}
var left=this.parseMaybeConditional(noIn,refDestructuringErrors);if(afterLeftParse){left=afterLeftParse.call(this,left,startPos,startLoc)}
if(this.type.isAssign){var node=this.startNodeAt(startPos,startLoc);node.operator=this.value;node.left=this.type===types.eq?this.toAssignable(left,!1,refDestructuringErrors):left;if(!ownDestructuringErrors){DestructuringErrors.call(refDestructuringErrors)}
refDestructuringErrors.shorthandAssign=-1;this.checkLVal(left);this.next();node.right=this.parseMaybeAssign(noIn);return this.finishNode(node,"AssignmentExpression")}else{if(ownDestructuringErrors){this.checkExpressionErrors(refDestructuringErrors,!0)}}
if(oldParenAssign>-1){refDestructuringErrors.parenthesizedAssign=oldParenAssign}
if(oldTrailingComma>-1){refDestructuringErrors.trailingComma=oldTrailingComma}
return left};pp$3.parseMaybeConditional=function(noIn,refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprOps(noIn,refDestructuringErrors);if(this.checkExpressionErrors(refDestructuringErrors)){return expr}
if(this.eat(types.question)){var node=this.startNodeAt(startPos,startLoc);node.test=expr;node.consequent=this.parseMaybeAssign();this.expect(types.colon);node.alternate=this.parseMaybeAssign(noIn);return this.finishNode(node,"ConditionalExpression")}
return expr};pp$3.parseExprOps=function(noIn,refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseMaybeUnary(refDestructuringErrors,!1);if(this.checkExpressionErrors(refDestructuringErrors)){return expr}
return expr.start==startPos&&expr.type==="ArrowFunctionExpression"?expr:this.parseExprOp(expr,startPos,startLoc,-1,noIn)};pp$3.parseExprOp=function(left,leftStartPos,leftStartLoc,minPrec,noIn){var prec=this.type.binop;if(prec!=null&&(!noIn||this.type!==types._in)){if(prec>minPrec){var logical=this.type===types.logicalOR||this.type===types.logicalAND;var op=this.value;this.next();var startPos=this.start,startLoc=this.startLoc;var right=this.parseExprOp(this.parseMaybeUnary(null,!1),startPos,startLoc,prec,noIn);var node=this.buildBinary(leftStartPos,leftStartLoc,left,right,op,logical);return this.parseExprOp(node,leftStartPos,leftStartLoc,minPrec,noIn)}}
return left};pp$3.buildBinary=function(startPos,startLoc,left,right,op,logical){var node=this.startNodeAt(startPos,startLoc);node.left=left;node.operator=op;node.right=right;return this.finishNode(node,logical?"LogicalExpression":"BinaryExpression")};pp$3.parseMaybeUnary=function(refDestructuringErrors,sawUnary){var this$1=this;var startPos=this.start,startLoc=this.startLoc,expr;if(this.inAsync&&this.isContextual("await")){expr=this.parseAwait();sawUnary=!0}else if(this.type.prefix){var node=this.startNode(),update=this.type===types.incDec;node.operator=this.value;node.prefix=!0;this.next();node.argument=this.parseMaybeUnary(null,!0);this.checkExpressionErrors(refDestructuringErrors,!0);if(update){this.checkLVal(node.argument)}
else if(this.strict&&node.operator==="delete"&&node.argument.type==="Identifier")
{this.raiseRecoverable(node.start,"Deleting local variable in strict mode")}
else{sawUnary=!0}
expr=this.finishNode(node,update?"UpdateExpression":"UnaryExpression")}else{expr=this.parseExprSubscripts(refDestructuringErrors);if(this.checkExpressionErrors(refDestructuringErrors)){return expr}
while(this.type.postfix&&!this.canInsertSemicolon()){var node$1=this$1.startNodeAt(startPos,startLoc);node$1.operator=this$1.value;node$1.prefix=!1;node$1.argument=expr;this$1.checkLVal(expr);this$1.next();expr=this$1.finishNode(node$1,"UpdateExpression")}}
if(!sawUnary&&this.eat(types.starstar))
{return this.buildBinary(startPos,startLoc,expr,this.parseMaybeUnary(null,!1),"**",!1)}
else{return expr}};pp$3.parseExprSubscripts=function(refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprAtom(refDestructuringErrors);var skipArrowSubscripts=expr.type==="ArrowFunctionExpression"&&this.input.slice(this.lastTokStart,this.lastTokEnd)!==")";if(this.checkExpressionErrors(refDestructuringErrors)||skipArrowSubscripts){return expr}
var result=this.parseSubscripts(expr,startPos,startLoc);if(refDestructuringErrors&&result.type==="MemberExpression"){if(refDestructuringErrors.parenthesizedAssign>=result.start){refDestructuringErrors.parenthesizedAssign=-1}
if(refDestructuringErrors.parenthesizedBind>=result.start){refDestructuringErrors.parenthesizedBind=-1}}
return result};pp$3.parseSubscripts=function(base,startPos,startLoc,noCalls){var this$1=this;var maybeAsyncArrow=this.options.ecmaVersion>=8&&base.type==="Identifier"&&base.name==="async"&&this.lastTokEnd==base.end&&!this.canInsertSemicolon()&&this.input.slice(base.start,base.end)==="async";for(var computed=(void 0);;){if((computed=this$1.eat(types.bracketL))||this$1.eat(types.dot)){var node=this$1.startNodeAt(startPos,startLoc);node.object=base;node.property=computed?this$1.parseExpression():this$1.parseIdent(!0);node.computed=!!computed;if(computed){this$1.expect(types.bracketR)}
base=this$1.finishNode(node,"MemberExpression")}else if(!noCalls&&this$1.eat(types.parenL)){var refDestructuringErrors=new DestructuringErrors,oldYieldPos=this$1.yieldPos,oldAwaitPos=this$1.awaitPos;this$1.yieldPos=0;this$1.awaitPos=0;var exprList=this$1.parseExprList(types.parenR,this$1.options.ecmaVersion>=8,!1,refDestructuringErrors);if(maybeAsyncArrow&&!this$1.canInsertSemicolon()&&this$1.eat(types.arrow)){this$1.checkPatternErrors(refDestructuringErrors,!1);this$1.checkYieldAwaitInDefaultParams();this$1.yieldPos=oldYieldPos;this$1.awaitPos=oldAwaitPos;return this$1.parseArrowExpression(this$1.startNodeAt(startPos,startLoc),exprList,!0)}
this$1.checkExpressionErrors(refDestructuringErrors,!0);this$1.yieldPos=oldYieldPos||this$1.yieldPos;this$1.awaitPos=oldAwaitPos||this$1.awaitPos;var node$1=this$1.startNodeAt(startPos,startLoc);node$1.callee=base;node$1.arguments=exprList;base=this$1.finishNode(node$1,"CallExpression")}else if(this$1.type===types.backQuote){var node$2=this$1.startNodeAt(startPos,startLoc);node$2.tag=base;node$2.quasi=this$1.parseTemplate({isTagged:!0});base=this$1.finishNode(node$2,"TaggedTemplateExpression")}else{return base}}};pp$3.parseExprAtom=function(refDestructuringErrors){var node,canBeArrow=this.potentialArrowAt==this.start;switch(this.type){case types._super:if(!this.inFunction)
{this.raise(this.start,"'super' outside of function or class")}
node=this.startNode();this.next();if(this.type!==types.dot&&this.type!==types.bracketL&&this.type!==types.parenL)
{this.unexpected()}
return this.finishNode(node,"Super")
case types._this:node=this.startNode();this.next();return this.finishNode(node,"ThisExpression")
case types.name:var startPos=this.start,startLoc=this.startLoc,containsEsc=this.containsEsc;var id=this.parseIdent(this.type!==types.name);if(this.options.ecmaVersion>=8&&!containsEsc&&id.name==="async"&&!this.canInsertSemicolon()&&this.eat(types._function))
{return this.parseFunction(this.startNodeAt(startPos,startLoc),!1,!1,!0)}
if(canBeArrow&&!this.canInsertSemicolon()){if(this.eat(types.arrow))
{return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),[id],!1)}
if(this.options.ecmaVersion>=8&&id.name==="async"&&this.type===types.name&&!containsEsc){id=this.parseIdent();if(this.canInsertSemicolon()||!this.eat(types.arrow))
{this.unexpected()}
return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),[id],!0)}}
return id
case types.regexp:var value=this.value;node=this.parseLiteral(value.value);node.regex={pattern:value.pattern,flags:value.flags};return node
case types.num:case types.string:return this.parseLiteral(this.value)
case types._null:case types._true:case types._false:node=this.startNode();node.value=this.type===types._null?null:this.type===types._true;node.raw=this.type.keyword;this.next();return this.finishNode(node,"Literal")
case types.parenL:var start=this.start,expr=this.parseParenAndDistinguishExpression(canBeArrow);if(refDestructuringErrors){if(refDestructuringErrors.parenthesizedAssign<0&&!this.isSimpleAssignTarget(expr))
{refDestructuringErrors.parenthesizedAssign=start}
if(refDestructuringErrors.parenthesizedBind<0)
{refDestructuringErrors.parenthesizedBind=start}}
return expr
case types.bracketL:node=this.startNode();this.next();node.elements=this.parseExprList(types.bracketR,!0,!0,refDestructuringErrors);return this.finishNode(node,"ArrayExpression")
case types.braceL:return this.parseObj(!1,refDestructuringErrors)
case types._function:node=this.startNode();this.next();return this.parseFunction(node,!1)
case types._class:return this.parseClass(this.startNode(),!1)
case types._new:return this.parseNew()
case types.backQuote:return this.parseTemplate()
default:this.unexpected()}};pp$3.parseLiteral=function(value){var node=this.startNode();node.value=value;node.raw=this.input.slice(this.start,this.end);this.next();return this.finishNode(node,"Literal")};pp$3.parseParenExpression=function(){this.expect(types.parenL);var val=this.parseExpression();this.expect(types.parenR);return val};pp$3.parseParenAndDistinguishExpression=function(canBeArrow){var this$1=this;var startPos=this.start,startLoc=this.startLoc,val,allowTrailingComma=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var innerStartPos=this.start,innerStartLoc=this.startLoc;var exprList=[],first=!0,lastIsComma=!1;var refDestructuringErrors=new DestructuringErrors,oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,spreadStart;this.yieldPos=0;this.awaitPos=0;while(this.type!==types.parenR){first?first=!1:this$1.expect(types.comma);if(allowTrailingComma&&this$1.afterTrailingComma(types.parenR,!0)){lastIsComma=!0;break}else if(this$1.type===types.ellipsis){spreadStart=this$1.start;exprList.push(this$1.parseParenItem(this$1.parseRestBinding()));if(this$1.type===types.comma){this$1.raise(this$1.start,"Comma is not permitted after the rest element")}
break}else{exprList.push(this$1.parseMaybeAssign(!1,refDestructuringErrors,this$1.parseParenItem))}}
var innerEndPos=this.start,innerEndLoc=this.startLoc;this.expect(types.parenR);if(canBeArrow&&!this.canInsertSemicolon()&&this.eat(types.arrow)){this.checkPatternErrors(refDestructuringErrors,!1);this.checkYieldAwaitInDefaultParams();this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;return this.parseParenArrowList(startPos,startLoc,exprList)}
if(!exprList.length||lastIsComma){this.unexpected(this.lastTokStart)}
if(spreadStart){this.unexpected(spreadStart)}
this.checkExpressionErrors(refDestructuringErrors,!0);this.yieldPos=oldYieldPos||this.yieldPos;this.awaitPos=oldAwaitPos||this.awaitPos;if(exprList.length>1){val=this.startNodeAt(innerStartPos,innerStartLoc);val.expressions=exprList;this.finishNodeAt(val,"SequenceExpression",innerEndPos,innerEndLoc)}else{val=exprList[0]}}else{val=this.parseParenExpression()}
if(this.options.preserveParens){var par=this.startNodeAt(startPos,startLoc);par.expression=val;return this.finishNode(par,"ParenthesizedExpression")}else{return val}};pp$3.parseParenItem=function(item){return item};pp$3.parseParenArrowList=function(startPos,startLoc,exprList){return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),exprList)};var empty$1=[];pp$3.parseNew=function(){var node=this.startNode();var meta=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(types.dot)){node.meta=meta;var containsEsc=this.containsEsc;node.property=this.parseIdent(!0);if(node.property.name!=="target"||containsEsc)
{this.raiseRecoverable(node.property.start,"The only valid meta property for new is new.target")}
if(!this.inFunction)
{this.raiseRecoverable(node.start,"new.target can only be used in functions")}
return this.finishNode(node,"MetaProperty")}
var startPos=this.start,startLoc=this.startLoc;node.callee=this.parseSubscripts(this.parseExprAtom(),startPos,startLoc,!0);if(this.eat(types.parenL)){node.arguments=this.parseExprList(types.parenR,this.options.ecmaVersion>=8,!1)}
else{node.arguments=empty$1}
return this.finishNode(node,"NewExpression")};pp$3.parseTemplateElement=function(ref){var isTagged=ref.isTagged;var elem=this.startNode();if(this.type===types.invalidTemplate){if(!isTagged){this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal")}
elem.value={raw:this.value,cooked:null}}else{elem.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value}}
this.next();elem.tail=this.type===types.backQuote;return this.finishNode(elem,"TemplateElement")};pp$3.parseTemplate=function(ref){var this$1=this;if(ref===void 0)ref={};var isTagged=ref.isTagged;if(isTagged===void 0)isTagged=!1;var node=this.startNode();this.next();node.expressions=[];var curElt=this.parseTemplateElement({isTagged:isTagged});node.quasis=[curElt];while(!curElt.tail){this$1.expect(types.dollarBraceL);node.expressions.push(this$1.parseExpression());this$1.expect(types.braceR);node.quasis.push(curElt=this$1.parseTemplateElement({isTagged:isTagged}))}
this.next();return this.finishNode(node,"TemplateLiteral")};pp$3.isAsyncProp=function(prop){return!prop.computed&&prop.key.type==="Identifier"&&prop.key.name==="async"&&(this.type===types.name||this.type===types.num||this.type===types.string||this.type===types.bracketL||this.type.keyword||(this.options.ecmaVersion>=9&&this.type===types.star))&&!lineBreak.test(this.input.slice(this.lastTokEnd,this.start))};pp$3.parseObj=function(isPattern,refDestructuringErrors){var this$1=this;var node=this.startNode(),first=!0,propHash={};node.properties=[];this.next();while(!this.eat(types.braceR)){if(!first){this$1.expect(types.comma);if(this$1.afterTrailingComma(types.braceR)){break}}else{first=!1}
var prop=this$1.parseProperty(isPattern,refDestructuringErrors);if(!isPattern){this$1.checkPropClash(prop,propHash,refDestructuringErrors)}
node.properties.push(prop)}
return this.finishNode(node,isPattern?"ObjectPattern":"ObjectExpression")};pp$3.parseProperty=function(isPattern,refDestructuringErrors){var prop=this.startNode(),isGenerator,isAsync,startPos,startLoc;if(this.options.ecmaVersion>=9&&this.eat(types.ellipsis)){if(isPattern){prop.argument=this.parseIdent(!1);if(this.type===types.comma){this.raise(this.start,"Comma is not permitted after the rest element")}
return this.finishNode(prop,"RestElement")}
if(this.type===types.parenL&&refDestructuringErrors){if(refDestructuringErrors.parenthesizedAssign<0){refDestructuringErrors.parenthesizedAssign=this.start}
if(refDestructuringErrors.parenthesizedBind<0){refDestructuringErrors.parenthesizedBind=this.start}}
prop.argument=this.parseMaybeAssign(!1,refDestructuringErrors);if(this.type===types.comma&&refDestructuringErrors&&refDestructuringErrors.trailingComma<0){refDestructuringErrors.trailingComma=this.start}
return this.finishNode(prop,"SpreadElement")}
if(this.options.ecmaVersion>=6){prop.method=!1;prop.shorthand=!1;if(isPattern||refDestructuringErrors){startPos=this.start;startLoc=this.startLoc}
if(!isPattern)
{isGenerator=this.eat(types.star)}}
var containsEsc=this.containsEsc;this.parsePropertyName(prop);if(!isPattern&&!containsEsc&&this.options.ecmaVersion>=8&&!isGenerator&&this.isAsyncProp(prop)){isAsync=!0;isGenerator=this.options.ecmaVersion>=9&&this.eat(types.star);this.parsePropertyName(prop,refDestructuringErrors)}else{isAsync=!1}
this.parsePropertyValue(prop,isPattern,isGenerator,isAsync,startPos,startLoc,refDestructuringErrors,containsEsc);return this.finishNode(prop,"Property")};pp$3.parsePropertyValue=function(prop,isPattern,isGenerator,isAsync,startPos,startLoc,refDestructuringErrors,containsEsc){if((isGenerator||isAsync)&&this.type===types.colon)
{this.unexpected()}
if(this.eat(types.colon)){prop.value=isPattern?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,refDestructuringErrors);prop.kind="init"}else if(this.options.ecmaVersion>=6&&this.type===types.parenL){if(isPattern){this.unexpected()}
prop.kind="init";prop.method=!0;prop.value=this.parseMethod(isGenerator,isAsync)}else if(!isPattern&&!containsEsc&&this.options.ecmaVersion>=5&&!prop.computed&&prop.key.type==="Identifier"&&(prop.key.name==="get"||prop.key.name==="set")&&(this.type!=types.comma&&this.type!=types.braceR)){if(isGenerator||isAsync){this.unexpected()}
prop.kind=prop.key.name;this.parsePropertyName(prop);prop.value=this.parseMethod(!1);var paramCount=prop.kind==="get"?0:1;if(prop.value.params.length!==paramCount){var start=prop.value.start;if(prop.kind==="get")
{this.raiseRecoverable(start,"getter should have no params")}
else{this.raiseRecoverable(start,"setter should have exactly one param")}}else{if(prop.kind==="set"&&prop.value.params[0].type==="RestElement")
{this.raiseRecoverable(prop.value.params[0].start,"Setter cannot use rest params")}}}else if(this.options.ecmaVersion>=6&&!prop.computed&&prop.key.type==="Identifier"){this.checkUnreserved(prop.key);prop.kind="init";if(isPattern){prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key)}else if(this.type===types.eq&&refDestructuringErrors){if(refDestructuringErrors.shorthandAssign<0)
{refDestructuringErrors.shorthandAssign=this.start}
prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key)}else{prop.value=prop.key}
prop.shorthand=!0}else{this.unexpected()}};pp$3.parsePropertyName=function(prop){if(this.options.ecmaVersion>=6){if(this.eat(types.bracketL)){prop.computed=!0;prop.key=this.parseMaybeAssign();this.expect(types.bracketR);return prop.key}else{prop.computed=!1}}
return prop.key=this.type===types.num||this.type===types.string?this.parseExprAtom():this.parseIdent(!0)};pp$3.initFunction=function(node){node.id=null;if(this.options.ecmaVersion>=6){node.generator=!1;node.expression=!1}
if(this.options.ecmaVersion>=8)
{node.async=!1}};pp$3.parseMethod=function(isGenerator,isAsync){var node=this.startNode(),oldInGen=this.inGenerator,oldInAsync=this.inAsync,oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,oldInFunc=this.inFunction;this.initFunction(node);if(this.options.ecmaVersion>=6)
{node.generator=isGenerator}
if(this.options.ecmaVersion>=8)
{node.async=!!isAsync}
this.inGenerator=node.generator;this.inAsync=node.async;this.yieldPos=0;this.awaitPos=0;this.inFunction=!0;this.enterFunctionScope();this.expect(types.parenL);node.params=this.parseBindingList(types.parenR,!1,this.options.ecmaVersion>=8);this.checkYieldAwaitInDefaultParams();this.parseFunctionBody(node,!1);this.inGenerator=oldInGen;this.inAsync=oldInAsync;this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;this.inFunction=oldInFunc;return this.finishNode(node,"FunctionExpression")};pp$3.parseArrowExpression=function(node,params,isAsync){var oldInGen=this.inGenerator,oldInAsync=this.inAsync,oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,oldInFunc=this.inFunction;this.enterFunctionScope();this.initFunction(node);if(this.options.ecmaVersion>=8)
{node.async=!!isAsync}
this.inGenerator=!1;this.inAsync=node.async;this.yieldPos=0;this.awaitPos=0;this.inFunction=!0;node.params=this.toAssignableList(params,!0);this.parseFunctionBody(node,!0);this.inGenerator=oldInGen;this.inAsync=oldInAsync;this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;this.inFunction=oldInFunc;return this.finishNode(node,"ArrowFunctionExpression")};pp$3.parseFunctionBody=function(node,isArrowFunction){var isExpression=isArrowFunction&&this.type!==types.braceL;var oldStrict=this.strict,useStrict=!1;if(isExpression){node.body=this.parseMaybeAssign();node.expression=!0;this.checkParams(node,!1)}else{var nonSimple=this.options.ecmaVersion>=7&&!this.isSimpleParamList(node.params);if(!oldStrict||nonSimple){useStrict=this.strictDirective(this.end);if(useStrict&&nonSimple)
{this.raiseRecoverable(node.start,"Illegal 'use strict' directive in function with non-simple parameter list")}}
var oldLabels=this.labels;this.labels=[];if(useStrict){this.strict=!0}
this.checkParams(node,!oldStrict&&!useStrict&&!isArrowFunction&&this.isSimpleParamList(node.params));node.body=this.parseBlock(!1);node.expression=!1;this.adaptDirectivePrologue(node.body.body);this.labels=oldLabels}
this.exitFunctionScope();if(this.strict&&node.id){this.checkLVal(node.id,"none")}
this.strict=oldStrict};pp$3.isSimpleParamList=function(params){for(var i=0,list=params;i<list.length;i+=1)
{var param=list[i];if(param.type!=="Identifier"){return!1}}
return!0};pp$3.checkParams=function(node,allowDuplicates){var this$1=this;var nameHash={};for(var i=0,list=node.params;i<list.length;i+=1)
{var param=list[i];this$1.checkLVal(param,"var",allowDuplicates?null:nameHash)}};pp$3.parseExprList=function(close,allowTrailingComma,allowEmpty,refDestructuringErrors){var this$1=this;var elts=[],first=!0;while(!this.eat(close)){if(!first){this$1.expect(types.comma);if(allowTrailingComma&&this$1.afterTrailingComma(close)){break}}else{first=!1}
var elt=(void 0);if(allowEmpty&&this$1.type===types.comma)
{elt=null}
else if(this$1.type===types.ellipsis){elt=this$1.parseSpread(refDestructuringErrors);if(refDestructuringErrors&&this$1.type===types.comma&&refDestructuringErrors.trailingComma<0)
{refDestructuringErrors.trailingComma=this$1.start}}else{elt=this$1.parseMaybeAssign(!1,refDestructuringErrors)}
elts.push(elt)}
return elts};pp$3.checkUnreserved=function(ref){var start=ref.start;var end=ref.end;var name=ref.name;if(this.inGenerator&&name==="yield")
{this.raiseRecoverable(start,"Can not use 'yield' as identifier inside a generator")}
if(this.inAsync&&name==="await")
{this.raiseRecoverable(start,"Can not use 'await' as identifier inside an async function")}
if(this.isKeyword(name))
{this.raise(start,("Unexpected keyword '"+name+"'"))}
if(this.options.ecmaVersion<6&&this.input.slice(start,end).indexOf("\\")!=-1){return}
var re=this.strict?this.reservedWordsStrict:this.reservedWords;if(re.test(name)){if(!this.inAsync&&name==="await")
{this.raiseRecoverable(start,"Can not use keyword 'await' outside an async function")}
this.raiseRecoverable(start,("The keyword '"+name+"' is reserved"))}};pp$3.parseIdent=function(liberal,isBinding){var node=this.startNode();if(liberal&&this.options.allowReserved=="never"){liberal=!1}
if(this.type===types.name){node.name=this.value}else if(this.type.keyword){node.name=this.type.keyword;if((node.name==="class"||node.name==="function")&&(this.lastTokEnd!==this.lastTokStart+1||this.input.charCodeAt(this.lastTokStart)!==46)){this.context.pop()}}else{this.unexpected()}
this.next();this.finishNode(node,"Identifier");if(!liberal){this.checkUnreserved(node)}
return node};pp$3.parseYield=function(){if(!this.yieldPos){this.yieldPos=this.start}
var node=this.startNode();this.next();if(this.type==types.semi||this.canInsertSemicolon()||(this.type!=types.star&&!this.type.startsExpr)){node.delegate=!1;node.argument=null}else{node.delegate=this.eat(types.star);node.argument=this.parseMaybeAssign()}
return this.finishNode(node,"YieldExpression")};pp$3.parseAwait=function(){if(!this.awaitPos){this.awaitPos=this.start}
var node=this.startNode();this.next();node.argument=this.parseMaybeUnary(null,!0);return this.finishNode(node,"AwaitExpression")};var pp$4=Parser.prototype;pp$4.raise=function(pos,message){var loc=getLineInfo(this.input,pos);message+=" ("+loc.line+":"+loc.column+")";var err=new SyntaxError(message);err.pos=pos;err.loc=loc;err.raisedAt=this.pos;throw err};pp$4.raiseRecoverable=pp$4.raise;pp$4.curPosition=function(){if(this.options.locations){return new Position(this.curLine,this.pos-this.lineStart)}};var pp$5=Parser.prototype;var assign=Object.assign||function(target){var sources=[],len=arguments.length-1;while(len-->0)sources[len]=arguments[len+1];for(var i=0,list=sources;i<list.length;i+=1){var source=list[i];for(var key in source){if(has(source,key)){target[key]=source[key]}}}
return target};pp$5.enterFunctionScope=function(){this.scopeStack.push({var:{},lexical:{},childVar:{},parentLexical:{}})};pp$5.exitFunctionScope=function(){this.scopeStack.pop()};pp$5.enterLexicalScope=function(){var parentScope=this.scopeStack[this.scopeStack.length-1];var childScope={var:{},lexical:{},childVar:{},parentLexical:{}};this.scopeStack.push(childScope);assign(childScope.parentLexical,parentScope.lexical,parentScope.parentLexical)};pp$5.exitLexicalScope=function(){var childScope=this.scopeStack.pop();var parentScope=this.scopeStack[this.scopeStack.length-1];assign(parentScope.childVar,childScope.var,childScope.childVar)};pp$5.canDeclareVarName=function(name){var currentScope=this.scopeStack[this.scopeStack.length-1];return!has(currentScope.lexical,name)&&!has(currentScope.parentLexical,name)};pp$5.canDeclareLexicalName=function(name){var currentScope=this.scopeStack[this.scopeStack.length-1];return!has(currentScope.lexical,name)&&!has(currentScope.var,name)&&!has(currentScope.childVar,name)};pp$5.declareVarName=function(name){this.scopeStack[this.scopeStack.length-1].var[name]=!0};pp$5.declareLexicalName=function(name){this.scopeStack[this.scopeStack.length-1].lexical[name]=!0};var Node=function Node(parser,pos,loc){this.type="";this.start=pos;this.end=0;if(parser.options.locations)
{this.loc=new SourceLocation(parser,loc)}
if(parser.options.directSourceFile)
{this.sourceFile=parser.options.directSourceFile}
if(parser.options.ranges)
{this.range=[pos,0]}};var pp$6=Parser.prototype;pp$6.startNode=function(){return new Node(this,this.start,this.startLoc)};pp$6.startNodeAt=function(pos,loc){return new Node(this,pos,loc)};function finishNodeAt(node,type,pos,loc){node.type=type;node.end=pos;if(this.options.locations)
{node.loc.end=loc}
if(this.options.ranges)
{node.range[1]=pos}
return node}
pp$6.finishNode=function(node,type){return finishNodeAt.call(this,node,type,this.lastTokEnd,this.lastTokEndLoc)};pp$6.finishNodeAt=function(node,type,pos,loc){return finishNodeAt.call(this,node,type,pos,loc)};var TokContext=function TokContext(token,isExpr,preserveSpace,override,generator){this.token=token;this.isExpr=!!isExpr;this.preserveSpace=!!preserveSpace;this.override=override;this.generator=!!generator};var types$1={b_stat:new TokContext("{",!1),b_expr:new TokContext("{",!0),b_tmpl:new TokContext("${",!1),p_stat:new TokContext("(",!1),p_expr:new TokContext("(",!0),q_tmpl:new TokContext("`",!0,!0,function(p){return p.tryReadTemplateToken()}),f_stat:new TokContext("function",!1),f_expr:new TokContext("function",!0),f_expr_gen:new TokContext("function",!0,!1,null,!0),f_gen:new TokContext("function",!1,!1,null,!0)};var pp$7=Parser.prototype;pp$7.initialContext=function(){return[types$1.b_stat]};pp$7.braceIsBlock=function(prevType){var parent=this.curContext();if(parent===types$1.f_expr||parent===types$1.f_stat)
{return!0}
if(prevType===types.colon&&(parent===types$1.b_stat||parent===types$1.b_expr))
{return!parent.isExpr}
if(prevType===types._return||prevType==types.name&&this.exprAllowed)
{return lineBreak.test(this.input.slice(this.lastTokEnd,this.start))}
if(prevType===types._else||prevType===types.semi||prevType===types.eof||prevType===types.parenR||prevType==types.arrow)
{return!0}
if(prevType==types.braceL)
{return parent===types$1.b_stat}
if(prevType==types._var||prevType==types.name)
{return!1}
return!this.exprAllowed};pp$7.inGeneratorContext=function(){var this$1=this;for(var i=this.context.length-1;i>=1;i--){var context=this$1.context[i];if(context.token==="function")
{return context.generator}}
return!1};pp$7.updateContext=function(prevType){var update,type=this.type;if(type.keyword&&prevType==types.dot)
{this.exprAllowed=!1}
else if(update=type.updateContext)
{update.call(this,prevType)}
else{this.exprAllowed=type.beforeExpr}};types.parenR.updateContext=types.braceR.updateContext=function(){if(this.context.length==1){this.exprAllowed=!0;return}
var out=this.context.pop();if(out===types$1.b_stat&&this.curContext().token==="function"){out=this.context.pop()}
this.exprAllowed=!out.isExpr};types.braceL.updateContext=function(prevType){this.context.push(this.braceIsBlock(prevType)?types$1.b_stat:types$1.b_expr);this.exprAllowed=!0};types.dollarBraceL.updateContext=function(){this.context.push(types$1.b_tmpl);this.exprAllowed=!0};types.parenL.updateContext=function(prevType){var statementParens=prevType===types._if||prevType===types._for||prevType===types._with||prevType===types._while;this.context.push(statementParens?types$1.p_stat:types$1.p_expr);this.exprAllowed=!0};types.incDec.updateContext=function(){};types._function.updateContext=types._class.updateContext=function(prevType){if(prevType.beforeExpr&&prevType!==types.semi&&prevType!==types._else&&!((prevType===types.colon||prevType===types.braceL)&&this.curContext()===types$1.b_stat))
{this.context.push(types$1.f_expr)}
else{this.context.push(types$1.f_stat)}
this.exprAllowed=!1};types.backQuote.updateContext=function(){if(this.curContext()===types$1.q_tmpl)
{this.context.pop()}
else{this.context.push(types$1.q_tmpl)}
this.exprAllowed=!1};types.star.updateContext=function(prevType){if(prevType==types._function){var index=this.context.length-1;if(this.context[index]===types$1.f_expr)
{this.context[index]=types$1.f_expr_gen}
else{this.context[index]=types$1.f_gen}}
this.exprAllowed=!0};types.name.updateContext=function(prevType){var allowed=!1;if(this.options.ecmaVersion>=6){if(this.value=="of"&&!this.exprAllowed||this.value=="yield"&&this.inGeneratorContext())
{allowed=!0}}
this.exprAllowed=allowed};var data={"$LONE":["ASCII","ASCII_Hex_Digit","AHex","Alphabetic","Alpha","Any","Assigned","Bidi_Control","Bidi_C","Bidi_Mirrored","Bidi_M","Case_Ignorable","CI","Cased","Changes_When_Casefolded","CWCF","Changes_When_Casemapped","CWCM","Changes_When_Lowercased","CWL","Changes_When_NFKC_Casefolded","CWKCF","Changes_When_Titlecased","CWT","Changes_When_Uppercased","CWU","Dash","Default_Ignorable_Code_Point","DI","Deprecated","Dep","Diacritic","Dia","Emoji","Emoji_Component","Emoji_Modifier","Emoji_Modifier_Base","Emoji_Presentation","Extender","Ext","Grapheme_Base","Gr_Base","Grapheme_Extend","Gr_Ext","Hex_Digit","Hex","IDS_Binary_Operator","IDSB","IDS_Trinary_Operator","IDST","ID_Continue","IDC","ID_Start","IDS","Ideographic","Ideo","Join_Control","Join_C","Logical_Order_Exception","LOE","Lowercase","Lower","Math","Noncharacter_Code_Point","NChar","Pattern_Syntax","Pat_Syn","Pattern_White_Space","Pat_WS","Quotation_Mark","QMark","Radical","Regional_Indicator","RI","Sentence_Terminal","STerm","Soft_Dotted","SD","Terminal_Punctuation","Term","Unified_Ideograph","UIdeo","Uppercase","Upper","Variation_Selector","VS","White_Space","space","XID_Continue","XIDC","XID_Start","XIDS"],"General_Category":["Cased_Letter","LC","Close_Punctuation","Pe","Connector_Punctuation","Pc","Control","Cc","cntrl","Currency_Symbol","Sc","Dash_Punctuation","Pd","Decimal_Number","Nd","digit","Enclosing_Mark","Me","Final_Punctuation","Pf","Format","Cf","Initial_Punctuation","Pi","Letter","L","Letter_Number","Nl","Line_Separator","Zl","Lowercase_Letter","Ll","Mark","M","Combining_Mark","Math_Symbol","Sm","Modifier_Letter","Lm","Modifier_Symbol","Sk","Nonspacing_Mark","Mn","Number","N","Open_Punctuation","Ps","Other","C","Other_Letter","Lo","Other_Number","No","Other_Punctuation","Po","Other_Symbol","So","Paragraph_Separator","Zp","Private_Use","Co","Punctuation","P","punct","Separator","Z","Space_Separator","Zs","Spacing_Mark","Mc","Surrogate","Cs","Symbol","S","Titlecase_Letter","Lt","Unassigned","Cn","Uppercase_Letter","Lu"],"Script":["Adlam","Adlm","Ahom","Anatolian_Hieroglyphs","Hluw","Arabic","Arab","Armenian","Armn","Avestan","Avst","Balinese","Bali","Bamum","Bamu","Bassa_Vah","Bass","Batak","Batk","Bengali","Beng","Bhaiksuki","Bhks","Bopomofo","Bopo","Brahmi","Brah","Braille","Brai","Buginese","Bugi","Buhid","Buhd","Canadian_Aboriginal","Cans","Carian","Cari","Caucasian_Albanian","Aghb","Chakma","Cakm","Cham","Cherokee","Cher","Common","Zyyy","Coptic","Copt","Qaac","Cuneiform","Xsux","Cypriot","Cprt","Cyrillic","Cyrl","Deseret","Dsrt","Devanagari","Deva","Duployan","Dupl","Egyptian_Hieroglyphs","Egyp","Elbasan","Elba","Ethiopic","Ethi","Georgian","Geor","Glagolitic","Glag","Gothic","Goth","Grantha","Gran","Greek","Grek","Gujarati","Gujr","Gurmukhi","Guru","Han","Hani","Hangul","Hang","Hanunoo","Hano","Hatran","Hatr","Hebrew","Hebr","Hiragana","Hira","Imperial_Aramaic","Armi","Inherited","Zinh","Qaai","Inscriptional_Pahlavi","Phli","Inscriptional_Parthian","Prti","Javanese","Java","Kaithi","Kthi","Kannada","Knda","Katakana","Kana","Kayah_Li","Kali","Kharoshthi","Khar","Khmer","Khmr","Khojki","Khoj","Khudawadi","Sind","Lao","Laoo","Latin","Latn","Lepcha","Lepc","Limbu","Limb","Linear_A","Lina","Linear_B","Linb","Lisu","Lycian","Lyci","Lydian","Lydi","Mahajani","Mahj","Malayalam","Mlym","Mandaic","Mand","Manichaean","Mani","Marchen","Marc","Masaram_Gondi","Gonm","Meetei_Mayek","Mtei","Mende_Kikakui","Mend","Meroitic_Cursive","Merc","Meroitic_Hieroglyphs","Mero","Miao","Plrd","Modi","Mongolian","Mong","Mro","Mroo","Multani","Mult","Myanmar","Mymr","Nabataean","Nbat","New_Tai_Lue","Talu","Newa","Nko","Nkoo","Nushu","Nshu","Ogham","Ogam","Ol_Chiki","Olck","Old_Hungarian","Hung","Old_Italic","Ital","Old_North_Arabian","Narb","Old_Permic","Perm","Old_Persian","Xpeo","Old_South_Arabian","Sarb","Old_Turkic","Orkh","Oriya","Orya","Osage","Osge","Osmanya","Osma","Pahawh_Hmong","Hmng","Palmyrene","Palm","Pau_Cin_Hau","Pauc","Phags_Pa","Phag","Phoenician","Phnx","Psalter_Pahlavi","Phlp","Rejang","Rjng","Runic","Runr","Samaritan","Samr","Saurashtra","Saur","Sharada","Shrd","Shavian","Shaw","Siddham","Sidd","SignWriting","Sgnw","Sinhala","Sinh","Sora_Sompeng","Sora","Soyombo","Soyo","Sundanese","Sund","Syloti_Nagri","Sylo","Syriac","Syrc","Tagalog","Tglg","Tagbanwa","Tagb","Tai_Le","Tale","Tai_Tham","Lana","Tai_Viet","Tavt","Takri","Takr","Tamil","Taml","Tangut","Tang","Telugu","Telu","Thaana","Thaa","Thai","Tibetan","Tibt","Tifinagh","Tfng","Tirhuta","Tirh","Ugaritic","Ugar","Vai","Vaii","Warang_Citi","Wara","Yi","Yiii","Zanabazar_Square","Zanb"]};Array.prototype.push.apply(data.$LONE,data.General_Category);data.gc=data.General_Category;data.sc=data.Script_Extensions=data.scx=data.Script;var pp$9=Parser.prototype;var RegExpValidationState=function RegExpValidationState(parser){this.parser=parser;this.validFlags="gim"+(parser.options.ecmaVersion>=6?"uy":"")+(parser.options.ecmaVersion>=9?"s":"");this.source="";this.flags="";this.start=0;this.switchU=!1;this.switchN=!1;this.pos=0;this.lastIntValue=0;this.lastStringValue="";this.lastAssertionIsQuantifiable=!1;this.numCapturingParens=0;this.maxBackReference=0;this.groupNames=[];this.backReferenceNames=[]};RegExpValidationState.prototype.reset=function reset(start,pattern,flags){var unicode=flags.indexOf("u")!==-1;this.start=start|0;this.source=pattern+"";this.flags=flags;this.switchU=unicode&&this.parser.options.ecmaVersion>=6;this.switchN=unicode&&this.parser.options.ecmaVersion>=9};RegExpValidationState.prototype.raise=function raise(message){this.parser.raiseRecoverable(this.start,("Invalid regular expression: /"+(this.source)+"/: "+message))};RegExpValidationState.prototype.at=function at(i){var s=this.source;var l=s.length;if(i>=l){return-1}
var c=s.charCodeAt(i);if(!this.switchU||c<=0xD7FF||c>=0xE000||i+1>=l){return c}
return(c<<10)+s.charCodeAt(i+1)-0x35FDC00};RegExpValidationState.prototype.nextIndex=function nextIndex(i){var s=this.source;var l=s.length;if(i>=l){return l}
var c=s.charCodeAt(i);if(!this.switchU||c<=0xD7FF||c>=0xE000||i+1>=l){return i+1}
return i+2};RegExpValidationState.prototype.current=function current(){return this.at(this.pos)};RegExpValidationState.prototype.lookahead=function lookahead(){return this.at(this.nextIndex(this.pos))};RegExpValidationState.prototype.advance=function advance(){this.pos=this.nextIndex(this.pos)};RegExpValidationState.prototype.eat=function eat(ch){if(this.current()===ch){this.advance();return!0}
return!1};function codePointToString$1(ch){if(ch<=0xFFFF){return String.fromCharCode(ch)}
ch-=0x10000;return String.fromCharCode((ch>>10)+0xD800,(ch&0x03FF)+0xDC00)}
pp$9.validateRegExpFlags=function(state){var this$1=this;var validFlags=state.validFlags;var flags=state.flags;for(var i=0;i<flags.length;i++){var flag=flags.charAt(i);if(validFlags.indexOf(flag)==-1){this$1.raise(state.start,"Invalid regular expression flag")}
if(flags.indexOf(flag,i+1)>-1){this$1.raise(state.start,"Duplicate regular expression flag")}}};pp$9.validateRegExpPattern=function(state){this.regexp_pattern(state);if(!state.switchN&&this.options.ecmaVersion>=9&&state.groupNames.length>0){state.switchN=!0;this.regexp_pattern(state)}};pp$9.regexp_pattern=function(state){state.pos=0;state.lastIntValue=0;state.lastStringValue="";state.lastAssertionIsQuantifiable=!1;state.numCapturingParens=0;state.maxBackReference=0;state.groupNames.length=0;state.backReferenceNames.length=0;this.regexp_disjunction(state);if(state.pos!==state.source.length){if(state.eat(0x29)){state.raise("Unmatched ')'")}
if(state.eat(0x5D)||state.eat(0x7D)){state.raise("Lone quantifier brackets")}}
if(state.maxBackReference>state.numCapturingParens){state.raise("Invalid escape")}
for(var i=0,list=state.backReferenceNames;i<list.length;i+=1){var name=list[i];if(state.groupNames.indexOf(name)===-1){state.raise("Invalid named capture referenced")}}};pp$9.regexp_disjunction=function(state){var this$1=this;this.regexp_alternative(state);while(state.eat(0x7C)){this$1.regexp_alternative(state)}
if(this.regexp_eatQuantifier(state,!0)){state.raise("Nothing to repeat")}
if(state.eat(0x7B)){state.raise("Lone quantifier brackets")}};pp$9.regexp_alternative=function(state){while(state.pos<state.source.length&&this.regexp_eatTerm(state))
{}};pp$9.regexp_eatTerm=function(state){if(this.regexp_eatAssertion(state)){if(state.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(state)){if(state.switchU){state.raise("Invalid quantifier")}}
return!0}
if(state.switchU?this.regexp_eatAtom(state):this.regexp_eatExtendedAtom(state)){this.regexp_eatQuantifier(state);return!0}
return!1};pp$9.regexp_eatAssertion=function(state){var start=state.pos;state.lastAssertionIsQuantifiable=!1;if(state.eat(0x5E)||state.eat(0x24)){return!0}
if(state.eat(0x5C)){if(state.eat(0x42)||state.eat(0x62)){return!0}
state.pos=start}
if(state.eat(0x28)&&state.eat(0x3F)){var lookbehind=!1;if(this.options.ecmaVersion>=9){lookbehind=state.eat(0x3C)}
if(state.eat(0x3D)||state.eat(0x21)){this.regexp_disjunction(state);if(!state.eat(0x29)){state.raise("Unterminated group")}
state.lastAssertionIsQuantifiable=!lookbehind;return!0}}
state.pos=start;return!1};pp$9.regexp_eatQuantifier=function(state,noError){if(noError===void 0)noError=!1;if(this.regexp_eatQuantifierPrefix(state,noError)){state.eat(0x3F);return!0}
return!1};pp$9.regexp_eatQuantifierPrefix=function(state,noError){return(state.eat(0x2A)||state.eat(0x2B)||state.eat(0x3F)||this.regexp_eatBracedQuantifier(state,noError))};pp$9.regexp_eatBracedQuantifier=function(state,noError){var start=state.pos;if(state.eat(0x7B)){var min=0,max=-1;if(this.regexp_eatDecimalDigits(state)){min=state.lastIntValue;if(state.eat(0x2C)&&this.regexp_eatDecimalDigits(state)){max=state.lastIntValue}
if(state.eat(0x7D)){if(max!==-1&&max<min&&!noError){state.raise("numbers out of order in {} quantifier")}
return!0}}
if(state.switchU&&!noError){state.raise("Incomplete quantifier")}
state.pos=start}
return!1};pp$9.regexp_eatAtom=function(state){return(this.regexp_eatPatternCharacters(state)||state.eat(0x2E)||this.regexp_eatReverseSolidusAtomEscape(state)||this.regexp_eatCharacterClass(state)||this.regexp_eatUncapturingGroup(state)||this.regexp_eatCapturingGroup(state))};pp$9.regexp_eatReverseSolidusAtomEscape=function(state){var start=state.pos;if(state.eat(0x5C)){if(this.regexp_eatAtomEscape(state)){return!0}
state.pos=start}
return!1};pp$9.regexp_eatUncapturingGroup=function(state){var start=state.pos;if(state.eat(0x28)){if(state.eat(0x3F)&&state.eat(0x3A)){this.regexp_disjunction(state);if(state.eat(0x29)){return!0}
state.raise("Unterminated group")}
state.pos=start}
return!1};pp$9.regexp_eatCapturingGroup=function(state){if(state.eat(0x28)){if(this.options.ecmaVersion>=9){this.regexp_groupSpecifier(state)}else if(state.current()===0x3F){state.raise("Invalid group")}
this.regexp_disjunction(state);if(state.eat(0x29)){state.numCapturingParens+=1;return!0}
state.raise("Unterminated group")}
return!1};pp$9.regexp_eatExtendedAtom=function(state){return(state.eat(0x2E)||this.regexp_eatReverseSolidusAtomEscape(state)||this.regexp_eatCharacterClass(state)||this.regexp_eatUncapturingGroup(state)||this.regexp_eatCapturingGroup(state)||this.regexp_eatInvalidBracedQuantifier(state)||this.regexp_eatExtendedPatternCharacter(state))};pp$9.regexp_eatInvalidBracedQuantifier=function(state){if(this.regexp_eatBracedQuantifier(state,!0)){state.raise("Nothing to repeat")}
return!1};pp$9.regexp_eatSyntaxCharacter=function(state){var ch=state.current();if(isSyntaxCharacter(ch)){state.lastIntValue=ch;state.advance();return!0}
return!1};function isSyntaxCharacter(ch){return(ch===0x24||ch>=0x28&&ch<=0x2B||ch===0x2E||ch===0x3F||ch>=0x5B&&ch<=0x5E||ch>=0x7B&&ch<=0x7D)}
pp$9.regexp_eatPatternCharacters=function(state){var start=state.pos;var ch=0;while((ch=state.current())!==-1&&!isSyntaxCharacter(ch)){state.advance()}
return state.pos!==start};pp$9.regexp_eatExtendedPatternCharacter=function(state){var ch=state.current();if(ch!==-1&&ch!==0x24&&!(ch>=0x28&&ch<=0x2B)&&ch!==0x2E&&ch!==0x3F&&ch!==0x5B&&ch!==0x5E&&ch!==0x7C){state.advance();return!0}
return!1};pp$9.regexp_groupSpecifier=function(state){if(state.eat(0x3F)){if(this.regexp_eatGroupName(state)){if(state.groupNames.indexOf(state.lastStringValue)!==-1){state.raise("Duplicate capture group name")}
state.groupNames.push(state.lastStringValue);return}
state.raise("Invalid group")}};pp$9.regexp_eatGroupName=function(state){state.lastStringValue="";if(state.eat(0x3C)){if(this.regexp_eatRegExpIdentifierName(state)&&state.eat(0x3E)){return!0}
state.raise("Invalid capture group name")}
return!1};pp$9.regexp_eatRegExpIdentifierName=function(state){state.lastStringValue="";if(this.regexp_eatRegExpIdentifierStart(state)){state.lastStringValue+=codePointToString$1(state.lastIntValue);while(this.regexp_eatRegExpIdentifierPart(state)){state.lastStringValue+=codePointToString$1(state.lastIntValue)}
return!0}
return!1};pp$9.regexp_eatRegExpIdentifierStart=function(state){var start=state.pos;var ch=state.current();state.advance();if(ch===0x5C&&this.regexp_eatRegExpUnicodeEscapeSequence(state)){ch=state.lastIntValue}
if(isRegExpIdentifierStart(ch)){state.lastIntValue=ch;return!0}
state.pos=start;return!1};function isRegExpIdentifierStart(ch){return isIdentifierStart(ch,!0)||ch===0x24||ch===0x5F}
pp$9.regexp_eatRegExpIdentifierPart=function(state){var start=state.pos;var ch=state.current();state.advance();if(ch===0x5C&&this.regexp_eatRegExpUnicodeEscapeSequence(state)){ch=state.lastIntValue}
if(isRegExpIdentifierPart(ch)){state.lastIntValue=ch;return!0}
state.pos=start;return!1};function isRegExpIdentifierPart(ch){return isIdentifierChar(ch,!0)||ch===0x24||ch===0x5F||ch===0x200C||ch===0x200D}
pp$9.regexp_eatAtomEscape=function(state){if(this.regexp_eatBackReference(state)||this.regexp_eatCharacterClassEscape(state)||this.regexp_eatCharacterEscape(state)||(state.switchN&&this.regexp_eatKGroupName(state))){return!0}
if(state.switchU){if(state.current()===0x63){state.raise("Invalid unicode escape")}
state.raise("Invalid escape")}
return!1};pp$9.regexp_eatBackReference=function(state){var start=state.pos;if(this.regexp_eatDecimalEscape(state)){var n=state.lastIntValue;if(state.switchU){if(n>state.maxBackReference){state.maxBackReference=n}
return!0}
if(n<=state.numCapturingParens){return!0}
state.pos=start}
return!1};pp$9.regexp_eatKGroupName=function(state){if(state.eat(0x6B)){if(this.regexp_eatGroupName(state)){state.backReferenceNames.push(state.lastStringValue);return!0}
state.raise("Invalid named reference")}
return!1};pp$9.regexp_eatCharacterEscape=function(state){return(this.regexp_eatControlEscape(state)||this.regexp_eatCControlLetter(state)||this.regexp_eatZero(state)||this.regexp_eatHexEscapeSequence(state)||this.regexp_eatRegExpUnicodeEscapeSequence(state)||(!state.switchU&&this.regexp_eatLegacyOctalEscapeSequence(state))||this.regexp_eatIdentityEscape(state))};pp$9.regexp_eatCControlLetter=function(state){var start=state.pos;if(state.eat(0x63)){if(this.regexp_eatControlLetter(state)){return!0}
state.pos=start}
return!1};pp$9.regexp_eatZero=function(state){if(state.current()===0x30&&!isDecimalDigit(state.lookahead())){state.lastIntValue=0;state.advance();return!0}
return!1};pp$9.regexp_eatControlEscape=function(state){var ch=state.current();if(ch===0x74){state.lastIntValue=0x09;state.advance();return!0}
if(ch===0x6E){state.lastIntValue=0x0A;state.advance();return!0}
if(ch===0x76){state.lastIntValue=0x0B;state.advance();return!0}
if(ch===0x66){state.lastIntValue=0x0C;state.advance();return!0}
if(ch===0x72){state.lastIntValue=0x0D;state.advance();return!0}
return!1};pp$9.regexp_eatControlLetter=function(state){var ch=state.current();if(isControlLetter(ch)){state.lastIntValue=ch%0x20;state.advance();return!0}
return!1};function isControlLetter(ch){return((ch>=0x41&&ch<=0x5A)||(ch>=0x61&&ch<=0x7A))}
pp$9.regexp_eatRegExpUnicodeEscapeSequence=function(state){var start=state.pos;if(state.eat(0x75)){if(this.regexp_eatFixedHexDigits(state,4)){var lead=state.lastIntValue;if(state.switchU&&lead>=0xD800&&lead<=0xDBFF){var leadSurrogateEnd=state.pos;if(state.eat(0x5C)&&state.eat(0x75)&&this.regexp_eatFixedHexDigits(state,4)){var trail=state.lastIntValue;if(trail>=0xDC00&&trail<=0xDFFF){state.lastIntValue=(lead-0xD800)*0x400+(trail-0xDC00)+0x10000;return!0}}
state.pos=leadSurrogateEnd;state.lastIntValue=lead}
return!0}
if(state.switchU&&state.eat(0x7B)&&this.regexp_eatHexDigits(state)&&state.eat(0x7D)&&isValidUnicode(state.lastIntValue)){return!0}
if(state.switchU){state.raise("Invalid unicode escape")}
state.pos=start}
return!1};function isValidUnicode(ch){return ch>=0&&ch<=0x10FFFF}
pp$9.regexp_eatIdentityEscape=function(state){if(state.switchU){if(this.regexp_eatSyntaxCharacter(state)){return!0}
if(state.eat(0x2F)){state.lastIntValue=0x2F;return!0}
return!1}
var ch=state.current();if(ch!==0x63&&(!state.switchN||ch!==0x6B)){state.lastIntValue=ch;state.advance();return!0}
return!1};pp$9.regexp_eatDecimalEscape=function(state){state.lastIntValue=0;var ch=state.current();if(ch>=0x31&&ch<=0x39){do{state.lastIntValue=10*state.lastIntValue+(ch-0x30);state.advance()}while((ch=state.current())>=0x30&&ch<=0x39)
return!0}
return!1};pp$9.regexp_eatCharacterClassEscape=function(state){var ch=state.current();if(isCharacterClassEscape(ch)){state.lastIntValue=-1;state.advance();return!0}
if(state.switchU&&this.options.ecmaVersion>=9&&(ch===0x50||ch===0x70)){state.lastIntValue=-1;state.advance();if(state.eat(0x7B)&&this.regexp_eatUnicodePropertyValueExpression(state)&&state.eat(0x7D)){return!0}
state.raise("Invalid property name")}
return!1};function isCharacterClassEscape(ch){return(ch===0x64||ch===0x44||ch===0x73||ch===0x53||ch===0x77||ch===0x57)}
pp$9.regexp_eatUnicodePropertyValueExpression=function(state){var start=state.pos;if(this.regexp_eatUnicodePropertyName(state)&&state.eat(0x3D)){var name=state.lastStringValue;if(this.regexp_eatUnicodePropertyValue(state)){var value=state.lastStringValue;this.regexp_validateUnicodePropertyNameAndValue(state,name,value);return!0}}
state.pos=start;if(this.regexp_eatLoneUnicodePropertyNameOrValue(state)){var nameOrValue=state.lastStringValue;this.regexp_validateUnicodePropertyNameOrValue(state,nameOrValue);return!0}
return!1};pp$9.regexp_validateUnicodePropertyNameAndValue=function(state,name,value){if(!data.hasOwnProperty(name)||data[name].indexOf(value)===-1){state.raise("Invalid property name")}};pp$9.regexp_validateUnicodePropertyNameOrValue=function(state,nameOrValue){if(data.$LONE.indexOf(nameOrValue)===-1){state.raise("Invalid property name")}};pp$9.regexp_eatUnicodePropertyName=function(state){var ch=0;state.lastStringValue="";while(isUnicodePropertyNameCharacter(ch=state.current())){state.lastStringValue+=codePointToString$1(ch);state.advance()}
return state.lastStringValue!==""};function isUnicodePropertyNameCharacter(ch){return isControlLetter(ch)||ch===0x5F}
pp$9.regexp_eatUnicodePropertyValue=function(state){var ch=0;state.lastStringValue="";while(isUnicodePropertyValueCharacter(ch=state.current())){state.lastStringValue+=codePointToString$1(ch);state.advance()}
return state.lastStringValue!==""};function isUnicodePropertyValueCharacter(ch){return isUnicodePropertyNameCharacter(ch)||isDecimalDigit(ch)}
pp$9.regexp_eatLoneUnicodePropertyNameOrValue=function(state){return this.regexp_eatUnicodePropertyValue(state)};pp$9.regexp_eatCharacterClass=function(state){if(state.eat(0x5B)){state.eat(0x5E);this.regexp_classRanges(state);if(state.eat(0x5D)){return!0}
state.raise("Unterminated character class")}
return!1};pp$9.regexp_classRanges=function(state){var this$1=this;while(this.regexp_eatClassAtom(state)){var left=state.lastIntValue;if(state.eat(0x2D)&&this$1.regexp_eatClassAtom(state)){var right=state.lastIntValue;if(state.switchU&&(left===-1||right===-1)){state.raise("Invalid character class")}
if(left!==-1&&right!==-1&&left>right){state.raise("Range out of order in character class")}}}};pp$9.regexp_eatClassAtom=function(state){var start=state.pos;if(state.eat(0x5C)){if(this.regexp_eatClassEscape(state)){return!0}
if(state.switchU){var ch$1=state.current();if(ch$1===0x63||isOctalDigit(ch$1)){state.raise("Invalid class escape")}
state.raise("Invalid escape")}
state.pos=start}
var ch=state.current();if(ch!==0x5D){state.lastIntValue=ch;state.advance();return!0}
return!1};pp$9.regexp_eatClassEscape=function(state){var start=state.pos;if(state.eat(0x62)){state.lastIntValue=0x08;return!0}
if(state.switchU&&state.eat(0x2D)){state.lastIntValue=0x2D;return!0}
if(!state.switchU&&state.eat(0x63)){if(this.regexp_eatClassControlLetter(state)){return!0}
state.pos=start}
return(this.regexp_eatCharacterClassEscape(state)||this.regexp_eatCharacterEscape(state))};pp$9.regexp_eatClassControlLetter=function(state){var ch=state.current();if(isDecimalDigit(ch)||ch===0x5F){state.lastIntValue=ch%0x20;state.advance();return!0}
return!1};pp$9.regexp_eatHexEscapeSequence=function(state){var start=state.pos;if(state.eat(0x78)){if(this.regexp_eatFixedHexDigits(state,2)){return!0}
if(state.switchU){state.raise("Invalid escape")}
state.pos=start}
return!1};pp$9.regexp_eatDecimalDigits=function(state){var start=state.pos;var ch=0;state.lastIntValue=0;while(isDecimalDigit(ch=state.current())){state.lastIntValue=10*state.lastIntValue+(ch-0x30);state.advance()}
return state.pos!==start};function isDecimalDigit(ch){return ch>=0x30&&ch<=0x39}
pp$9.regexp_eatHexDigits=function(state){var start=state.pos;var ch=0;state.lastIntValue=0;while(isHexDigit(ch=state.current())){state.lastIntValue=16*state.lastIntValue+hexToInt(ch);state.advance()}
return state.pos!==start};function isHexDigit(ch){return((ch>=0x30&&ch<=0x39)||(ch>=0x41&&ch<=0x46)||(ch>=0x61&&ch<=0x66))}
function hexToInt(ch){if(ch>=0x41&&ch<=0x46){return 10+(ch-0x41)}
if(ch>=0x61&&ch<=0x66){return 10+(ch-0x61)}
return ch-0x30}
pp$9.regexp_eatLegacyOctalEscapeSequence=function(state){if(this.regexp_eatOctalDigit(state)){var n1=state.lastIntValue;if(this.regexp_eatOctalDigit(state)){var n2=state.lastIntValue;if(n1<=3&&this.regexp_eatOctalDigit(state)){state.lastIntValue=n1*64+n2*8+state.lastIntValue}else{state.lastIntValue=n1*8+n2}}else{state.lastIntValue=n1}
return!0}
return!1};pp$9.regexp_eatOctalDigit=function(state){var ch=state.current();if(isOctalDigit(ch)){state.lastIntValue=ch-0x30;state.advance();return!0}
state.lastIntValue=0;return!1};function isOctalDigit(ch){return ch>=0x30&&ch<=0x37}
pp$9.regexp_eatFixedHexDigits=function(state,length){var start=state.pos;state.lastIntValue=0;for(var i=0;i<length;++i){var ch=state.current();if(!isHexDigit(ch)){state.pos=start;return!1}
state.lastIntValue=16*state.lastIntValue+hexToInt(ch);state.advance()}
return!0};var Token=function Token(p){this.type=p.type;this.value=p.value;this.start=p.start;this.end=p.end;if(p.options.locations)
{this.loc=new SourceLocation(p,p.startLoc,p.endLoc)}
if(p.options.ranges)
{this.range=[p.start,p.end]}};var pp$8=Parser.prototype;pp$8.next=function(){if(this.options.onToken)
{this.options.onToken(new Token(this))}
this.lastTokEnd=this.end;this.lastTokStart=this.start;this.lastTokEndLoc=this.endLoc;this.lastTokStartLoc=this.startLoc;this.nextToken()};pp$8.getToken=function(){this.next();return new Token(this)};if(typeof Symbol!=="undefined")
{pp$8[Symbol.iterator]=function(){var this$1=this;return{next:function(){var token=this$1.getToken();return{done:token.type===types.eof,value:token}}}}}
pp$8.curContext=function(){return this.context[this.context.length-1]};pp$8.nextToken=function(){var curContext=this.curContext();if(!curContext||!curContext.preserveSpace){this.skipSpace()}
this.start=this.pos;if(this.options.locations){this.startLoc=this.curPosition()}
if(this.pos>=this.input.length){return this.finishToken(types.eof)}
if(curContext.override){return curContext.override(this)}
else{this.readToken(this.fullCharCodeAtPos())}};pp$8.readToken=function(code){if(isIdentifierStart(code,this.options.ecmaVersion>=6)||code===92)
{return this.readWord()}
return this.getTokenFromCode(code)};pp$8.fullCharCodeAtPos=function(){var code=this.input.charCodeAt(this.pos);if(code<=0xd7ff||code>=0xe000){return code}
var next=this.input.charCodeAt(this.pos+1);return(code<<10)+next-0x35fdc00};pp$8.skipBlockComment=function(){var this$1=this;var startLoc=this.options.onComment&&this.curPosition();var start=this.pos,end=this.input.indexOf("*/",this.pos+=2);if(end===-1){this.raise(this.pos-2,"Unterminated comment")}
this.pos=end+2;if(this.options.locations){lineBreakG.lastIndex=start;var match;while((match=lineBreakG.exec(this.input))&&match.index<this.pos){++this$1.curLine;this$1.lineStart=match.index+match[0].length}}
if(this.options.onComment)
{this.options.onComment(!0,this.input.slice(start+2,end),start,this.pos,startLoc,this.curPosition())}};pp$8.skipLineComment=function(startSkip){var this$1=this;var start=this.pos;var startLoc=this.options.onComment&&this.curPosition();var ch=this.input.charCodeAt(this.pos+=startSkip);while(this.pos<this.input.length&&!isNewLine(ch)){ch=this$1.input.charCodeAt(++this$1.pos)}
if(this.options.onComment)
{this.options.onComment(!1,this.input.slice(start+startSkip,this.pos),start,this.pos,startLoc,this.curPosition())}};pp$8.skipSpace=function(){var this$1=this;loop:while(this.pos<this.input.length){var ch=this$1.input.charCodeAt(this$1.pos);switch(ch){case 32:case 160:++this$1.pos;break
case 13:if(this$1.input.charCodeAt(this$1.pos+1)===10){++this$1.pos}
case 10:case 8232:case 8233:++this$1.pos;if(this$1.options.locations){++this$1.curLine;this$1.lineStart=this$1.pos}
break
case 47:switch(this$1.input.charCodeAt(this$1.pos+1)){case 42:this$1.skipBlockComment();break
case 47:this$1.skipLineComment(2);break
default:break loop}
break
default:if(ch>8&&ch<14||ch>=5760&&nonASCIIwhitespace.test(String.fromCharCode(ch))){++this$1.pos}else{break loop}}}};pp$8.finishToken=function(type,val){this.end=this.pos;if(this.options.locations){this.endLoc=this.curPosition()}
var prevType=this.type;this.type=type;this.value=val;this.updateContext(prevType)};pp$8.readToken_dot=function(){var next=this.input.charCodeAt(this.pos+1);if(next>=48&&next<=57){return this.readNumber(!0)}
var next2=this.input.charCodeAt(this.pos+2);if(this.options.ecmaVersion>=6&&next===46&&next2===46){this.pos+=3;return this.finishToken(types.ellipsis)}else{++this.pos;return this.finishToken(types.dot)}};pp$8.readToken_slash=function(){var next=this.input.charCodeAt(this.pos+1);if(this.exprAllowed){++this.pos;return this.readRegexp()}
if(next===61){return this.finishOp(types.assign,2)}
return this.finishOp(types.slash,1)};pp$8.readToken_mult_modulo_exp=function(code){var next=this.input.charCodeAt(this.pos+1);var size=1;var tokentype=code===42?types.star:types.modulo;if(this.options.ecmaVersion>=7&&code==42&&next===42){++size;tokentype=types.starstar;next=this.input.charCodeAt(this.pos+2)}
if(next===61){return this.finishOp(types.assign,size+1)}
return this.finishOp(tokentype,size)};pp$8.readToken_pipe_amp=function(code){var next=this.input.charCodeAt(this.pos+1);if(next===code){return this.finishOp(code===124?types.logicalOR:types.logicalAND,2)}
if(next===61){return this.finishOp(types.assign,2)}
return this.finishOp(code===124?types.bitwiseOR:types.bitwiseAND,1)};pp$8.readToken_caret=function(){var next=this.input.charCodeAt(this.pos+1);if(next===61){return this.finishOp(types.assign,2)}
return this.finishOp(types.bitwiseXOR,1)};pp$8.readToken_plus_min=function(code){var next=this.input.charCodeAt(this.pos+1);if(next===code){if(next==45&&!this.inModule&&this.input.charCodeAt(this.pos+2)==62&&(this.lastTokEnd===0||lineBreak.test(this.input.slice(this.lastTokEnd,this.pos)))){this.skipLineComment(3);this.skipSpace();return this.nextToken()}
return this.finishOp(types.incDec,2)}
if(next===61){return this.finishOp(types.assign,2)}
return this.finishOp(types.plusMin,1)};pp$8.readToken_lt_gt=function(code){var next=this.input.charCodeAt(this.pos+1);var size=1;if(next===code){size=code===62&&this.input.charCodeAt(this.pos+2)===62?3:2;if(this.input.charCodeAt(this.pos+size)===61){return this.finishOp(types.assign,size+1)}
return this.finishOp(types.bitShift,size)}
if(next==33&&code==60&&!this.inModule&&this.input.charCodeAt(this.pos+2)==45&&this.input.charCodeAt(this.pos+3)==45){this.skipLineComment(4);this.skipSpace();return this.nextToken()}
if(next===61){size=2}
return this.finishOp(types.relational,size)};pp$8.readToken_eq_excl=function(code){var next=this.input.charCodeAt(this.pos+1);if(next===61){return this.finishOp(types.equality,this.input.charCodeAt(this.pos+2)===61?3:2)}
if(code===61&&next===62&&this.options.ecmaVersion>=6){this.pos+=2;return this.finishToken(types.arrow)}
return this.finishOp(code===61?types.eq:types.prefix,1)};pp$8.getTokenFromCode=function(code){switch(code){case 46:return this.readToken_dot()
case 40:++this.pos;return this.finishToken(types.parenL)
case 41:++this.pos;return this.finishToken(types.parenR)
case 59:++this.pos;return this.finishToken(types.semi)
case 44:++this.pos;return this.finishToken(types.comma)
case 91:++this.pos;return this.finishToken(types.bracketL)
case 93:++this.pos;return this.finishToken(types.bracketR)
case 123:++this.pos;return this.finishToken(types.braceL)
case 125:++this.pos;return this.finishToken(types.braceR)
case 58:++this.pos;return this.finishToken(types.colon)
case 63:++this.pos;return this.finishToken(types.question)
case 96:if(this.options.ecmaVersion<6){break}
++this.pos;return this.finishToken(types.backQuote)
case 48:var next=this.input.charCodeAt(this.pos+1);if(next===120||next===88){return this.readRadixNumber(16)}
if(this.options.ecmaVersion>=6){if(next===111||next===79){return this.readRadixNumber(8)}
if(next===98||next===66){return this.readRadixNumber(2)}}
case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1)
case 34:case 39:return this.readString(code)
case 47:return this.readToken_slash()
case 37:case 42:return this.readToken_mult_modulo_exp(code)
case 124:case 38:return this.readToken_pipe_amp(code)
case 94:return this.readToken_caret()
case 43:case 45:return this.readToken_plus_min(code)
case 60:case 62:return this.readToken_lt_gt(code)
case 61:case 33:return this.readToken_eq_excl(code)
case 126:return this.finishOp(types.prefix,1)}
this.raise(this.pos,"Unexpected character '"+codePointToString(code)+"'")};pp$8.finishOp=function(type,size){var str=this.input.slice(this.pos,this.pos+size);this.pos+=size;return this.finishToken(type,str)};pp$8.readRegexp=function(){var this$1=this;var escaped,inClass,start=this.pos;for(;;){if(this$1.pos>=this$1.input.length){this$1.raise(start,"Unterminated regular expression")}
var ch=this$1.input.charAt(this$1.pos);if(lineBreak.test(ch)){this$1.raise(start,"Unterminated regular expression")}
if(!escaped){if(ch==="["){inClass=!0}
else if(ch==="]"&&inClass){inClass=!1}
else if(ch==="/"&&!inClass){break}
escaped=ch==="\\"}else{escaped=!1}
++this$1.pos}
var pattern=this.input.slice(start,this.pos);++this.pos;var flagsStart=this.pos;var flags=this.readWord1();if(this.containsEsc){this.unexpected(flagsStart)}
var state=this.regexpState||(this.regexpState=new RegExpValidationState(this));state.reset(start,pattern,flags);this.validateRegExpFlags(state);this.validateRegExpPattern(state);var value=null;try{value=new RegExp(pattern,flags)}catch(e){}
return this.finishToken(types.regexp,{pattern:pattern,flags:flags,value:value})};pp$8.readInt=function(radix,len){var this$1=this;var start=this.pos,total=0;for(var i=0,e=len==null?Infinity:len;i<e;++i){var code=this$1.input.charCodeAt(this$1.pos),val=(void 0);if(code>=97){val=code-97+10}
else if(code>=65){val=code-65+10}
else if(code>=48&&code<=57){val=code-48}
else{val=Infinity}
if(val>=radix){break}
++this$1.pos;total=total*radix+val}
if(this.pos===start||len!=null&&this.pos-start!==len){return null}
return total};pp$8.readRadixNumber=function(radix){this.pos+=2;var val=this.readInt(radix);if(val==null){this.raise(this.start+2,"Expected number in radix "+radix)}
if(isIdentifierStart(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number")}
return this.finishToken(types.num,val)};pp$8.readNumber=function(startsWithDot){var start=this.pos;if(!startsWithDot&&this.readInt(10)===null){this.raise(start,"Invalid number")}
var octal=this.pos-start>=2&&this.input.charCodeAt(start)===48;if(octal&&this.strict){this.raise(start,"Invalid number")}
if(octal&&/[89]/.test(this.input.slice(start,this.pos))){octal=!1}
var next=this.input.charCodeAt(this.pos);if(next===46&&!octal){++this.pos;this.readInt(10);next=this.input.charCodeAt(this.pos)}
if((next===69||next===101)&&!octal){next=this.input.charCodeAt(++this.pos);if(next===43||next===45){++this.pos}
if(this.readInt(10)===null){this.raise(start,"Invalid number")}}
if(isIdentifierStart(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number")}
var str=this.input.slice(start,this.pos);var val=octal?parseInt(str,8):parseFloat(str);return this.finishToken(types.num,val)};pp$8.readCodePoint=function(){var ch=this.input.charCodeAt(this.pos),code;if(ch===123){if(this.options.ecmaVersion<6){this.unexpected()}
var codePos=++this.pos;code=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos);++this.pos;if(code>0x10FFFF){this.invalidStringToken(codePos,"Code point out of bounds")}}else{code=this.readHexChar(4)}
return code};function codePointToString(code){if(code<=0xFFFF){return String.fromCharCode(code)}
code-=0x10000;return String.fromCharCode((code>>10)+0xD800,(code&1023)+0xDC00)}
pp$8.readString=function(quote){var this$1=this;var out="",chunkStart=++this.pos;for(;;){if(this$1.pos>=this$1.input.length){this$1.raise(this$1.start,"Unterminated string constant")}
var ch=this$1.input.charCodeAt(this$1.pos);if(ch===quote){break}
if(ch===92){out+=this$1.input.slice(chunkStart,this$1.pos);out+=this$1.readEscapedChar(!1);chunkStart=this$1.pos}else{if(isNewLine(ch)){this$1.raise(this$1.start,"Unterminated string constant")}
++this$1.pos}}
out+=this.input.slice(chunkStart,this.pos++);return this.finishToken(types.string,out)};var INVALID_TEMPLATE_ESCAPE_ERROR={};pp$8.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken()}catch(err){if(err===INVALID_TEMPLATE_ESCAPE_ERROR){this.readInvalidTemplateToken()}else{throw err}}
this.inTemplateElement=!1};pp$8.invalidStringToken=function(position,message){if(this.inTemplateElement&&this.options.ecmaVersion>=9){throw INVALID_TEMPLATE_ESCAPE_ERROR}else{this.raise(position,message)}};pp$8.readTmplToken=function(){var this$1=this;var out="",chunkStart=this.pos;for(;;){if(this$1.pos>=this$1.input.length){this$1.raise(this$1.start,"Unterminated template")}
var ch=this$1.input.charCodeAt(this$1.pos);if(ch===96||ch===36&&this$1.input.charCodeAt(this$1.pos+1)===123){if(this$1.pos===this$1.start&&(this$1.type===types.template||this$1.type===types.invalidTemplate)){if(ch===36){this$1.pos+=2;return this$1.finishToken(types.dollarBraceL)}else{++this$1.pos;return this$1.finishToken(types.backQuote)}}
out+=this$1.input.slice(chunkStart,this$1.pos);return this$1.finishToken(types.template,out)}
if(ch===92){out+=this$1.input.slice(chunkStart,this$1.pos);out+=this$1.readEscapedChar(!0);chunkStart=this$1.pos}else if(isNewLine(ch)){out+=this$1.input.slice(chunkStart,this$1.pos);++this$1.pos;switch(ch){case 13:if(this$1.input.charCodeAt(this$1.pos)===10){++this$1.pos}
case 10:out+="\n";break
default:out+=String.fromCharCode(ch);break}
if(this$1.options.locations){++this$1.curLine;this$1.lineStart=this$1.pos}
chunkStart=this$1.pos}else{++this$1.pos}}};pp$8.readInvalidTemplateToken=function(){var this$1=this;for(;this.pos<this.input.length;this.pos++){switch(this$1.input[this$1.pos]){case "\\":++this$1.pos;break
case "$":if(this$1.input[this$1.pos+1]!=="{"){break}
case "`":return this$1.finishToken(types.invalidTemplate,this$1.input.slice(this$1.start,this$1.pos))}}
this.raise(this.start,"Unterminated template")};pp$8.readEscapedChar=function(inTemplate){var ch=this.input.charCodeAt(++this.pos);++this.pos;switch(ch){case 110:return"\n"
case 114:return"\r"
case 120:return String.fromCharCode(this.readHexChar(2))
case 117:return codePointToString(this.readCodePoint())
case 116:return"\t"
case 98:return"\b"
case 118:return"\u000b"
case 102:return"\f"
case 13:if(this.input.charCodeAt(this.pos)===10){++this.pos}
case 10:if(this.options.locations){this.lineStart=this.pos;++this.curLine}
return""
default:if(ch>=48&&ch<=55){var octalStr=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0];var octal=parseInt(octalStr,8);if(octal>255){octalStr=octalStr.slice(0,-1);octal=parseInt(octalStr,8)}
this.pos+=octalStr.length-1;ch=this.input.charCodeAt(this.pos);if((octalStr!=="0"||ch==56||ch==57)&&(this.strict||inTemplate)){this.invalidStringToken(this.pos-1-octalStr.length,inTemplate?"Octal literal in template string":"Octal literal in strict mode")}
return String.fromCharCode(octal)}
return String.fromCharCode(ch)}};pp$8.readHexChar=function(len){var codePos=this.pos;var n=this.readInt(16,len);if(n===null){this.invalidStringToken(codePos,"Bad character escape sequence")}
return n};pp$8.readWord1=function(){var this$1=this;this.containsEsc=!1;var word="",first=!0,chunkStart=this.pos;var astral=this.options.ecmaVersion>=6;while(this.pos<this.input.length){var ch=this$1.fullCharCodeAtPos();if(isIdentifierChar(ch,astral)){this$1.pos+=ch<=0xffff?1:2}else if(ch===92){this$1.containsEsc=!0;word+=this$1.input.slice(chunkStart,this$1.pos);var escStart=this$1.pos;if(this$1.input.charCodeAt(++this$1.pos)!=117)
{this$1.invalidStringToken(this$1.pos,"Expecting Unicode escape sequence \\uXXXX")}
++this$1.pos;var esc=this$1.readCodePoint();if(!(first?isIdentifierStart:isIdentifierChar)(esc,astral))
{this$1.invalidStringToken(escStart,"Invalid Unicode escape")}
word+=codePointToString(esc);chunkStart=this$1.pos}else{break}
first=!1}
return word+this.input.slice(chunkStart,this.pos)};pp$8.readWord=function(){var word=this.readWord1();var type=types.name;if(this.keywords.test(word)){if(this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword "+word)}
type=keywords$1[word]}
return this.finishToken(type,word)};var version="5.5.3";function parse(input,options){return new Parser(options,input).parse()}
function parseExpressionAt(input,pos,options){var p=new Parser(options,input,pos);p.nextToken();return p.parseExpression()}
function tokenizer(input,options){return new Parser(options,input)}
function addLooseExports(parse,Parser$$1,plugins$$1){exports.parse_dammit=parse;exports.LooseParser=Parser$$1;exports.pluginsLoose=plugins$$1}
exports.version=version;exports.parse=parse;exports.parseExpressionAt=parseExpressionAt;exports.tokenizer=tokenizer;exports.addLooseExports=addLooseExports;exports.Parser=Parser;exports.plugins=plugins;exports.defaultOptions=defaultOptions;exports.Position=Position;exports.SourceLocation=SourceLocation;exports.getLineInfo=getLineInfo;exports.Node=Node;exports.TokenType=TokenType;exports.tokTypes=types;exports.keywordTypes=keywords$1;exports.TokContext=TokContext;exports.tokContexts=types$1;exports.isIdentifierChar=isIdentifierChar;exports.isIdentifierStart=isIdentifierStart;exports.Token=Token;exports.isNewLine=isNewLine;exports.lineBreak=lineBreak;exports.lineBreakG=lineBreakG;exports.nonASCIIwhitespace=nonASCIIwhitespace;Object.defineProperty(exports,'__esModule',{value:!0})})))},{}],3:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.testPartition=testPartition;exports.shuffleArray=shuffleArray;exports.default=crossValidate;function testPartition(Classifier,opts,trainOpts,trainSet,testSet){var classifier=new Classifier(opts);var beginTrain=Date.now();var trainingStats=classifier.train(trainSet,trainOpts);var beginTest=Date.now();var testStats=classifier.test(testSet);var endTest=Date.now();var stats=Object.assign({},testStats,{trainTime:beginTest-beginTrain,testTime:endTest-beginTest,iterations:trainingStats.iterations,trainError:trainingStats.error,learningRate:trainOpts.learningRate,hidden:classifier.hiddenSizes,network:classifier.toJSON()});return stats}
function shuffleArray(array){for(var i=array.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var temp=array[i];array[i]=array[j];array[j]=temp}
return array}
function crossValidate(Classifier,data,opts,trainOpts,k){k=k||4;var size=data.length/k;if(data.constructor===Array){shuffleArray(data)}else{var newData={};shuffleArray(Object.keys(data)).forEach(function(key){newData[key]=data[key]});data=newData}
var avgs={error:0,trainTime:0,testTime:0,iterations:0,trainError:0};var stats={truePos:0,trueNeg:0,falsePos:0,falseNeg:0,total:0};var misclasses=[];var results=[];var stat=void 0;var sum=void 0;for(var i=0;i<k;i++){var dclone=data.slice(0);var testSet=dclone.splice(i*size,size);var trainSet=dclone;var result=testPartition(Classifier,opts,trainOpts,trainSet,testSet);for(stat in avgs){if(stat in avgs){sum=avgs[stat];avgs[stat]=sum+result[stat]}}
for(stat in stats){if(stat in stats){sum=stats[stat];stats[stat]=sum+result[stat]}}
misclasses.concat(results.misclasses);results.push(result)}
for(stat in avgs){if(stat in avgs){sum=avgs[stat];avgs[stat]=sum/k}}
stats.precision=stats.truePos/(stats.truePos+stats.falsePos);stats.recall=stats.truePos/(stats.truePos+stats.falseNeg);stats.accuracy=(stats.trueNeg+stats.truePos)/stats.total;stats.testSize=size;stats.trainSize=data.length-size;return{avgs:avgs,stats:stats,sets:results,misclasses:misclasses}}},{}],4:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=likely;function likely(input,net){var output=net.run(input);var maxProp=null;var maxValue=-1;for(var prop in output){var value=output[prop];if(value>maxValue){maxProp=prop;maxValue=value}}
return maxProp}},{}],5:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var lookup=function(){function lookup(){_classCallCheck(this,lookup)}
_createClass(lookup,null,[{key:"buildLookup",value:function buildLookup(hashes){var hash=hashes.reduce(function(memo,hash){return Object.assign(memo,hash)},{});return lookup.lookupFromHash(hash)}},{key:"lookupFromHash",value:function lookupFromHash(hash){var lookup={};var index=0;for(var i in hash){lookup[i]=index++}
return lookup}},{key:"toArray",value:function toArray(lookup,hash){var array=[];for(var i in lookup){array[lookup[i]]=hash[i]||0}
return array}},{key:"toHash",value:function toHash(lookup,array){var hash={};for(var i in lookup){hash[i]=array[lookup[i]]}
return hash}},{key:"lookupFromArray",value:function lookupFromArray(array){var lookup={};var z=0;var i=array.length;while(i-->0){lookup[array[i]]=z++}
return lookup}}]);return lookup}();exports.default=lookup},{}],6:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else{return get(parent,property,receiver)}}else if("value" in desc){return desc.value}else{var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}};var _neuralNetwork=require('./neural-network');var _neuralNetwork2=_interopRequireDefault(_neuralNetwork);var _lookup=require('./lookup');var _lookup2=_interopRequireDefault(_lookup);var _gpu=require('gpu.js');var _gpu2=_interopRequireDefault(_gpu);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var NeuralNetworkGPU=function(_NeuralNetwork){_inherits(NeuralNetworkGPU,_NeuralNetwork);function NeuralNetworkGPU(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,NeuralNetworkGPU);var _this=_possibleConstructorReturn(this,(NeuralNetworkGPU.__proto__||Object.getPrototypeOf(NeuralNetworkGPU)).call(this,options));_this.forwardPropagate=[];_this.backwardPropagate=[];_this.changesPropagate=[];_this.biasesPropagate=[];_this.gpu=new _gpu2.default({mode:options.mode});return _this}
_createClass(NeuralNetworkGPU,[{key:'_initialize',value:function _initialize(sizes){_get(NeuralNetworkGPU.prototype.__proto__||Object.getPrototypeOf(NeuralNetworkGPU.prototype),'_initialize',this).call(this,sizes);this.buildRunInput();this.buildCalculateDeltas();this.buildGetChanges();this.buildChangeBiases();this.buildGetMSE()}},{key:'setActivation',value:function setActivation(){}},{key:'_trainPattern',value:function _trainPattern(input,target,learningRate){learningRate=learningRate||this.trainOpts.learningRate;this.runInput(input);this.calculateDeltas(target);this.getChanges(learningRate);this.changeBiases(learningRate);return this.getMSE(this.errors[this.outputLayer])[0]}},{key:'buildRunInput',value:function buildRunInput(){var weightedSum=null;switch(this.activation){case 'sigmoid':weightedSum=weightedSumSigmoid;break;case 'relu':weightedSum=weightedSumRelu;break;case 'leaky-relu':weightedSum=weightedSumLeakyRelu;break;case 'tanh':weightedSum=weightedSumTanh;break;default:throw new Error('unknown activation '+this.activation)}
for(var layer=1;layer<=this.outputLayer;layer++){this.forwardPropagate[layer]=this.gpu.createKernel(weightedSum,{output:[this.sizes[layer]],outputToTexture:!0,constants:{size:this.sizes[layer-1]}})}}},{key:'runInput',value:function runInput(input){var output=void 0;this.outputs[0]=input;for(var layer=1;layer<=this.outputLayer;layer++){this.outputs[layer]=this.forwardPropagate[layer](this.weights[layer],this.biases[layer],input);output=input=this.outputs[layer]}
return output}},{key:'buildCalculateDeltas',value:function buildCalculateDeltas(){var calcDeltas=null;switch(this.activation){case 'sigmoid':calcDeltas=calcDeltasSigmoid;break;case 'relu':calcDeltas=calcDeltasRelu;break;case 'leaky-relu':calcDeltas=calcDeltasLeakyRelu;break;case 'tanh':calcDeltas=calcDeltasTanh;break;default:throw new Error('unknown activation '+this.activation)}
for(var layer=this.outputLayer;layer>0;layer--){if(layer===this.outputLayer){this.backwardPropagate[layer]=this.gpu.createKernelMap({error:_gpu2.default.alias('calcErrorOutput',calcErrorOutput),deltas:_gpu2.default.alias('calcDeltas',calcDeltas)},function(outputs,targets){var output=outputs[this.thread.x];return calcDeltas(calcErrorOutput(output,targets),output)},{output:[this.sizes[layer]],outputToTexture:!0})}else{this.backwardPropagate[layer]=this.gpu.createKernelMap({error:_gpu2.default.alias('calcError',calcError),deltas:_gpu2.default.alias('calcDeltas',calcDeltas)},function(nextWeights,outputs,nextDeltas){var output=outputs[this.thread.x];return calcDeltas(calcError(nextWeights,nextDeltas),output)},{output:[this.sizes[layer]],outputToTexture:!0,constants:{size:this.deltas[layer+1].length}})}}}},{key:'calculateDeltas',value:function calculateDeltas(target,learningRate){for(var layer=this.outputLayer;layer>0;layer--){var output=void 0;if(layer===this.outputLayer){output=this.backwardPropagate[layer](this.outputs[layer],target)}else{output=this.backwardPropagate[layer](this.weights[layer+1],this.outputs[layer],this.deltas[layer+1])}
this.deltas[layer]=output.deltas;this.errors[layer]=output.error}}},{key:'buildGetChanges',value:function buildGetChanges(){for(var layer=1;layer<=this.outputLayer;layer++){this.changesPropagate[layer]=this.gpu.createKernelMap({weights:_gpu2.default.alias('addWeights',addWeights),changes:_gpu2.default.alias('calcChanges',calcChanges)},function(previousOutputs,deltas,weights,changes,learningRate,momentum){var change=calcChanges(changes,deltas,previousOutputs,learningRate,momentum);return addWeights(change,weights)},{output:[this.sizes[layer-1],this.sizes[layer]],outputToTexture:!0,constants:{size:this.outputs[layer-1].length}})}}},{key:'getChanges',value:function getChanges(learningRate){for(var layer=1;layer<=this.outputLayer;layer++){var output=this.changesPropagate[layer](this.outputs[layer-1],this.deltas[layer],this.weights[layer],this.changes[layer],learningRate,this.trainOpts.momentum);this.changes[layer]=output.changes;this.weights[layer]=output.weights}}},{key:'buildChangeBiases',value:function buildChangeBiases(){for(var layer=1;layer<=this.outputLayer;layer++){this.biasesPropagate[layer]=this.gpu.createKernel(addBiases,{output:[this.sizes[layer]],outputToTexture:!0})}}},{key:'changeBiases',value:function changeBiases(learningRate){for(var layer=1;layer<=this.outputLayer;layer++){this.biases[layer]=this.biasesPropagate[layer](this.biases[layer],this.deltas[layer],learningRate)}}},{key:'buildGetMSE',value:function buildGetMSE(){this.getMSE=this.gpu.createKernel(mse,{output:[1],constants:{size:this.sizes[this.outputLayer]}})}},{key:'run',value:function run(input){if(!this.isRunnable)return null;if(this.inputLookup){input=_lookup2.default.toArray(this.inputLookup,input)}
var output=[].concat(_toConsumableArray(this.runInput(input).toArray(this.gpu)));if(this.outputLookup){output=_lookup2.default.toHash(this.outputLookup,output)}
return output}},{key:'_formatData',value:function _formatData(data){var _this2=this;if(!Array.isArray(data)){var tmp=[];tmp.push(data);data=tmp}
var datum=data[0].input;if(!Array.isArray(datum)&&!(datum instanceof Float32Array)){if(!this.inputLookup){this.inputLookup=_lookup2.default.buildLookup(data.map(function(value){return value.input}))}
data=data.map(function(datum){var array=_lookup2.default.toArray(_this2.inputLookup,datum.input);return Object.assign({},datum,{input:array})},this)}
if(!Array.isArray(data[0].output)){if(!this.outputLookup){this.outputLookup=_lookup2.default.buildLookup(data.map(function(value){return value.output}))}
data=data.map(function(datum){var array=_lookup2.default.toArray(_this2.outputLookup,datum.output);return Object.assign({},datum,{output:array})},this)}
return data}},{key:'toFunction',value:function toFunction(){throw new Error('not implemented on NeuralNetworkGPU')}}]);return NeuralNetworkGPU}(_neuralNetwork2.default);exports.default=NeuralNetworkGPU;function weightedSumSigmoid(weights,biases,inputs){var sum=biases[this.thread.x];for(var k=0;k<this.constants.size;k++){sum+=weights[this.thread.x][k]*inputs[k]}
return 1/(1+Math.exp(-sum))}
function weightedSumRelu(weights,biases,inputs){var sum=biases[this.thread.x];for(var k=0;k<this.constants.size;k++){sum+=weights[this.thread.x][k]*inputs[k]}
return sum<0?0:sum}
function weightedSumLeakyRelu(weights,biases,inputs){var sum=biases[this.thread.x];for(var k=0;k<this.constants.size;k++){sum+=weights[this.thread.x][k]*inputs[k]}
return sum<0?0:0.01*sum}
function weightedSumTanh(weights,biases,inputs){var sum=biases[this.thread.x];for(var k=0;k<this.constants.size;k++){sum+=weights[this.thread.x][k]*inputs[k]}
return Math.tanh(sum)}
function calcErrorOutput(output,targets){return targets[this.thread.x]-output}
function calcDeltasSigmoid(error,output){return error*output*(1-output)}
function calcDeltasRelu(error,output){return output>0?error:0}
function calcDeltasLeakyRelu(error,output){return output>0?error:0.01*error}
function calcDeltasTanh(error,output){return(1-output*output)*error}
function calcError(nextWeights,nextDeltas){var error=0;for(var k=0;k<this.constants.size;k++){error+=nextDeltas[k]*nextWeights[k][this.thread.x]}
return error}
function calcChanges(previousChanges,deltas,previousOutputs,learningRate,momentum){return learningRate*deltas[this.thread.y]*previousOutputs[this.thread.x]+momentum*previousChanges[this.thread.y][this.thread.x]}
function addWeights(change,weights){return change+weights[this.thread.y][this.thread.x]}
function addBiases(biases,deltas,learningRate){return biases[this.thread.x]+deltas[this.thread.x]*learningRate}
function mse(errors){var sum=0;for(var i=0;i<this.constants.size;i++){sum+=Math.pow(errors[i],2)}
return sum/this.constants.size}},{"./lookup":5,"./neural-network":7,"gpu.js":79}],7:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _lookup=require('./lookup');var _lookup2=_interopRequireDefault(_lookup);var _trainStream=require('./train-stream');var _trainStream2=_interopRequireDefault(_trainStream);var _max=require('./utilities/max');var _max2=_interopRequireDefault(_max);var _mse=require('./utilities/mse');var _mse2=_interopRequireDefault(_mse);var _randos=require('./utilities/randos');var _randos2=_interopRequireDefault(_randos);var _range=require('./utilities/range');var _range2=_interopRequireDefault(_range);var _toArray=require('./utilities/to-array');var _toArray2=_interopRequireDefault(_toArray);var _zeros=require('./utilities/zeros');var _zeros2=_interopRequireDefault(_zeros);var _thaw=require('thaw.js');var _thaw2=_interopRequireDefault(_thaw);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var NeuralNetwork=function(){_createClass(NeuralNetwork,null,[{key:'_validateTrainingOptions',value:function _validateTrainingOptions(options){var validations={iterations:function iterations(val){return typeof val==='number'&&val>0},errorThresh:function errorThresh(val){return typeof val==='number'&&val>0&&val<1},log:function log(val){return typeof val==='function'||typeof val==='boolean'},logPeriod:function logPeriod(val){return typeof val==='number'&&val>0},learningRate:function learningRate(val){return typeof val==='number'&&val>0&&val<1},momentum:function momentum(val){return typeof val==='number'&&val>0&&val<1},callback:function callback(val){return typeof val==='function'||val===null},callbackPeriod:function callbackPeriod(val){return typeof val==='number'&&val>0},timeout:function timeout(val){return typeof val==='number'&&val>0}};Object.keys(NeuralNetwork.trainDefaults).forEach(function(key){if(validations.hasOwnProperty(key)&&!validations[key](options[key])){throw new Error('['+key+', '+options[key]+'] is out of normal training range, your network will probably not train.')}})}},{key:'trainDefaults',get:function get(){return{iterations:20000,errorThresh:0.005,log:!1,logPeriod:10,learningRate:0.3,momentum:0.1,callback:null,callbackPeriod:10,timeout:Infinity}}},{key:'defaults',get:function get(){return{binaryThresh:0.5,hiddenLayers:[3],activation:'sigmoid'}}}]);function NeuralNetwork(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,NeuralNetwork);Object.assign(this,this.constructor.defaults,options);this.hiddenSizes=options.hiddenLayers;this.trainOpts={};this._updateTrainingOptions(Object.assign({},this.constructor.trainDefaults,options));this.sizes=null;this.outputLayer=null;this.biases=null;this.weights=null;this.outputs=null;this.deltas=null;this.changes=null;this.errors=null;if(!this.constructor.prototype.hasOwnProperty('runInput')){this.runInput=null}
if(!this.constructor.prototype.hasOwnProperty('calculateDeltas')){this.calculateDeltas=null}}
_createClass(NeuralNetwork,[{key:'_initialize',value:function _initialize(){if(!this.sizes)throw new Error('Sizes must be set before initializing');this.outputLayer=this.sizes.length-1;this.biases=[];this.weights=[];this.outputs=[];this.deltas=[];this.changes=[];this.errors=[];for(var layer=0;layer<=this.outputLayer;layer++){var size=this.sizes[layer];this.deltas[layer]=(0,_zeros2.default)(size);this.errors[layer]=(0,_zeros2.default)(size);this.outputs[layer]=(0,_zeros2.default)(size);if(layer>0){this.biases[layer]=(0,_randos2.default)(size);this.weights[layer]=new Array(size);this.changes[layer]=new Array(size);for(var node=0;node<size;node++){var prevSize=this.sizes[layer-1];this.weights[layer][node]=(0,_randos2.default)(prevSize);this.changes[layer][node]=(0,_zeros2.default)(prevSize)}}}
this.setActivation()}},{key:'setActivation',value:function setActivation(activation){this.activation=activation?activation:this.activation;switch(this.activation){case 'sigmoid':this.runInput=this.runInput||this._runInputSigmoid;this.calculateDeltas=this.calculateDeltas||this._calculateDeltasSigmoid;break;case 'relu':this.runInput=this.runInput||this._runInputRelu;this.calculateDeltas=this.calculateDeltas||this._calculateDeltasRelu;break;case 'leaky-relu':this.runInput=this.runInput||this._runInputLeakyRelu;this.calculateDeltas=this.calculateDeltas||this._calculateDeltasLeakyRelu;break;case 'tanh':this.runInput=this.runInput||this._runInputTanh;this.calculateDeltas=this.calculateDeltas||this._calculateDeltasTanh;break;default:throw new Error('unknown activation '+this.activation+', The activation should be one of [\'sigmoid\', \'relu\', \'leaky-relu\', \'tanh\']')}}},{key:'run',value:function run(input){if(!this.isRunnable)return null;if(this.inputLookup){input=_lookup2.default.toArray(this.inputLookup,input)}
var output=[].concat(_toConsumableArray(this.runInput(input)));if(this.outputLookup){output=_lookup2.default.toHash(this.outputLookup,output)}
return output}},{key:'_runInputSigmoid',value:function _runInputSigmoid(input){this.outputs[0]=input;var output=null;for(var layer=1;layer<=this.outputLayer;layer++){for(var node=0;node<this.sizes[layer];node++){var weights=this.weights[layer][node];var sum=this.biases[layer][node];for(var k=0;k<weights.length;k++){sum+=weights[k]*input[k]}
this.outputs[layer][node]=1/(1+Math.exp(-sum))}
output=input=this.outputs[layer]}
return output}},{key:'_runInputRelu',value:function _runInputRelu(input){this.outputs[0]=input;var output=null;for(var layer=1;layer<=this.outputLayer;layer++){for(var node=0;node<this.sizes[layer];node++){var weights=this.weights[layer][node];var sum=this.biases[layer][node];for(var k=0;k<weights.length;k++){sum+=weights[k]*input[k]}
this.outputs[layer][node]=sum<0?0:sum}
output=input=this.outputs[layer]}
return output}},{key:'_runInputLeakyRelu',value:function _runInputLeakyRelu(input){this.outputs[0]=input;var output=null;for(var layer=1;layer<=this.outputLayer;layer++){for(var node=0;node<this.sizes[layer];node++){var weights=this.weights[layer][node];var sum=this.biases[layer][node];for(var k=0;k<weights.length;k++){sum+=weights[k]*input[k]}
this.outputs[layer][node]=sum<0?0:0.01*sum}
output=input=this.outputs[layer]}
return output}},{key:'_runInputTanh',value:function _runInputTanh(input){this.outputs[0]=input;var output=null;for(var layer=1;layer<=this.outputLayer;layer++){for(var node=0;node<this.sizes[layer];node++){var weights=this.weights[layer][node];var sum=this.biases[layer][node];for(var k=0;k<weights.length;k++){sum+=weights[k]*input[k]}
this.outputs[layer][node]=Math.tanh(sum)}
output=input=this.outputs[layer]}
return output}},{key:'_verifyIsInitialized',value:function _verifyIsInitialized(data){var _this=this;if(this.sizes)return;this.sizes=[];this.sizes.push(data[0].input.length);if(!this.hiddenSizes){this.sizes.push(Math.max(3,Math.floor(data[0].input.length/2)))}else{this.hiddenSizes.forEach(function(size){_this.sizes.push(size)})}
this.sizes.push(data[0].output.length);this._initialize()}},{key:'_updateTrainingOptions',value:function _updateTrainingOptions(opts){var _this2=this;Object.keys(NeuralNetwork.trainDefaults).forEach(function(opt){return _this2.trainOpts[opt]=opts.hasOwnProperty(opt)?opts[opt]:_this2.trainOpts[opt]});NeuralNetwork._validateTrainingOptions(this.trainOpts);this._setLogMethod(opts.log||this.trainOpts.log);this.activation=opts.activation||this.activation}},{key:'_getTrainOptsJSON',value:function _getTrainOptsJSON(){var _this3=this;return Object.keys(NeuralNetwork.trainDefaults).reduce(function(opts,opt){if(opt==='timeout'&&_this3.trainOpts[opt]===Infinity)return opts;if(_this3.trainOpts[opt])opts[opt]=_this3.trainOpts[opt];if(opt==='log')opts.log=typeof opts.log==='function';return opts},{})}},{key:'_setLogMethod',value:function _setLogMethod(log){if(typeof log==='function'){this.trainOpts.log=log}else if(log){this.trainOpts.log=console.log}else{this.trainOpts.log=!1}}},{key:'_calculateTrainingError',value:function _calculateTrainingError(data){var sum=0;for(var i=0;i<data.length;++i){sum+=this._trainPattern(data[i].input,data[i].output)}
return sum/data.length}},{key:'_trainingTick',value:function _trainingTick(data,status,endTime){if(status.iterations>=this.trainOpts.iterations||status.error<=this.trainOpts.errorThresh||Date.now()>=endTime){return!1}
status.iterations++;status.error=this._calculateTrainingError(data);if(this.trainOpts.log&&status.iterations%this.trainOpts.logPeriod===0){this.trainOpts.log('iterations: '+status.iterations+', training error: '+status.error)}
if(this.trainOpts.callback&&status.iterations%this.trainOpts.callbackPeriod===0){this.trainOpts.callback(Object.assign(status))}
return!0}},{key:'_prepTraining',value:function _prepTraining(data,options){this._updateTrainingOptions(options);data=this._formatData(data);var endTime=Date.now()+this.trainOpts.timeout;var status={error:1,iterations:0};this._verifyIsInitialized(data);return{data:data,status:status,endTime:endTime}}},{key:'train',value:function train(data){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var status=void 0,endTime=void 0;var _prepTraining2=this._prepTraining(data,options);data=_prepTraining2.data;status=_prepTraining2.status;endTime=_prepTraining2.endTime;while(this._trainingTick(data,status,endTime)){}
return status}},{key:'trainAsync',value:function trainAsync(data){var _this4=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var status=void 0,endTime=void 0;var _prepTraining3=this._prepTraining(data,options);data=_prepTraining3.data;status=_prepTraining3.status;endTime=_prepTraining3.endTime;return new Promise(function(resolve,reject){try{var thawedTrain=new _thaw2.default(new Array(_this4.trainOpts.iterations),{delay:!0,each:function each(){return _this4._trainingTick(data,status,endTime)||thawedTrain.stop()},done:function done(){return resolve(status)}});thawedTrain.tick()}catch(trainError){reject({trainError:trainError,status:status})}})}},{key:'_trainPattern',value:function _trainPattern(input,target){this.runInput(input);this.calculateDeltas(target);this._adjustWeights();return(0,_mse2.default)(this.errors[this.outputLayer])}},{key:'_calculateDeltasSigmoid',value:function _calculateDeltasSigmoid(target){for(var layer=this.outputLayer;layer>=0;layer--){for(var node=0;node<this.sizes[layer];node++){var output=this.outputs[layer][node];var error=0;if(layer===this.outputLayer){error=target[node]-output}else{var deltas=this.deltas[layer+1];for(var k=0;k<deltas.length;k++){error+=deltas[k]*this.weights[layer+1][k][node]}}
this.errors[layer][node]=error;this.deltas[layer][node]=error*output*(1-output)}}}},{key:'_calculateDeltasRelu',value:function _calculateDeltasRelu(target){for(var layer=this.outputLayer;layer>=0;layer--){for(var node=0;node<this.sizes[layer];node++){var output=this.outputs[layer][node];var error=0;if(layer===this.outputLayer){error=target[node]-output}else{var deltas=this.deltas[layer+1];for(var k=0;k<deltas.length;k++){error+=deltas[k]*this.weights[layer+1][k][node]}}
this.errors[layer][node]=error;this.deltas[layer][node]=output>0?error:0}}}},{key:'_calculateDeltasLeakyRelu',value:function _calculateDeltasLeakyRelu(target){for(var layer=this.outputLayer;layer>=0;layer--){for(var node=0;node<this.sizes[layer];node++){var output=this.outputs[layer][node];var error=0;if(layer===this.outputLayer){error=target[node]-output}else{var deltas=this.deltas[layer+1];for(var k=0;k<deltas.length;k++){error+=deltas[k]*this.weights[layer+1][k][node]}}
this.errors[layer][node]=error;this.deltas[layer][node]=output>0?error:0.01*error}}}},{key:'_calculateDeltasTanh',value:function _calculateDeltasTanh(target){for(var layer=this.outputLayer;layer>=0;layer--){for(var node=0;node<this.sizes[layer];node++){var output=this.outputs[layer][node];var error=0;if(layer===this.outputLayer){error=target[node]-output}else{var deltas=this.deltas[layer+1];for(var k=0;k<deltas.length;k++){error+=deltas[k]*this.weights[layer+1][k][node]}}
this.errors[layer][node]=error;this.deltas[layer][node]=(1-output*output)*error}}}},{key:'_adjustWeights',value:function _adjustWeights(){for(var layer=1;layer<=this.outputLayer;layer++){var incoming=this.outputs[layer-1];for(var node=0;node<this.sizes[layer];node++){var delta=this.deltas[layer][node];for(var k=0;k<incoming.length;k++){var change=this.changes[layer][node][k];change=this.trainOpts.learningRate*delta*incoming[k]+this.trainOpts.momentum*change;this.changes[layer][node][k]=change;this.weights[layer][node][k]+=change}
this.biases[layer][node]+=this.trainOpts.learningRate*delta}}}},{key:'_formatData',value:function _formatData(data){var _this5=this;if(!Array.isArray(data)){var tmp=[];tmp.push(data);data=tmp}
var datum=data[0].input;if(!Array.isArray(datum)&&!(datum instanceof Float32Array)){if(!this.inputLookup){this.inputLookup=_lookup2.default.buildLookup(data.map(function(value){return value.input}))}
data=data.map(function(datum){var array=_lookup2.default.toArray(_this5.inputLookup,datum.input);return Object.assign({},datum,{input:array})},this)}
if(!Array.isArray(data[0].output)){if(!this.outputLookup){this.outputLookup=_lookup2.default.buildLookup(data.map(function(value){return value.output}))}
data=data.map(function(datum){var array=_lookup2.default.toArray(_this5.outputLookup,datum.output);return Object.assign({},datum,{output:array})},this)}
return data}},{key:'test',value:function test(data){var _this6=this;data=this._formatData(data);var isBinary=data[0].output.length===1;var falsePos=0;var falseNeg=0;var truePos=0;var trueNeg=0;var misclasses=[];var sum=0;var _loop=function _loop(i){var output=_this6.runInput(data[i].input);var target=data[i].output;var actual=void 0,expected=void 0;if(isBinary){actual=output[0]>_this6.binaryThresh?1:0;expected=target[0]}else{actual=output.indexOf((0,_max2.default)(output));expected=target.indexOf((0,_max2.default)(target))}
if(actual!==expected){var misclass=data[i];Object.assign(misclass,{actual:actual,expected:expected});misclasses.push(misclass)}
if(isBinary){if(actual===0&&expected===0){trueNeg++}else if(actual===1&&expected===1){truePos++}else if(actual===0&&expected===1){falseNeg++}else if(actual===1&&expected===0){falsePos++}}
var errors=output.map(function(value,i){return target[i]-value});sum+=(0,_mse2.default)(errors)};for(var i=0;i<data.length;i++){_loop(i)}
var error=sum/data.length;var stats={error:error,misclasses:misclasses};if(isBinary){Object.assign(stats,{trueNeg:trueNeg,truePos:truePos,falseNeg:falseNeg,falsePos:falsePos,total:data.length,precision:truePos/(truePos+falsePos),recall:truePos/(truePos+falseNeg),accuracy:(trueNeg+truePos)/data.length})}
return stats}},{key:'toJSON',value:function toJSON(){var layers=[];for(var layer=0;layer<=this.outputLayer;layer++){layers[layer]={};var nodes=void 0;if(layer===0&&this.inputLookup){nodes=Object.keys(this.inputLookup)}else if(layer===this.outputLayer&&this.outputLookup){nodes=Object.keys(this.outputLookup)}else{nodes=(0,_range2.default)(0,this.sizes[layer])}
for(var j=0;j<nodes.length;j++){var node=nodes[j];layers[layer][node]={};if(layer>0){layers[layer][node].bias=this.biases[layer][j];layers[layer][node].weights={};for(var k in layers[layer-1]){var index=k;if(layer===1&&this.inputLookup){index=this.inputLookup[k]}
layers[layer][node].weights[k]=this.weights[layer][j][index]}}}}
return{sizes:this.sizes,layers:layers,outputLookup:!!this.outputLookup,inputLookup:!!this.inputLookup,activation:this.activation,trainOpts:this._getTrainOptsJSON()}}},{key:'fromJSON',value:function fromJSON(json){this.sizes=json.sizes;this._initialize();for(var i=0;i<=this.outputLayer;i++){var layer=json.layers[i];if(i===0&&(!layer[0]||json.inputLookup)){this.inputLookup=_lookup2.default.lookupFromHash(layer)}else if(i===this.outputLayer&&(!layer[0]||json.outputLookup)){this.outputLookup=_lookup2.default.lookupFromHash(layer)}
if(i>0){var nodes=Object.keys(layer);this.sizes[i]=nodes.length;for(var j in nodes){var node=nodes[j];this.biases[i][j]=layer[node].bias;this.weights[i][j]=(0,_toArray2.default)(layer[node].weights)}}}
if(json.hasOwnProperty('trainOpts')){this._updateTrainingOptions(json.trainOpts)}
this.setActivation(this.activation||'sigmoid');return this}},{key:'toFunction',value:function toFunction(){var activation=this.activation;function nodeHandle(layers,layerNumber,nodeKey){if(layerNumber===0){return typeof nodeKey==='string'?'input[\''+nodeKey+'\']':'input['+nodeKey+']'}
var layer=layers[layerNumber];var node=layer[nodeKey];var result=[node.bias];for(var w in node.weights){if(node.weights[w]<0){result.push(node.weights[w]+'*('+nodeHandle(layers,layerNumber-1,w)+')')}else{result.push('+'+node.weights[w]+'*('+nodeHandle(layers,layerNumber-1,w)+')')}}
switch(activation){case 'sigmoid':return'1/(1+1/Math.exp('+result.join('')+'))';case 'relu':return'var sum = '+result.join('')+';(sum < 0 ? 0 : sum);';case 'leaky-relu':return'var sum = '+result.join('')+';(sum < 0 ? 0 : 0.01 * sum);';case 'tanh':return'Math.tanh('+result.join('')+');';default:throw new Error('unknown activation type '+activation)}}
var layers=this.toJSON().layers;var layersAsMath=[];var result=void 0;for(var i in layers[layers.length-1]){layersAsMath.push(nodeHandle(layers,layers.length-1,i))}
if(this.outputLookup){result='{'+Object.keys(this.outputLookup).map(function(key,i){return'\''+key+'\':'+layersAsMath[i]})+'}'}else{result='['+layersAsMath.join(',')+']'}
return new Function('input','return '+result)}},{key:'createTrainStream',value:function createTrainStream(opts){opts=opts||{};opts.neuralNetwork=this;this.setActivation();this.trainStream=new _trainStream2.default(opts);return this.trainStream}},{key:'isRunnable',get:function get(){var _this7=this;if(!this.runInput){console.error('Activation function has not been initialized, did you run train()?');return!1}
var checkFns=['sizes','outputLayer','biases','weights','outputs','deltas','changes','errors'].filter(function(c){return _this7[c]===null});if(checkFns.length>0){console.error('Some settings have not been initialized correctly, did you run train()? Found issues with: '+checkFns.join(', '));return!1}
return!0}}]);return NeuralNetwork}();exports.default=NeuralNetwork},{"./lookup":5,"./train-stream":35,"./utilities/max":37,"./utilities/mse":38,"./utilities/randos":42,"./utilities/range":43,"./utilities/to-array":44,"./utilities/zeros":45,"thaw.js":81}],8:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _matrix=require('./matrix');var _matrix2=_interopRequireDefault(_matrix);var _randomMatrix=require('./matrix/random-matrix');var _randomMatrix2=_interopRequireDefault(_randomMatrix);var _rnn=require('./rnn');var _rnn2=_interopRequireDefault(_rnn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var GRU=function(_RNN){_inherits(GRU,_RNN);function GRU(){_classCallCheck(this,GRU);return _possibleConstructorReturn(this,(GRU.__proto__||Object.getPrototypeOf(GRU)).apply(this,arguments))}
_createClass(GRU,[{key:'getModel',value:function getModel(hiddenSize,prevSize){return{updateGateInputMatrix:new _randomMatrix2.default(hiddenSize,prevSize,0.08),updateGateHiddenMatrix:new _randomMatrix2.default(hiddenSize,hiddenSize,0.08),updateGateBias:new _matrix2.default(hiddenSize,1),resetGateInputMatrix:new _randomMatrix2.default(hiddenSize,prevSize,0.08),resetGateHiddenMatrix:new _randomMatrix2.default(hiddenSize,hiddenSize,0.08),resetGateBias:new _matrix2.default(hiddenSize,1),cellWriteInputMatrix:new _randomMatrix2.default(hiddenSize,prevSize,0.08),cellWriteHiddenMatrix:new _randomMatrix2.default(hiddenSize,hiddenSize,0.08),cellWriteBias:new _matrix2.default(hiddenSize,1)}}},{key:'getEquation',value:function getEquation(equation,inputMatrix,previousResult,hiddenLayer){var sigmoid=equation.sigmoid.bind(equation);var add=equation.add.bind(equation);var multiply=equation.multiply.bind(equation);var multiplyElement=equation.multiplyElement.bind(equation);var tanh=equation.tanh.bind(equation);var allOnes=equation.allOnes.bind(equation);var cloneNegative=equation.cloneNegative.bind(equation);var updateGate=sigmoid(add(add(multiply(hiddenLayer.updateGateInputMatrix,inputMatrix),multiply(hiddenLayer.updateGateHiddenMatrix,previousResult)),hiddenLayer.updateGateBias));var resetGate=sigmoid(add(add(multiply(hiddenLayer.resetGateInputMatrix,inputMatrix),multiply(hiddenLayer.resetGateHiddenMatrix,previousResult)),hiddenLayer.resetGateBias));var cell=tanh(add(add(multiply(hiddenLayer.cellWriteInputMatrix,inputMatrix),multiply(hiddenLayer.cellWriteHiddenMatrix,multiplyElement(resetGate,previousResult))),hiddenLayer.cellWriteBias));return add(multiplyElement(add(allOnes(updateGate.rows,updateGate.columns),cloneNegative(updateGate)),cell),multiplyElement(previousResult,updateGate))}}]);return GRU}(_rnn2.default);exports.default=GRU},{"./matrix":16,"./matrix/random-matrix":23,"./rnn":34}],9:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _matrix=require('./matrix');var _matrix2=_interopRequireDefault(_matrix);var _randomMatrix=require('./matrix/random-matrix');var _randomMatrix2=_interopRequireDefault(_randomMatrix);var _rnn=require('./rnn');var _rnn2=_interopRequireDefault(_rnn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var LSTM=function(_RNN){_inherits(LSTM,_RNN);function LSTM(){_classCallCheck(this,LSTM);return _possibleConstructorReturn(this,(LSTM.__proto__||Object.getPrototypeOf(LSTM)).apply(this,arguments))}
_createClass(LSTM,[{key:'getModel',value:function getModel(hiddenSize,prevSize){return{inputMatrix:new _randomMatrix2.default(hiddenSize,prevSize,0.08),inputHidden:new _randomMatrix2.default(hiddenSize,hiddenSize,0.08),inputBias:new _matrix2.default(hiddenSize,1),forgetMatrix:new _randomMatrix2.default(hiddenSize,prevSize,0.08),forgetHidden:new _randomMatrix2.default(hiddenSize,hiddenSize,0.08),forgetBias:new _matrix2.default(hiddenSize,1),outputMatrix:new _randomMatrix2.default(hiddenSize,prevSize,0.08),outputHidden:new _randomMatrix2.default(hiddenSize,hiddenSize,0.08),outputBias:new _matrix2.default(hiddenSize,1),cellActivationMatrix:new _randomMatrix2.default(hiddenSize,prevSize,0.08),cellActivationHidden:new _randomMatrix2.default(hiddenSize,hiddenSize,0.08),cellActivationBias:new _matrix2.default(hiddenSize,1)}}},{key:'getEquation',value:function getEquation(equation,inputMatrix,previousResult,hiddenLayer){var sigmoid=equation.sigmoid.bind(equation);var add=equation.add.bind(equation);var multiply=equation.multiply.bind(equation);var multiplyElement=equation.multiplyElement.bind(equation);var tanh=equation.tanh.bind(equation);var inputGate=sigmoid(add(add(multiply(hiddenLayer.inputMatrix,inputMatrix),multiply(hiddenLayer.inputHidden,previousResult)),hiddenLayer.inputBias));var forgetGate=sigmoid(add(add(multiply(hiddenLayer.forgetMatrix,inputMatrix),multiply(hiddenLayer.forgetHidden,previousResult)),hiddenLayer.forgetBias));var outputGate=sigmoid(add(add(multiply(hiddenLayer.outputMatrix,inputMatrix),multiply(hiddenLayer.outputHidden,previousResult)),hiddenLayer.outputBias));var cellWrite=tanh(add(add(multiply(hiddenLayer.cellActivationMatrix,inputMatrix),multiply(hiddenLayer.cellActivationHidden,previousResult)),hiddenLayer.cellActivationBias));var retainCell=multiplyElement(forgetGate,previousResult);var writeCell=multiplyElement(inputGate,cellWrite);var cell=add(retainCell,writeCell);return multiplyElement(outputGate,tanh(cell))}}]);return LSTM}(_rnn2.default);exports.default=LSTM},{"./matrix":16,"./matrix/random-matrix":23,"./rnn":34}],10:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=addB;function addB(product,left,right){for(var i=0;i<product.deltas.length;i++){left.deltas[i]=product.deltas[i];right.deltas[i]=product.deltas[i]}}},{}],11:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=add;function add(product,left,right){for(var i=0;i<left.weights.length;i++){product.weights[i]=left.weights[i]+right.weights[i];product.deltas[i]=0}}},{}],12:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=allOnes;function allOnes(product){for(var i=0;i<product.weights.length;i++){product.weights[i]=1;product.deltas[i]=0}}},{}],13:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=cloneNegative;function cloneNegative(product,left){product.rows=parseInt(left.rows);product.columns=parseInt(left.columns);product.weights=left.weights.slice(0);product.deltas=left.deltas.slice(0);for(var i=0;i<left.weights.length;i++){product.weights[i]=-left.weights[i];product.deltas[i]=0}}},{}],14:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=copy;function copy(product,left){product.rows=parseInt(left.rows);product.columns=parseInt(left.columns);product.weights=left.weights.slice(0);product.deltas=left.deltas.slice(0)}},{}],15:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _=require('./');var _2=_interopRequireDefault(_);var _onesMatrix=require('./ones-matrix');var _onesMatrix2=_interopRequireDefault(_onesMatrix);var _copy=require('./copy');var _copy2=_interopRequireDefault(_copy);var _cloneNegative2=require('./clone-negative');var _cloneNegative3=_interopRequireDefault(_cloneNegative2);var _add2=require('./add');var _add3=_interopRequireDefault(_add2);var _addB=require('./add-b');var _addB2=_interopRequireDefault(_addB);var _allOnes2=require('./all-ones');var _allOnes3=_interopRequireDefault(_allOnes2);var _multiply2=require('./multiply');var _multiply3=_interopRequireDefault(_multiply2);var _multiplyB=require('./multiply-b');var _multiplyB2=_interopRequireDefault(_multiplyB);var _multiplyElement2=require('./multiply-element');var _multiplyElement3=_interopRequireDefault(_multiplyElement2);var _multiplyElementB=require('./multiply-element-b');var _multiplyElementB2=_interopRequireDefault(_multiplyElementB);var _relu2=require('./relu');var _relu3=_interopRequireDefault(_relu2);var _reluB=require('./relu-b');var _reluB2=_interopRequireDefault(_reluB);var _rowPluck=require('./row-pluck');var _rowPluck2=_interopRequireDefault(_rowPluck);var _rowPluckB=require('./row-pluck-b');var _rowPluckB2=_interopRequireDefault(_rowPluckB);var _sigmoid2=require('./sigmoid');var _sigmoid3=_interopRequireDefault(_sigmoid2);var _sigmoidB=require('./sigmoid-b');var _sigmoidB2=_interopRequireDefault(_sigmoidB);var _tanh2=require('./tanh');var _tanh3=_interopRequireDefault(_tanh2);var _tanhB=require('./tanh-b');var _tanhB2=_interopRequireDefault(_tanhB);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var Equation=function(){function Equation(){_classCallCheck(this,Equation);this.inputRow=0;this.states=[]}
_createClass(Equation,[{key:'add',value:function add(left,right){if(left.weights.length!==right.weights.length){throw new Error('misaligned matrices')}
var product=new _2.default(left.rows,left.columns);this.states.push({left:left,right:right,product:product,forwardFn:_add3.default,backpropagationFn:_addB2.default});return product}},{key:'allOnes',value:function allOnes(rows,columns){var product=new _2.default(rows,columns);this.states.push({left:product,product:product,forwardFn:_allOnes3.default});return product}},{key:'cloneNegative',value:function cloneNegative(m){var product=new _2.default(m.rows,m.columns);this.states.push({left:m,product:product,forwardFn:_cloneNegative3.default});return product}},{key:'subtract',value:function subtract(left,right){if(left.weights.length!==right.weights.length){throw new Error('misaligned matrices')}
return this.add(this.add(this.allOnes(left.rows,left.columns),this.cloneNegative(left)),right)}},{key:'multiply',value:function multiply(left,right){if(left.columns!==right.rows){throw new Error('misaligned matrices')}
var product=new _2.default(left.rows,right.columns);this.states.push({left:left,right:right,product:product,forwardFn:_multiply3.default,backpropagationFn:_multiplyB2.default});return product}},{key:'multiplyElement',value:function multiplyElement(left,right){if(left.weights.length!==right.weights.length){throw new Error('misaligned matrices')}
var product=new _2.default(left.rows,left.columns);this.states.push({left:left,right:right,product:product,forwardFn:_multiplyElement3.default,backpropagationFn:_multiplyElementB2.default});return product}},{key:'relu',value:function relu(m){var product=new _2.default(m.rows,m.columns);this.states.push({left:m,product:product,forwardFn:_relu3.default,backpropagationFn:_reluB2.default});return product}},{key:'inputMatrixToRow',value:function inputMatrixToRow(m){var self=this;var product=new _2.default(m.columns,1);this.states.push({left:m,get right(){return self.inputRow},product:product,forwardFn:_rowPluck2.default,backpropagationFn:_rowPluckB2.default});return product}},{key:'sigmoid',value:function sigmoid(m){var product=new _2.default(m.rows,m.columns);this.states.push({left:m,product:product,forwardFn:_sigmoid3.default,backpropagationFn:_sigmoidB2.default});return product}},{key:'tanh',value:function tanh(m){var product=new _2.default(m.rows,m.columns);this.states.push({left:m,product:product,forwardFn:_tanh3.default,backpropagationFn:_tanhB2.default});return product}},{key:'observe',value:function observe(m){var iForward=0;var iBackpropagate=0;this.states.push({forwardFn:function forwardFn(){iForward++},backpropagationFn:function backpropagationFn(){iBackpropagate++}});return m}},{key:'run',value:function run(){var rowIndex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;this.inputRow=rowIndex;var state=void 0;for(var i=0,max=this.states.length;i<max;i++){state=this.states[i];if(!state.hasOwnProperty('forwardFn')){continue}
state.forwardFn(state.product,state.left,state.right)}
return state.product}},{key:'runBackpropagate',value:function runBackpropagate(){var rowIndex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;this.inputRow=rowIndex;var i=this.states.length;var state=void 0;while(i-->0){state=this.states[i];if(!state.hasOwnProperty('backpropagationFn')){continue}
state.backpropagationFn(state.product,state.left,state.right)}
return state.product}}]);return Equation}();exports.default=Equation},{"./":16,"./add":11,"./add-b":10,"./all-ones":12,"./clone-negative":13,"./copy":14,"./multiply":21,"./multiply-b":18,"./multiply-element":20,"./multiply-element-b":19,"./ones-matrix":22,"./relu":25,"./relu-b":24,"./row-pluck":27,"./row-pluck-b":26,"./sigmoid":30,"./sigmoid-b":29,"./tanh":33,"./tanh-b":32}],16:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _zeros=require('../../utilities/zeros');var _zeros2=_interopRequireDefault(_zeros);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var Matrix=function(){function Matrix(rows,columns){_classCallCheck(this,Matrix);if(rows===undefined)return;if(columns===undefined)return;this.rows=rows;this.columns=columns;this.weights=(0,_zeros2.default)(rows*columns);this.deltas=(0,_zeros2.default)(rows*columns)}
_createClass(Matrix,[{key:'getWeights',value:function getWeights(row,col){var ix=this.columns*row+col;if(ix<0&&ix>=this.weights.length)throw new Error('get accessor is skewed');return this.weights[ix]}},{key:'setWeight',value:function setWeight(row,col,v){var ix=this.columns*row+col;if(ix<0&&ix>=this.weights.length)throw new Error('set accessor is skewed');this.weights[ix]=v}},{key:'setDeltas',value:function setDeltas(row,col,v){var ix=this.columns*row+col;if(ix<0&&ix>=this.weights.length)throw new Error('set accessor is skewed');this.deltas[ix]=v}},{key:'toJSON',value:function toJSON(){return{rows:this.rows,columns:this.columns,weights:this.weights.slice(0)}}},{key:'weightsToArray',value:function weightsToArray(){var deltas=[];var row=0;var column=0;for(var i=0;i<this.weights.length;i++){if(column===0){deltas.push([])}
deltas[row].push(this.weights[i]);column++;if(column>=this.columns){column=0;row++}}
return deltas}},{key:'deltasToArray',value:function deltasToArray(){var deltas=[];var row=0;var column=0;for(var i=0;i<this.deltas.length;i++){if(column===0){deltas.push([])}
deltas[row].push(this.deltas[i]);column++;if(column>=this.columns){column=0;row++}}
return deltas}}],[{key:'fromJSON',value:function fromJSON(json){var matrix=new Matrix(json.rows,json.columns);for(var i=0,max=json.rows*json.columns;i<max;i++){matrix.weights[i]=json.weights[i]}
return matrix}},{key:'fromArray',value:function fromArray(weightRows,deltasRows){var rows=weightRows.length;var columns=weightRows[0].length;var m=new Matrix(rows,columns);deltasRows=deltasRows||weightRows;for(var rowIndex=0;rowIndex<rows;rowIndex++){var weightValues=weightRows[rowIndex];var deltasValues=deltasRows[rowIndex];for(var columnIndex=0;columnIndex<columns;columnIndex++){m.setWeight(rowIndex,columnIndex,weightValues[columnIndex]);m.setDeltas(rowIndex,columnIndex,deltasValues[columnIndex])}}
return m}}]);return Matrix}();exports.default=Matrix},{"../../utilities/zeros":45}],17:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=maxI;function maxI(m){var weights=m.weights;var maxv=weights[0];var maxix=0;for(var i=1;i<weights.length;i++){var v=weights[i];if(v<maxv)continue;maxix=i;maxv=v}
return maxix}},{}],18:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=multiplyB;function multiplyB(product,left,right){var leftRows=left.rows;var leftColumns=left.columns;var rightColumns=right.columns;for(var leftRow=0;leftRow<leftRows;leftRow++){var leftRowBase=leftColumns*leftRow;var rightRowBase=rightColumns*leftRow;for(var rightColumn=0;rightColumn<rightColumns;rightColumn++){for(var leftColumn=0;leftColumn<leftColumns;leftColumn++){var rightColumnBase=rightColumns*leftColumn;var _leftRow=leftRowBase+leftColumn;var rightRow=rightColumnBase+rightColumn;var backPropagateValue=product.deltas[rightRowBase+rightColumn];left.deltas[_leftRow]+=right.weights[rightRow]*backPropagateValue;right.deltas[rightRow]+=left.weights[_leftRow]*backPropagateValue}}}}},{}],19:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=multiplyElementB;function multiplyElementB(product,left,right){for(var i=0;i<left.weights.length;i++){left.deltas[i]=right.weights[i]*product.deltas[i];right.deltas[i]=left.weights[i]*product.deltas[i]}}},{}],20:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=multiplyElement;function multiplyElement(product,left,right){var weights=left.weights;for(var i=0;i<weights.length;i++){product.weights[i]=left.weights[i]*right.weights[i];product.deltas[i]=0}}},{}],21:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=multiply;function multiply(product,left,right){var leftRows=left.rows;var leftColumns=left.columns;var rightColumns=right.columns;for(var leftRow=0;leftRow<leftRows;leftRow++){var leftRowBase=leftColumns*leftRow;var rightRowBase=rightColumns*leftRow;for(var rightColumn=0;rightColumn<rightColumns;rightColumn++){var dot=0;for(var leftColumn=0;leftColumn<leftColumns;leftColumn++){var rightColumnBase=rightColumns*leftColumn;var leftIndex=leftRowBase+leftColumn;var rightIndex=rightColumnBase+rightColumn;dot+=left.weights[leftIndex]*right.weights[rightIndex];left.deltas[leftIndex]=0;right.deltas[rightIndex]=0}
product.weights[rightRowBase+rightColumn]=dot}}}},{}],22:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _=require('./');var _2=_interopRequireDefault(_);var _ones=require('../../utilities/ones');var _ones2=_interopRequireDefault(_ones);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var OnesMatrix=function(_Matrix){_inherits(OnesMatrix,_Matrix);function OnesMatrix(rows,columns){_classCallCheck(this,OnesMatrix);var _this=_possibleConstructorReturn(this,(OnesMatrix.__proto__||Object.getPrototypeOf(OnesMatrix)).call(this,rows,columns));_this.rows=rows;_this.columns=columns;_this.weights=(0,_ones2.default)(rows*columns);_this.deltas=(0,_ones2.default)(rows*columns);return _this}
return OnesMatrix}(_2.default);exports.default=OnesMatrix},{"../../utilities/ones":39,"./":16}],23:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _=require('./');var _2=_interopRequireDefault(_);var _random=require('../../utilities/random');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var RandomMatrix=function(_Matrix){_inherits(RandomMatrix,_Matrix);function RandomMatrix(rows,columns,std){_classCallCheck(this,RandomMatrix);var _this=_possibleConstructorReturn(this,(RandomMatrix.__proto__||Object.getPrototypeOf(RandomMatrix)).call(this,rows,columns));_this.rows=rows;_this.columns=columns;_this.std=std;for(var i=0,max=_this.weights.length;i<max;i++){_this.weights[i]=(0,_random.randomF)(-std,std)}
return _this}
return RandomMatrix}(_2.default);exports.default=RandomMatrix},{"../../utilities/random":41,"./":16}],24:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=reluB;function reluB(product,left){for(var i=0;i<product.deltas.length;i++){left.deltas[i]=left.weights[i]>0?product.deltas[i]:0}}},{}],25:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=relu;function relu(product,left){for(var i=0;i<left.weights.length;i++){product.weights[i]=Math.max(0,left.weights[i]);product.deltas[i]=0}}},{}],26:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=rowPluckB;function rowPluckB(product,left,rowIndex){var columns=left.columns;var rowBase=columns*rowIndex;for(var column=0;column<columns;column++){left.deltas[rowBase+column]=product.deltas[column]}}},{}],27:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=rowPluck;function rowPluck(product,left,rowPluckIndex){var columns=left.columns;var rowBase=columns*rowPluckIndex;for(var column=0;column<columns;column++){product.weights[column]=left.weights[rowBase+column];product.deltas[column]=0}}},{}],28:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});exports.default=sampleI;var _random=require('../../utilities/random');var randomF=_random.randomF;function sampleI(m){var r=randomF(0,1);var x=0;var i=0;var w=m.weights;while(!0){x+=w[i];if(x>r){return i}
i++}}},{"../../utilities/random":41}],29:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=sigmoidB;function sigmoidB(product,left){for(var i=0;i<product.deltas.length;i++){var mwi=product.weights[i];left.deltas[i]=mwi*(1-mwi)*product.deltas[i]}}},{}],30:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=sigmoid;function sigmoid(product,left){for(var i=0;i<left.weights.length;i++){product.weights[i]=1/(1+Math.exp(-left.weights[i]));product.deltas[i]=0}}
function sig(x){return 1/(1+Math.exp(-x))}},{}],31:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});exports.default=softmax;var _=require('./');var _2=_interopRequireDefault(_);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function softmax(m){var result=new _2.default(m.rows,m.columns);var maxVal=-999999;for(var i=0;i<m.weights.length;i++){if(m.weights[i]>maxVal){maxVal=m.weights[i]}}
var s=0;for(var _i=0;_i<m.weights.length;_i++){result.weights[_i]=Math.exp(m.weights[_i]-maxVal);s+=result.weights[_i]}
for(var _i2=0;_i2<m.weights.length;_i2++){result.weights[_i2]/=s}
return result}},{"./":16}],32:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=tanhB;function tanhB(product,left){for(var i=0;i<product.deltas.length;i++){var mwi=product.weights[i];left.deltas[i]=(1-mwi*mwi)*product.deltas[i]}}},{}],33:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=tanh;function tanh(product,left){for(var i=0;i<left.weights.length;i++){product.weights[i]=Math.tanh(left.weights[i]);product.deltas[i]=0}}},{}],34:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _matrix=require('./matrix');var _matrix2=_interopRequireDefault(_matrix);var _randomMatrix=require('./matrix/random-matrix');var _randomMatrix2=_interopRequireDefault(_randomMatrix);var _equation=require('./matrix/equation');var _equation2=_interopRequireDefault(_equation);var _sampleI=require('./matrix/sample-i');var _sampleI2=_interopRequireDefault(_sampleI);var _maxI=require('./matrix/max-i');var _maxI2=_interopRequireDefault(_maxI);var _softmax=require('./matrix/softmax');var _softmax2=_interopRequireDefault(_softmax);var _copy=require('./matrix/copy');var _copy2=_interopRequireDefault(_copy);var _random=require('../utilities/random');var _zeros=require('../utilities/zeros');var _zeros2=_interopRequireDefault(_zeros);var _dataFormatter=require('../utilities/data-formatter');var _dataFormatter2=_interopRequireDefault(_dataFormatter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var RNN=function(){function RNN(){var _this=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,RNN);var defaults=RNN.defaults;for(var p in defaults){if(!defaults.hasOwnProperty(p))continue;this[p]=options.hasOwnProperty(p)?options[p]:defaults[p]}
this.stepCache={};this.runs=0;this.totalCost=null;this.ratioClipped=null;this.model=null;this.initialLayerInputs=this.hiddenSizes.map(function(size){return new _matrix2.default(_this.hiddenSizes[0],1)});this.inputLookup=null;this.outputLookup=null;this.initialize()}
_createClass(RNN,[{key:'initialize',value:function initialize(){this.model={input:null,hiddenLayers:[],output:null,equations:[],allMatrices:[],equationConnections:[]};if(this.dataFormatter!==null){this.inputSize=this.inputRange=this.outputSize=this.dataFormatter.characters.length}
if(this.json){this.fromJSON(this.json)}else{this.mapModel()}}},{key:'createHiddenLayers',value:function createHiddenLayers(){var hiddenSizes=this.hiddenSizes;var model=this.model;var hiddenLayers=model.hiddenLayers;hiddenLayers.push(this.getModel(hiddenSizes[0],this.inputSize));var prevSize=hiddenSizes[0];for(var d=1;d<hiddenSizes.length;d++){var hiddenSize=hiddenSizes[d];hiddenLayers.push(this.getModel(hiddenSize,prevSize));prevSize=hiddenSize}}},{key:'getModel',value:function getModel(hiddenSize,prevSize){return{weight:new _randomMatrix2.default(hiddenSize,prevSize,0.08),transition:new _randomMatrix2.default(hiddenSize,hiddenSize,0.08),bias:new _matrix2.default(hiddenSize,1)}}},{key:'getEquation',value:function getEquation(equation,inputMatrix,previousResult,hiddenLayer){var relu=equation.relu.bind(equation);var add=equation.add.bind(equation);var multiply=equation.multiply.bind(equation);return relu(add(add(multiply(hiddenLayer.weight,inputMatrix),multiply(hiddenLayer.transition,previousResult)),hiddenLayer.bias))}},{key:'createInputMatrix',value:function createInputMatrix(){this.model.input=new _randomMatrix2.default(this.inputRange+1,this.inputSize,0.08)}},{key:'createOutputMatrix',value:function createOutputMatrix(){var model=this.model;var outputSize=this.outputSize;var lastHiddenSize=this.hiddenSizes[this.hiddenSizes.length-1];model.outputConnector=new _randomMatrix2.default(outputSize+1,lastHiddenSize,0.08);model.output=new _matrix2.default(outputSize+1,1)}},{key:'bindEquation',value:function bindEquation(){var model=this.model;var hiddenSizes=this.hiddenSizes;var hiddenLayers=model.hiddenLayers;var equation=new _equation2.default();var outputs=[];var equationConnection=model.equationConnections.length>0?model.equationConnections[model.equationConnections.length-1]:this.initialLayerInputs;var output=this.getEquation(equation,equation.inputMatrixToRow(model.input),equationConnection[0],hiddenLayers[0]);outputs.push(output);for(var i=1,max=hiddenSizes.length;i<max;i++){output=this.getEquation(equation,output,equationConnection[i],hiddenLayers[i]);outputs.push(output)}
model.equationConnections.push(outputs);equation.add(equation.multiply(model.outputConnector,output),model.output);model.equations.push(equation)}},{key:'mapModel',value:function mapModel(){var model=this.model;var hiddenLayers=model.hiddenLayers;var allMatrices=model.allMatrices;this.createInputMatrix();if(!model.input)throw new Error('net.model.input not set');allMatrices.push(model.input);this.createHiddenLayers();if(!model.hiddenLayers.length)throw new Error('net.hiddenLayers not set');for(var i=0,max=hiddenLayers.length;i<max;i++){var hiddenMatrix=hiddenLayers[i];for(var property in hiddenMatrix){if(!hiddenMatrix.hasOwnProperty(property))continue;allMatrices.push(hiddenMatrix[property])}}
this.createOutputMatrix();if(!model.outputConnector)throw new Error('net.model.outputConnector not set');if(!model.output)throw new Error('net.model.output not set');allMatrices.push(model.outputConnector);allMatrices.push(model.output)}},{key:'trainPattern',value:function trainPattern(input){var learningRate=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var error=this.runInput(input);this.runBackpropagate(input);this.step(learningRate);return error}},{key:'runInput',value:function runInput(input){this.runs++;var model=this.model;var max=input.length;var log2ppl=0;var cost=0;var equation=void 0;while(model.equations.length<=input.length+1){this.bindEquation()}
for(var inputIndex=-1,inputMax=input.length;inputIndex<inputMax;inputIndex++){var equationIndex=inputIndex+1;equation=model.equations[equationIndex];var source=inputIndex===-1?0:input[inputIndex]+1;var target=inputIndex===max-1?0:input[inputIndex+1]+1;var output=equation.run(source);var logProbabilities=output;var probabilities=(0,_softmax2.default)(output);log2ppl+=-Math.log2(probabilities.weights[target]);cost+=-Math.log(probabilities.weights[target]);logProbabilities.deltas=probabilities.weights.slice(0);logProbabilities.deltas[target]-=1}
this.totalCost=cost;return Math.pow(2,log2ppl/(max-1))}},{key:'runBackpropagate',value:function runBackpropagate(input){var i=input.length;var model=this.model;var equations=model.equations;while(i>0){equations[i].runBackpropagate(input[i-1]+1);i--}
equations[0].runBackpropagate(0)}},{key:'step',value:function step(){var learningRate=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var stepSize=this.learningRate;var regc=this.regc;var clipval=this.clipval;var model=this.model;var numClipped=0;var numTot=0;var allMatrices=model.allMatrices;for(var matrixIndex=0;matrixIndex<allMatrices.length;matrixIndex++){var matrix=allMatrices[matrixIndex];var weights=matrix.weights,deltas=matrix.deltas;if(!(matrixIndex in this.stepCache)){this.stepCache[matrixIndex]=(0,_zeros2.default)(matrix.rows*matrix.columns)}
var cache=this.stepCache[matrixIndex];for(var i=0;i<weights.length;i++){var r=deltas[i];var w=weights[i];cache[i]=cache[i]*this.decayRate+(1-this.decayRate)*r*r;if(r>clipval){r=clipval;numClipped++}
if(r<-clipval){r=-clipval;numClipped++}
numTot++;weights[i]=w+ -stepSize*r/Math.sqrt(cache[i]+this.smoothEps)-regc*w}}
this.ratioClipped=numClipped/numTot}},{key:'run',value:function run(){var rawInput=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var maxPredictionLength=arguments.length>1&&arguments[1]!==undefined?arguments[1]:100;var isSampleI=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var temperature=arguments.length>3&&arguments[3]!==undefined?arguments[3]:1;if(!this.isRunnable)return null;var input=this.formatDataIn(rawInput);var model=this.model;var output=[];var i=0;while(model.equations.length<maxPredictionLength){this.bindEquation()}
while(!0){var previousIndex=i===0?0:i<input.length?input[i-1]+1:output[i-1];var equation=model.equations[i];var outputMatrix=equation.run(previousIndex);var logProbabilities=new _matrix2.default(model.output.rows,model.output.columns);(0,_copy2.default)(logProbabilities,outputMatrix);if(temperature!==1&&isSampleI){for(var j=0,max=logProbabilities.weights.length;j<max;j++){logProbabilities.weights[j]/=temperature}}
var probs=(0,_softmax2.default)(logProbabilities);var nextIndex=isSampleI?(0,_sampleI2.default)(probs):(0,_maxI2.default)(probs);i++;if(nextIndex===0){break}
if(i>=maxPredictionLength){break}
output.push(nextIndex)}
return this.formatDataOut(input,output.slice(input.length).map(function(value){return value-1}))}},{key:'train',value:function train(data){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};options=Object.assign({},RNN.trainDefaults,options);var iterations=options.iterations;var errorThresh=options.errorThresh;var log=options.log===!0?console.log:options.log;var logPeriod=options.logPeriod;var learningRate=options.learningRate||this.learningRate;var callback=options.callback;var callbackPeriod=options.callbackPeriod;var error=Infinity;var i=void 0;if(this.hasOwnProperty('setupData')){data=this.setupData(data)}
if(!options.keepNetworkIntact){this.initialize()}
for(i=0;i<iterations&&error>errorThresh;i++){var sum=0;for(var j=0;j<data.length;j++){var err=this.trainPattern(data[j],learningRate);sum+=err}
error=sum/data.length;if(isNaN(error))throw new Error('network error rate is unexpected NaN, check network configurations and try again');if(log&&i%logPeriod==0){log('iterations:',i,'training error:',error)}
if(callback&&i%callbackPeriod==0){callback({error:error,iterations:i})}}
return{error:error,iterations:i}}},{key:'test',value:function test(data){throw new Error('not yet implemented')}},{key:'toJSON',value:function toJSON(){var defaults=RNN.defaults;var model=this.model;var options={};for(var p in defaults){options[p]=this[p]}
return{type:this.constructor.name,options:options,input:model.input.toJSON(),hiddenLayers:model.hiddenLayers.map(function(hiddenLayer){var layers={};for(var _p in hiddenLayer){layers[_p]=hiddenLayer[_p].toJSON()}
return layers}),outputConnector:this.model.outputConnector.toJSON(),output:this.model.output.toJSON()}}},{key:'toJSONString',value:function toJSONString(){return JSON.stringify(this.toJSON())}},{key:'fromJSON',value:function fromJSON(json){this.json=json;var defaults=RNN.defaults;var model=this.model;var options=json.options;var allMatrices=model.allMatrices;model.input=_matrix2.default.fromJSON(json.input);allMatrices.push(model.input);model.hiddenLayers=json.hiddenLayers.map(function(hiddenLayer){var layers={};for(var p in hiddenLayer){layers[p]=_matrix2.default.fromJSON(hiddenLayer[p]);allMatrices.push(layers[p])}
return layers});model.outputConnector=_matrix2.default.fromJSON(json.outputConnector);model.output=_matrix2.default.fromJSON(json.output);allMatrices.push(model.outputConnector);allMatrices.push(model.output);for(var p in defaults){if(!defaults.hasOwnProperty(p))continue;this[p]=options.hasOwnProperty(p)?options[p]:defaults[p]}
if(options.hasOwnProperty('dataFormatter')&&options.dataFormatter!==null){this.dataFormatter=_dataFormatter2.default.fromJSON(options.dataFormatter);delete options.dataFormatter}
this.bindEquation()}},{key:'fromJSONString',value:function fromJSONString(json){return this.fromJSON(JSON.parse(json))}},{key:'toFunction',value:function toFunction(){var model=this.model;var equations=this.model.equations;var equation=equations[1];var states=equation.states;var jsonString=JSON.stringify(this.toJSON());function matrixOrigin(m,stateIndex){for(var i=0,max=states.length;i<max;i++){var state=states[i];if(i===stateIndex){var j=previousConnectionIndex(m);switch(m){case state.left:if(j>-1){return'typeof prevStates['+j+'] === \'object\' ? prevStates['+j+'].product : new Matrix('+m.rows+', '+m.columns+')'}
case state.right:if(j>-1){return'typeof prevStates['+j+'] === \'object\' ? prevStates['+j+'].product : new Matrix('+m.rows+', '+m.columns+')'}
case state.product:return'new Matrix('+m.rows+', '+m.columns+')';default:throw Error('unknown state')}}
if(m===state.product)return'states['+i+'].product';if(m===state.right)return'states['+i+'].right';if(m===state.left)return'states['+i+'].left'}}
function previousConnectionIndex(m){var connection=model.equationConnections[0];var states=equations[0].states;for(var i=0,max=states.length;i<max;i++){if(states[i].product===m){return i}}
return connection.indexOf(m)}
function matrixToString(m,stateIndex){if(!m||!m.rows||!m.columns)return'null';if(m===model.input)return'json.input';if(m===model.outputConnector)return'json.outputConnector';if(m===model.output)return'json.output';for(var i=0,max=model.hiddenLayers.length;i<max;i++){var hiddenLayer=model.hiddenLayers[i];for(var p in hiddenLayer){if(!hiddenLayer.hasOwnProperty(p))continue;if(hiddenLayer[p]!==m)continue;return'json.hiddenLayers['+i+'].'+p}}
return matrixOrigin(m,stateIndex)}
function toInner(fnString){fnString=fnString.toString().split('{');fnString.shift();fnString=fnString.join('{');fnString=fnString.split('}');fnString.pop();return fnString.join('}').split('\n').join('\n        ').replace('product.deltas[i] = 0;','').replace('product.deltas[column] = 0;','').replace('left.deltas[leftIndex] = 0;','').replace('right.deltas[rightIndex] = 0;','').replace('product.deltas = left.deltas.slice(0);','')}
function fileName(fnName){return'src/recurrent/matrix/'+fnName.replace(/[A-Z]/g,function(value){return'-'+value.toLowerCase()})+'.js'}
var statesRaw=[];var usedFunctionNames={};var innerFunctionsSwitch=[];for(var i=0,max=states.length;i<max;i++){var state=states[i];statesRaw.push('states['+i+'] = {\n      name: \''+state.forwardFn.name+'\',\n      left: '+matrixToString(state.left,i)+',\n      right: '+matrixToString(state.right,i)+',\n      product: '+matrixToString(state.product,i)+'\n    }');var fnName=state.forwardFn.name;if(!usedFunctionNames[fnName]){usedFunctionNames[fnName]=!0;innerFunctionsSwitch.push('        case \''+fnName+'\': //compiled from '+fileName(fnName)+'\n          '+toInner(state.forwardFn.toString())+'\n          break;')}}
var src='\n  if (typeof rawInput === \'undefined\') rawInput = [];\n  if (typeof maxPredictionLength === \'undefined\') maxPredictionLength = 100;\n  if (typeof isSampleI === \'undefined\') isSampleI = false;\n  if (typeof temperature === \'undefined\') temperature = 1;\n  '+(this.dataFormatter!==null?this.dataFormatter.toFunctionString():'')+'\n  \n  var input = '+(this.dataFormatter!==null&&typeof this.formatDataIn==='function'?'formatDataIn(rawInput)':'rawInput')+';\n  var json = '+jsonString+';\n  var _i = 0;\n  var output = [];\n  var states = [];\n  var prevStates;\n  while (true) {\n    var previousIndex = (_i === 0\n        ? 0\n        : _i < input.length\n          ? input[_i - 1] + 1\n          : output[_i - 1])\n          ;\n    var rowPluckIndex = previousIndex;\n    prevStates = states;\n    states = [];\n    '+statesRaw.join(';\n    ')+';\n    for (var stateIndex = 0, stateMax = '+statesRaw.length+'; stateIndex < stateMax; stateIndex++) {\n      var state = states[stateIndex];\n      var product = state.product;\n      var left = state.left;\n      var right = state.right;\n      \n      switch (state.name) {\n'+innerFunctionsSwitch.join('\n')+'\n      }\n    }\n    \n    var logProbabilities = state.product;\n    if (temperature !== 1 && isSampleI) {\n      for (var q = 0, nq = logProbabilities.weights.length; q < nq; q++) {\n        logProbabilities.weights[q] /= temperature;\n      }\n    }\n\n    var probs = softmax(logProbabilities);\n    var nextIndex = isSampleI ? sampleI(probs) : maxI(probs);\n    \n    _i++;\n    if (nextIndex === 0) {\n      break;\n    }\n    if (_i >= maxPredictionLength) {\n      break;\n    }\n\n    output.push(nextIndex);\n  }\n  '+(this.dataFormatter!==null&&typeof this.formatDataOut==='function'?'return formatDataOut(input, output.slice(input.length).map(function(value) { return value - 1; }))':'return output.slice(input.length).map(function(value) { return value - 1; })')+';\n  function Matrix(rows, columns) {\n    this.rows = rows;\n    this.columns = columns;\n    this.weights = zeros(rows * columns);\n  }\n  '+(this.dataFormatter!==null&&typeof this.formatDataIn==='function'?'function formatDataIn(input, output) { '+toInner(this.formatDataIn.toString()).replace(/this[.]dataFormatter[\n\s]+[.]/g,'').replace(/this[.]dataFormatter[.]/g,'').replace(/this[.]dataFormatter/g,'true')+' }':'')+'\n  '+(this.dataFormatter!==null&&typeof this.formatDataOut==='function'?'function formatDataOut(input, output) { '+toInner(this.formatDataOut.toString()).replace(/this[.]dataFormatter[\n\s]+[.]/g,'').replace(/this[.]dataFormatter[.]/g,'').replace(/this[.]dataFormatter/g,'true')+' }':'')+'\n  '+_zeros2.default.toString()+'\n  '+_softmax2.default.toString().replace('_2.default','Matrix')+'\n  '+_random.randomF.toString()+'\n  '+_sampleI2.default.toString()+'\n  '+_maxI2.default.toString();return new Function('rawInput','maxPredictionLength','isSampleI','temperature',src)}},{key:'isRunnable',get:function get(){if(this.model.equations.length===0){console.error('No equations bound, did you run train()?');return!1}
return!0}}]);return RNN}();exports.default=RNN;RNN.defaults={inputSize:20,inputRange:20,hiddenSizes:[20,20],outputSize:20,learningRate:0.01,decayRate:0.999,smoothEps:1e-8,regc:0.000001,clipval:5,json:null,setupData:function setupData(data){if(typeof data[0]!=='string'&&!Array.isArray(data[0])&&(!data[0].hasOwnProperty('input')||!data[0].hasOwnProperty('output'))){return data}
var values=[];var result=[];if(typeof data[0]==='string'||Array.isArray(data[0])){if(this.dataFormatter===null){for(var i=0;i<data.length;i++){values.push(data[i])}
this.dataFormatter=new _dataFormatter2.default(values)}
for(var _i=0,max=data.length;_i<max;_i++){result.push(this.formatDataIn(data[_i]))}}else{if(this.dataFormatter===null){for(var _i2=0;_i2<data.length;_i2++){values.push(data[_i2].input);values.push(data[_i2].output)}
this.dataFormatter=_dataFormatter2.default.fromArrayInputOutput(values)}
for(var _i3=0,_max=data.length;_i3<_max;_i3++){result.push(this.formatDataIn(data[_i3].input,data[_i3].output))}}
return result},formatDataIn:function formatDataIn(input){var output=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(this.dataFormatter!==null){if(this.dataFormatter.indexTable.hasOwnProperty('stop-input')){return this.dataFormatter.toIndexesInputOutput(input,output)}else{return this.dataFormatter.toIndexes(input)}}
return input},formatDataOut:function formatDataOut(input,output){if(this.dataFormatter!==null){return this.dataFormatter.toCharacters(output).join('')}
return output},dataFormatter:null};RNN.trainDefaults={iterations:20000,errorThresh:0.005,log:!1,logPeriod:10,learningRate:0.3,callback:null,callbackPeriod:10,keepNetworkIntact:!1}},{"../utilities/data-formatter":36,"../utilities/random":41,"../utilities/zeros":45,"./matrix":16,"./matrix/copy":14,"./matrix/equation":15,"./matrix/max-i":17,"./matrix/random-matrix":23,"./matrix/sample-i":28,"./matrix/softmax":31}],35:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _stream=require('stream');var _lookup=require('./lookup');var _lookup2=_interopRequireDefault(_lookup);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var TrainStream=function(_Writable){_inherits(TrainStream,_Writable);function TrainStream(opts){var _ret;_classCallCheck(this,TrainStream);var _this=_possibleConstructorReturn(this,(TrainStream.__proto__||Object.getPrototypeOf(TrainStream)).call(this,{objectMode:!0}));opts=opts||{};if(!opts.neuralNetwork){throw new Error('no neural network specified')}
_this.neuralNetwork=opts.neuralNetwork;_this.dataFormatDetermined=!1;_this.inputKeys=[];_this.outputKeys=[];_this.i=0;_this.iterations=opts.iterations||20000;_this.errorThresh=opts.errorThresh||0.005;_this.log=opts.log?typeof opts.log==='function'?opts.log:console.log:!1;_this.logPeriod=opts.logPeriod||10;_this.callback=opts.callback;_this.callbackPeriod=opts.callbackPeriod||10;_this.floodCallback=opts.floodCallback;_this.doneTrainingCallback=opts.doneTrainingCallback;_this.size=0;_this.count=0;_this.sum=0;_this.on('finish',_this.finishStreamIteration.bind(_this));return _ret=_this,_possibleConstructorReturn(_this,_ret)}
_createClass(TrainStream,[{key:'_write',value:function _write(chunk,enc,next){if(!chunk){this.emit('finish');return next()}
if(!this.dataFormatDetermined){this.size++;this.inputKeys=uniques(this.inputKeys.slice(0).concat(Object.keys(chunk.input)));this.outputKeys=uniques(this.outputKeys.slice(0).concat(Object.keys(chunk.output)));this.firstDatum=this.firstDatum||chunk;return next()}
this.count++;var data=this.neuralNetwork.formatData(chunk);this.trainDatum(data[0]);next()}},{key:'trainDatum',value:function trainDatum(datum){var err=this.neuralNetwork.trainPattern(datum.input,datum.output);this.sum+=err}},{key:'finishStreamIteration',value:function finishStreamIteration(){if(this.dataFormatDetermined&&this.size!==this.count){this.log('This iteration\'s data length was different from the first.')}
if(!this.dataFormatDetermined){this.neuralNetwork.inputLookup=_lookup2.default.lookupFromArray(this.inputKeys);if(!Array.isArray(this.firstDatum.output)){this.neuralNetwork.outputLookup=_lookup2.default.lookupFromArray(this.outputKeys)}
var data=this.neuralNetwork.formatData(this.firstDatum);var sizes=[];var inputSize=data[0].input.length;var outputSize=data[0].output.length;var hiddenSizes=this.hiddenSizes;if(!hiddenSizes){sizes.push(Math.max(3,Math.floor(inputSize/2)))}else{hiddenSizes.forEach(function(size){sizes.push(size)})}
sizes.unshift(inputSize);sizes.push(outputSize);this.dataFormatDetermined=!0;this.neuralNetwork.initialize(sizes);if(typeof this.floodCallback==='function'){this.floodCallback()}
return}
var error=this.sum/this.size;if(this.log&&this.i%this.logPeriod==0){this.log('iterations:',this.i,'training error:',error)}
if(this.callback&&this.i%this.callbackPeriod==0){this.callback({error:error,iterations:this.i})}
this.sum=0;this.count=0;this.i++;if(this.i<this.iterations&&error>this.errorThresh){if(typeof this.floodCallback==='function'){return this.floodCallback()}}else{if(typeof this.doneTrainingCallback==='function'){return this.doneTrainingCallback({error:error,iterations:this.i})}}}}]);return TrainStream}(_stream.Writable);exports.default=TrainStream;function uniques(arr){return[].concat(_toConsumableArray(new Set(arr)))}},{"./lookup":5,"stream":109}],36:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var DataFormatter=function(){function DataFormatter(values){var maxThreshold=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;_classCallCheck(this,DataFormatter);if(values===undefined)return;this.values=values;this.indexTable={};this.characterTable={};this.characters=[];this.buildCharactersFromIterable(values);this.buildTables(maxThreshold)}
_createClass(DataFormatter,[{key:'buildCharactersFromIterable',value:function buildCharactersFromIterable(values){var tempCharactersTable={};for(var dataFormatterIndex=0,dataFormatterLength=values.length;dataFormatterIndex<dataFormatterLength;dataFormatterIndex++){var characters=values[dataFormatterIndex];if(characters.hasOwnProperty('length')){for(var characterIndex=0,charactersLength=characters.length;characterIndex<charactersLength;characterIndex++){var character=characters[characterIndex];if(tempCharactersTable.hasOwnProperty(character))continue;tempCharactersTable[character]=!0;this.characters.push(character)}}else{var _character=values[dataFormatterIndex];if(tempCharactersTable.hasOwnProperty(_character))continue;tempCharactersTable[dataFormatterIndex]=!0;this.characters.push(_character)}}}},{key:'buildTables',value:function buildTables(maxThreshold){var charactersLength=this.characters.length;for(var characterIndex=0;characterIndex<charactersLength;characterIndex++){var character=this.characters[characterIndex];if(characterIndex>=maxThreshold){this.indexTable[character]=characterIndex;this.characterTable[characterIndex]=character}}}},{key:'toIndexes',value:function toIndexes(value){var maxThreshold=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var result=[];var indexTable=this.indexTable;for(var i=0,max=value.length;i<max;i++){var character=value[i];var index=indexTable[character];if(index===undefined){throw new Error('unrecognized character "'+character+'"')}
if(index<maxThreshold)continue;result.push(index)}
return result}},{key:'toIndexesInputOutput',value:function toIndexesInputOutput(value1){var value2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var maxThreshold=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var result=void 0;if(typeof value1==='string'){result=this.toIndexes(value1.split('').concat(['stop-input','start-output']),maxThreshold)}else{result=this.toIndexes(value1.concat(['stop-input','start-output']),maxThreshold)}
if(value2===null)return result;if(typeof value2==='string'){return result.concat(this.toIndexes(value2.split(''),maxThreshold))}else{return result.concat(this.toIndexes(value2,maxThreshold))}}},{key:'toCharacters',value:function toCharacters(indices){var maxThreshold=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var result=[];var characterTable=this.characterTable;for(var i=0,max=indices.length;i<max;i++){var index=indices[i];if(index<maxThreshold)continue;var character=characterTable[index];if(character===undefined){throw new Error('unrecognized index "'+index+'"')}
result.push(character)}
return result}},{key:'toString',value:function toString(indices,maxThreshold){return this.toCharacters(indices,maxThreshold).join('')}},{key:'addInputOutput',value:function addInputOutput(){this.addSpecial('stop-input');this.addSpecial('start-output')}},{key:'addSpecial',value:function addSpecial(){for(var i=0;i<arguments.length;i++){var special=arguments[i];var specialIndex=this.indexTable[special]=this.characters.length;this.characterTable[specialIndex]=special;this.characters.push(special)}}},{key:'toFunctionString',value:function toFunctionString(){return'\nvar characterTable = '+JSON.stringify(this.characterTable)+';\nvar indexTable = '+JSON.stringify(this.indexTable)+';\nvar characters = '+JSON.stringify(this.characters)+';\n'+this.toIndexes.toString().replace(/(let|var) indexTable = this[.]indexTable;\n/,'').replace(/this[.]/g,'')+'\n'+this.toIndexesInputOutput.toString().replace(/this[.]/g,'')+'\n'+this.toCharacters.toString().replace(/(let|var) characterTable = this[.]characterTable;\n/g,'').replace(/this[.]/,'')+'\n'}}],[{key:'fromAllPrintable',value:function fromAllPrintable(maxThreshold){var values=arguments.length>1&&arguments[1]!==undefined?arguments[1]:['\n'];for(var i=32;i<=126;i++){values.push(String.fromCharCode(i))}
return new DataFormatter(values,maxThreshold)}},{key:'fromAllPrintableInputOutput',value:function fromAllPrintableInputOutput(maxThreshold){var values=arguments.length>1&&arguments[1]!==undefined?arguments[1]:['\n'];var dataFormatter=DataFormatter.fromAllPrintable(maxThreshold,values);dataFormatter.addInputOutput();return dataFormatter}},{key:'fromStringInputOutput',value:function fromStringInputOutput(string,maxThreshold){var _String$prototype;var values=(_String$prototype=String.prototype).concat.apply(_String$prototype,_toConsumableArray(new Set(string)));var dataFormatter=new DataFormatter(values,maxThreshold);dataFormatter.addInputOutput();return dataFormatter}},{key:'fromArrayInputOutput',value:function fromArrayInputOutput(array,maxThreshold){var dataFormatter=new DataFormatter(array.filter(function(v,i,a){return a.indexOf(v)===i}).sort(),maxThreshold);dataFormatter.addInputOutput();return dataFormatter}},{key:'fromString',value:function fromString(string,maxThreshold){var _String$prototype2;var values=(_String$prototype2=String.prototype).concat.apply(_String$prototype2,_toConsumableArray(new Set(string)));return new DataFormatter(values,maxThreshold)}},{key:'fromJSON',value:function fromJSON(json){var dataFormatter=new DataFormatter();dataFormatter.indexTable=json.indexTable;dataFormatter.characterTable=json.characterTable;dataFormatter.values=json.values;dataFormatter.characters=json.characters;return dataFormatter}}]);return DataFormatter}();exports.default=DataFormatter},{}],37:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});exports.default=max;var _toArray=require('./to-array');var _toArray2=_interopRequireDefault(_toArray);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function max(values){return Math.max.apply(Math,(0,_toArray2.default)(values))}},{"./to-array":44}],38:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=mse;function mse(errors){var sum=0;for(var i=0;i<errors.length;i++){sum+=Math.pow(errors[i],2)}
return sum/errors.length}},{}],39:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});exports.default=ones;function ones(size){if(typeof Float32Array!=='undefined')return new Float32Array(size).fill(1);var array=new Array(size);for(var i=0;i<size;i++){array[i]=1}
return array}},{}],40:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=randomWeight;function randomWeight(){return Math.random()*0.4-0.2}},{}],41:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.randomF=randomF;exports.randomI=randomI;exports.randomN=randomN;function randomF(a,b){return Math.random()*(b-a)+a}
function randomI(a,b){return Math.floor(Math.random()*(b-a)+a)}
function randomN(mu,std){return mu+gaussRandom()*std}
function gaussRandom(){if(gaussRandom.returnV){gaussRandom.returnV=!1;return gaussRandom.vVal}
var u=2*Math.random()-1;var v=2*Math.random()-1;var r=u*u+v*v;if(r==0||r>1){return gaussRandom()}
var c=Math.sqrt(-2*Math.log(r)/r);gaussRandom.vVal=v*c;gaussRandom.returnV=!0;return u*c}
gaussRandom.returnV=!1;gaussRandom.vVal=0},{}],42:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});exports.default=randos;var _randomWeight=require('./random-weight');var _randomWeight2=_interopRequireDefault(_randomWeight);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function randos(size){var array=new Float32Array(size);for(var i=0;i<size;i++){array[i]=(0,_randomWeight2.default)()}
return array}},{"./random-weight":40}],43:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=range;function range(start,end){var result=[];for(;start<end;start++){result.push(start)}
return result}},{}],44:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=toArray;function toArray(values){if(Array.isArray(values)){return values}else{var keys=Object.keys(values);var result=new Float32Array(keys.length);for(var i in keys){result[i]=values[keys[i]]}
return result}}},{}],45:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.default=zeros;function zeros(size){return new Float32Array(size)}},{}],46:[function(require,module,exports){var crossValidate=require('./dist/cross-validate').default;var likely=require('./dist/likely').default;var lookup=require('./dist/lookup').default;var NeuralNetwork=require('./dist/neural-network').default;var NeuralNetworkGPU=require('./dist/neural-network-gpu').default;var TrainStream=require('./dist/train-stream').default;var RNN=require('./dist/recurrent/rnn').default;var LSTM=require('./dist/recurrent/lstm').default;var GRU=require('./dist/recurrent/gru').default;var utilities={max:require('./dist/utilities/max').default,mse:require('./dist/utilities/mse').default,ones:require('./dist/utilities/ones').default,random:require('./dist/utilities/random').default,randomWeight:require('./dist/utilities/random-weight').default,randos:require('./dist/utilities/randos').default,range:require('./dist/utilities/range').default,toArray:require('./dist/utilities/to-array').default,DataFormatter:require('./dist/utilities/data-formatter').default,zeros:require('./dist/utilities/zeros').default};var brain={crossValidate:crossValidate,likely:likely,lookup:lookup,NeuralNetwork:NeuralNetwork,NeuralNetworkGPU:NeuralNetworkGPU,TrainStream:TrainStream,recurrent:{RNN:RNN,LSTM:LSTM,GRU:GRU,},utilities:utilities};if(typeof window!=='undefined'){window.brain=brain}
if(typeof self!=='undefined'){self.brain=brain}
if(typeof module!=='undefined'){module.exports=brain}},{"./dist/cross-validate":3,"./dist/likely":4,"./dist/lookup":5,"./dist/neural-network":7,"./dist/neural-network-gpu":6,"./dist/recurrent/gru":8,"./dist/recurrent/lstm":9,"./dist/recurrent/rnn":34,"./dist/train-stream":35,"./dist/utilities/data-formatter":36,"./dist/utilities/max":37,"./dist/utilities/mse":38,"./dist/utilities/ones":39,"./dist/utilities/random":41,"./dist/utilities/random-weight":40,"./dist/utilities/randos":42,"./dist/utilities/range":43,"./dist/utilities/to-array":44,"./dist/utilities/zeros":45}],47:[function(require,module,exports){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var FunctionBuilderBase=require('../function-builder-base');var CPUFunctionNode=require('./function-node');module.exports=function(_FunctionBuilderBase){_inherits(CPUFunctionBuilder,_FunctionBuilderBase);function CPUFunctionBuilder(){_classCallCheck(this,CPUFunctionBuilder);var _this=_possibleConstructorReturn(this,(CPUFunctionBuilder.__proto__||Object.getPrototypeOf(CPUFunctionBuilder)).call(this));_this.Node=CPUFunctionNode;return _this}
return CPUFunctionBuilder}(FunctionBuilderBase)},{"../function-builder-base":52,"./function-node":48}],48:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var BaseFunctionNode=require('../function-node-base');var utils=require('../../core/utils');module.exports=function(_BaseFunctionNode){_inherits(CPUFunctionNode,_BaseFunctionNode);function CPUFunctionNode(){_classCallCheck(this,CPUFunctionNode);return _possibleConstructorReturn(this,(CPUFunctionNode.__proto__||Object.getPrototypeOf(CPUFunctionNode)).apply(this,arguments))}
_createClass(CPUFunctionNode,[{key:'generate',value:function generate(){if(this.debug){console.log(this)}
this.functionStringArray=this.astGeneric(this.getJsAST(),[],this);this.functionString=this.functionStringArray.join('').trim();return this.functionString}},{key:'getFunctionPrototypeString',value:function getFunctionPrototypeString(){if(this.webGlFunctionPrototypeString){return this.webGlFunctionPrototypeString}
return this.webGlFunctionPrototypeString=this.generate()}},{key:'astGeneric',value:function astGeneric(ast,retArr,funcParam){if(ast===null){throw this.astErrorOutput('NULL ast',ast,funcParam)}else{if(Array.isArray(ast)){for(var i=0;i<ast.length;i++){this.astGeneric(ast[i],retArr,funcParam)}
return retArr}
switch(ast.type){case 'FunctionDeclaration':return this.astFunctionDeclaration(ast,retArr,funcParam);case 'FunctionExpression':return this.astFunctionExpression(ast,retArr,funcParam);case 'ReturnStatement':return this.astReturnStatement(ast,retArr,funcParam);case 'Literal':return this.astLiteral(ast,retArr,funcParam);case 'BinaryExpression':return this.astBinaryExpression(ast,retArr,funcParam);case 'Identifier':return this.astIdentifierExpression(ast,retArr,funcParam);case 'AssignmentExpression':return this.astAssignmentExpression(ast,retArr,funcParam);case 'ExpressionStatement':return this.astExpressionStatement(ast,retArr,funcParam);case 'EmptyStatement':return this.astEmptyStatement(ast,retArr,funcParam);case 'BlockStatement':return this.astBlockStatement(ast,retArr,funcParam);case 'IfStatement':return this.astIfStatement(ast,retArr,funcParam);case 'BreakStatement':return this.astBreakStatement(ast,retArr,funcParam);case 'ContinueStatement':return this.astContinueStatement(ast,retArr,funcParam);case 'ForStatement':return this.astForStatement(ast,retArr,funcParam);case 'WhileStatement':return this.astWhileStatement(ast,retArr,funcParam);case 'VariableDeclaration':return this.astVariableDeclaration(ast,retArr,funcParam);case 'VariableDeclarator':return this.astVariableDeclarator(ast,retArr,funcParam);case 'ThisExpression':return this.astThisExpression(ast,retArr,funcParam);case 'SequenceExpression':return this.astSequenceExpression(ast,retArr,funcParam);case 'UnaryExpression':return this.astUnaryExpression(ast,retArr,funcParam);case 'UpdateExpression':return this.astUpdateExpression(ast,retArr,funcParam);case 'LogicalExpression':return this.astLogicalExpression(ast,retArr,funcParam);case 'MemberExpression':return this.astMemberExpression(ast,retArr,funcParam);case 'CallExpression':return this.astCallExpression(ast,retArr,funcParam);case 'ArrayExpression':return this.astArrayExpression(ast,retArr,funcParam);case 'DebuggerStatement':return this.astDebuggerStatement(ast,retArr,funcParam)}
throw this.astErrorOutput('Unknown ast type : '+ast.type,ast,funcParam)}}},{key:'astFunctionDeclaration',value:function astFunctionDeclaration(ast,retArr,funcParam){if(this.addFunction){this.addFunction(null,utils.getAstString(this.jsFunctionString,ast))}
return retArr}},{key:'astFunctionExpression',value:function astFunctionExpression(ast,retArr,funcParam){if(!funcParam.isRootKernel){retArr.push('function');funcParam.kernalAst=ast;retArr.push(' ');retArr.push(funcParam.functionName);retArr.push('(');for(var i=0;i<funcParam.paramNames.length;++i){var paramName=funcParam.paramNames[i];if(i>0){retArr.push(', ')}
retArr.push(' ');retArr.push('user_');retArr.push(paramName)}
retArr.push(') {\n')}
for(var _i=0;_i<ast.body.body.length;++_i){this.astGeneric(ast.body.body[_i],retArr,funcParam);retArr.push('\n')}
if(!funcParam.isRootKernel){retArr.push('}\n')}
return retArr}},{key:'astReturnStatement',value:function astReturnStatement(ast,retArr,funcParam){if(funcParam.isRootKernel){retArr.push('kernelResult = ');this.astGeneric(ast.argument,retArr,funcParam);retArr.push(';')}else if(funcParam.isSubKernel){retArr.push(funcParam.functionName+'Result = ');this.astGeneric(ast.argument,retArr,funcParam);retArr.push(';');retArr.push('return '+funcParam.functionName+'Result;')}else{retArr.push('return ');this.astGeneric(ast.argument,retArr,funcParam);retArr.push(';')}
return retArr}},{key:'astLiteral',value:function astLiteral(ast,retArr,funcParam){if(isNaN(ast.value)){throw this.astErrorOutput('Non-numeric literal not supported : '+ast.value,ast,funcParam)}
retArr.push(ast.value);return retArr}},{key:'astBinaryExpression',value:function astBinaryExpression(ast,retArr,funcParam){retArr.push('(');this.astGeneric(ast.left,retArr,funcParam);retArr.push(ast.operator);this.astGeneric(ast.right,retArr,funcParam);retArr.push(')');return retArr}},{key:'astIdentifierExpression',value:function astIdentifierExpression(idtNode,retArr,funcParam){if(idtNode.type!=='Identifier'){throw this.astErrorOutput('IdentifierExpression - not an Identifier',idtNode,funcParam)}
switch(idtNode.name){case 'gpu_threadX':retArr.push('threadId.x');break;case 'gpu_threadY':retArr.push('threadId.y');break;case 'gpu_threadZ':retArr.push('threadId.z');break;case 'gpu_outputX':retArr.push('uOutputDim.x');break;case 'gpu_outputY':retArr.push('uOutputDim.y');break;case 'gpu_outputZ':retArr.push('uOutputDim.z');break;default:if(this.constants&&this.constants.hasOwnProperty(idtNode.name)){retArr.push('constants_'+idtNode.name)}else{var userParamName=funcParam.getUserParamName(idtNode.name);if(userParamName!==null){retArr.push('user_'+userParamName)}else{retArr.push('user_'+idtNode.name)}}}
return retArr}},{key:'astForStatement',value:function astForStatement(forNode,retArr,funcParam){if(forNode.type!=='ForStatement'){throw this.astErrorOutput('Invalid for statment',forNode,funcParam)}
if(forNode.test&&forNode.test.type==='BinaryExpression'){if((forNode.test.right.type==='Identifier'||forNode.test.right.type==='Literal')&&forNode.test.operator==='<'&&this.isIdentifierConstant(forNode.test.right.name)===!1){if(!this.loopMaxIterations){console.warn('Warning: loopMaxIterations is not set! Using default of 1000 which may result in unintended behavior.');console.warn('Set loopMaxIterations or use a for loop of fixed length to silence this message.')}
retArr.push('for (');this.astGeneric(forNode.init,retArr,funcParam);if(retArr[retArr.length-1]!==';'){retArr.push(';')}
this.astGeneric(forNode.test.left,retArr,funcParam);retArr.push(forNode.test.operator);retArr.push('LOOP_MAX');retArr.push(';');this.astGeneric(forNode.update,retArr,funcParam);retArr.push(')');retArr.push('{\n');retArr.push('if (');this.astGeneric(forNode.test.left,retArr,funcParam);retArr.push(forNode.test.operator);this.astGeneric(forNode.test.right,retArr,funcParam);retArr.push(') {\n');if(forNode.body.type==='BlockStatement'){for(var i=0;i<forNode.body.body.length;i++){this.astGeneric(forNode.body.body[i],retArr,funcParam)}}else{this.astGeneric(forNode.body,retArr,funcParam)}
retArr.push('} else {\n');retArr.push('break;\n');retArr.push('}\n');retArr.push('}\n');return retArr}else if(forNode.init.declarations){var declarations=JSON.parse(JSON.stringify(forNode.init.declarations));var updateArgument=forNode.update.argument;if(!Array.isArray(declarations)||declarations.length<1){console.log(this.jsFunctionString);throw new Error('Error: Incompatible for loop declaration')}
if(declarations.length>1){var initArgument=null;for(var _i2=0;_i2<declarations.length;_i2++){var declaration=declarations[_i2];if(declaration.id.name===updateArgument.name){initArgument=declaration;declarations.splice(_i2,1)}else{retArr.push('var ');this.astGeneric(declaration,retArr,funcParam);retArr.push(';')}}
retArr.push('for (let ');this.astGeneric(initArgument,retArr,funcParam);retArr.push(';')}else{retArr.push('for (');this.astGeneric(forNode.init,retArr,funcParam)}
this.astGeneric(forNode.test,retArr,funcParam);retArr.push(';');this.astGeneric(forNode.update,retArr,funcParam);retArr.push(')');this.astGeneric(forNode.body,retArr,funcParam);return retArr}}
throw this.astErrorOutput('Invalid for statement',forNode,funcParam)}},{key:'astWhileStatement',value:function astWhileStatement(whileNode,retArr,funcParam){if(whileNode.type!=='WhileStatement'){throw this.astErrorOutput('Invalid while statment',whileNode,funcParam)}
retArr.push('for (let i = 0; i < LOOP_MAX; i++) {');retArr.push('if (');this.astGeneric(whileNode.test,retArr,funcParam);retArr.push(') {\n');this.astGeneric(whileNode.body,retArr,funcParam);retArr.push('} else {\n');retArr.push('break;\n');retArr.push('}\n');retArr.push('}\n');return retArr}},{key:'astAssignmentExpression',value:function astAssignmentExpression(assNode,retArr,funcParam){this.astGeneric(assNode.left,retArr,funcParam);retArr.push(assNode.operator);this.astGeneric(assNode.right,retArr,funcParam);return retArr}},{key:'astEmptyStatement',value:function astEmptyStatement(eNode,retArr,funcParam){return retArr}},{key:'astBlockStatement',value:function astBlockStatement(bNode,retArr,funcParam){retArr.push('{\n');for(var i=0;i<bNode.body.length;i++){this.astGeneric(bNode.body[i],retArr,funcParam)}
retArr.push('}\n');return retArr}},{key:'astExpressionStatement',value:function astExpressionStatement(esNode,retArr,funcParam){this.astGeneric(esNode.expression,retArr,funcParam);retArr.push(';\n');return retArr}},{key:'astVariableDeclaration',value:function astVariableDeclaration(vardecNode,retArr,funcParam){retArr.push('var ');for(var i=0;i<vardecNode.declarations.length;i++){if(i>0){retArr.push(',')}
this.astGeneric(vardecNode.declarations[i],retArr,funcParam)}
retArr.push(';');return retArr}},{key:'astVariableDeclarator',value:function astVariableDeclarator(ivardecNode,retArr,funcParam){this.astGeneric(ivardecNode.id,retArr,funcParam);if(ivardecNode.init!==null){retArr.push('=');this.astGeneric(ivardecNode.init,retArr,funcParam)}
return retArr}},{key:'astIfStatement',value:function astIfStatement(ifNode,retArr,funcParam){retArr.push('if (');this.astGeneric(ifNode.test,retArr,funcParam);retArr.push(')');if(ifNode.consequent.type==='BlockStatement'){this.astGeneric(ifNode.consequent,retArr,funcParam)}else{retArr.push(' {\n');this.astGeneric(ifNode.consequent,retArr,funcParam);retArr.push('\n}\n')}
if(ifNode.alternate){retArr.push('else ');if(ifNode.alternate.type==='BlockStatement'){this.astGeneric(ifNode.alternate,retArr,funcParam)}else{retArr.push(' {\n');this.astGeneric(ifNode.alternate,retArr,funcParam);retArr.push('\n}\n')}}
return retArr}},{key:'astBreakStatement',value:function astBreakStatement(brNode,retArr,funcParam){retArr.push('break;\n');return retArr}},{key:'astContinueStatement',value:function astContinueStatement(crNode,retArr,funcParam){retArr.push('continue;\n');return retArr}},{key:'astLogicalExpression',value:function astLogicalExpression(logNode,retArr,funcParam){retArr.push('(');this.astGeneric(logNode.left,retArr,funcParam);retArr.push(logNode.operator);this.astGeneric(logNode.right,retArr,funcParam);retArr.push(')');return retArr}},{key:'astUpdateExpression',value:function astUpdateExpression(uNode,retArr,funcParam){if(uNode.prefix){retArr.push(uNode.operator);this.astGeneric(uNode.argument,retArr,funcParam)}else{this.astGeneric(uNode.argument,retArr,funcParam);retArr.push(uNode.operator)}
return retArr}},{key:'astUnaryExpression',value:function astUnaryExpression(uNode,retArr,funcParam){if(uNode.prefix){retArr.push(uNode.operator);this.astGeneric(uNode.argument,retArr,funcParam)}else{this.astGeneric(uNode.argument,retArr,funcParam);retArr.push(uNode.operator)}
return retArr}},{key:'astThisExpression',value:function astThisExpression(tNode,retArr,funcParam){retArr.push('_this');return retArr}},{key:'astMemberExpression',value:function astMemberExpression(mNode,retArr,funcParam){if(mNode.computed){if(mNode.object.type==='Identifier'){this.astGeneric(mNode.object,retArr,funcParam);retArr.push('[');this.astGeneric(mNode.property,retArr,funcParam);retArr.push(']')}else{this.astGeneric(mNode.object,retArr,funcParam);var last=retArr.pop();retArr.push('][');this.astGeneric(mNode.property,retArr,funcParam);retArr.push(last)}}else{var unrolled=this.astMemberExpressionUnroll(mNode);if(mNode.property.type==='Identifier'&&mNode.computed){unrolled='user_'+unrolled}
if(unrolled.indexOf('this')===0){unrolled='_'+unrolled}
switch(unrolled){case '_this.output.x':retArr.push(this.output[0]);break;case '_this.output.y':retArr.push(this.output[1]);break;case '_this.output.z':retArr.push(this.output[2]);break;default:retArr.push(unrolled)}}
return retArr}},{key:'astSequenceExpression',value:function astSequenceExpression(sNode,retArr,funcParam){for(var i=0;i<sNode.expressions.length;i++){if(i>0){retArr.push(',')}
this.astGeneric(sNode.expressions,retArr,funcParam)}
return retArr}},{key:'astCallExpression',value:function astCallExpression(ast,retArr,funcParam){if(ast.callee){var funcName=this.astMemberExpressionUnroll(ast.callee);if(funcParam.calledFunctions.indexOf(funcName)<0){funcParam.calledFunctions.push(funcName)}
if(!funcParam.hasOwnProperty('funcName')){funcParam.calledFunctionsArguments[funcName]=[]}
var functionArguments=[];funcParam.calledFunctionsArguments[funcName].push(functionArguments);retArr.push(funcName);retArr.push('(');for(var i=0;i<ast.arguments.length;++i){var argument=ast.arguments[i];if(i>0){retArr.push(', ')}
this.astGeneric(argument,retArr,funcParam);if(argument.type==='Identifier'){var paramIndex=funcParam.paramNames.indexOf(argument.name);if(paramIndex===-1){functionArguments.push(null)}else{functionArguments.push({name:argument.name,type:funcParam.paramTypes[paramIndex]})}}else{functionArguments.push(null)}}
retArr.push(')');return retArr}
throw this.astErrorOutput('Unknown CallExpression',ast,funcParam);return retArr}},{key:'astArrayExpression',value:function astArrayExpression(arrNode,retArr,funcParam){var arrLen=arrNode.elements.length;retArr.push('new Float32Array(');for(var i=0;i<arrLen;++i){if(i>0){retArr.push(', ')}
var subNode=arrNode.elements[i];this.astGeneric(subNode,retArr,funcParam)}
retArr.push(')');return retArr}},{key:'astDebuggerStatement',value:function astDebuggerStatement(arrNode,retArr,funcParam){retArr.push('debugger;');return retArr}}],[{key:'astFunctionPrototype',value:function astFunctionPrototype(ast,retArr,funcParam){if(funcParam.isRootKernel||funcParam.isSubKernel){return retArr}
retArr.push(funcParam.returnType);retArr.push(' ');retArr.push(funcParam.functionName);retArr.push('(');for(var i=0;i<funcParam.paramNames.length;++i){if(i>0){retArr.push(', ')}
retArr.push(funcParam.paramTypes[i]);retArr.push(' ');retArr.push('user_');retArr.push(funcParam.paramNames[i])}
retArr.push(');\n');return retArr}}]);return CPUFunctionNode}(BaseFunctionNode)},{"../../core/utils":78,"../function-node-base":53}],49:[function(require,module,exports){'use strict';var utils=require('../../core/utils');var kernelRunShortcut=require('../kernel-run-shortcut');function removeFnNoise(fn){if(/^function /.test(fn)){fn=fn.substring(9)}
return fn.replace(/[_]typeof/g,'typeof')}
function removeNoise(str){return str.replace(/[_]typeof/g,'typeof')}
module.exports=function(cpuKernel,name){return'() => {\n    '+kernelRunShortcut.toString()+';\n    const utils = {\n      allPropertiesOf: '+removeNoise(utils.allPropertiesOf.toString())+',\n      clone: '+removeNoise(utils.clone.toString())+'\n    };\n    const Utils = utils;\n    class '+(name||'Kernel')+' {\n      constructor() {        \n        this.argumentsLength = 0;\n        this._canvas = null;\n        this._webGl = null;\n        this.built = false;\n        this.program = null;\n        this.paramNames = '+JSON.stringify(cpuKernel.paramNames)+';\n        this.paramTypes = '+JSON.stringify(cpuKernel.paramTypes)+';\n        this.texSize = '+JSON.stringify(cpuKernel.texSize)+';\n        this.output = '+JSON.stringify(cpuKernel.output)+';\n        this._kernelString = `'+cpuKernel._kernelString+'`;\n        this.output = '+JSON.stringify(cpuKernel.output)+';\n\t\t    this.run = function() {\n          this.run = null;\n          this.build();\n          return this.run.apply(this, arguments);\n        }.bind(this);\n        this.thread = {\n          x: 0,\n          y: 0,\n          z: 0\n        };\n      }\n      setCanvas(canvas) { this._canvas = canvas; return this; }\n      setWebGl(webGl) { this._webGl = webGl; return this; }\n      '+removeFnNoise(cpuKernel.build.toString())+'\n      '+removeFnNoise(cpuKernel.setupParams.toString())+'\n      run () { '+cpuKernel.kernelString+' }\n      getKernelString() { return this._kernelString; }\n    };\n    return kernelRunShortcut(new Kernel());\n  };'}},{"../../core/utils":78,"../kernel-run-shortcut":55}],50:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var KernelBase=require('../kernel-base');var utils=require('../../core/utils');var kernelString=require('./kernel-string');module.exports=function(_KernelBase){_inherits(CPUKernel,_KernelBase);function CPUKernel(fnString,settings){_classCallCheck(this,CPUKernel);var _this=_possibleConstructorReturn(this,(CPUKernel.__proto__||Object.getPrototypeOf(CPUKernel)).call(this,fnString,settings));_this._fnBody=utils.getFunctionBodyFromString(fnString);_this._fn=null;_this.run=null;_this._canvasCtx=null;_this._imageData=null;_this._colorData=null;_this._kernelString=null;_this.thread={x:0,y:0,z:0};_this.run=function(){this.run=null;this.build.apply(this,arguments);return this.run.apply(this,arguments)}.bind(_this);return _this}
_createClass(CPUKernel,[{key:'validateOptions',value:function validateOptions(){if(!this.output||this.output.length===0){if(arguments.length!==1){throw 'Auto dimensions only supported for kernels with only one input'}
var argType=utils.getArgumentType(arguments[0]);if(argType==='Array'){this.output=utils.getDimensions(argType)}else if(argType==='Texture'){this.output=arguments[0].output}else{throw 'Auto dimensions not supported for input type: '+argType}}}},{key:'build',value:function build(){this.setupParams(arguments);var threadDim=this.threadDim=utils.clone(this.output);while(threadDim.length<3){threadDim.push(1)}
if(this.graphical){var canvas=this.getCanvas();canvas.width=threadDim[0];canvas.height=threadDim[1];this._canvasCtx=canvas.getContext('2d');this._imageData=this._canvasCtx.createImageData(threadDim[0],threadDim[1]);this._colorData=new Uint8ClampedArray(threadDim[0]*threadDim[1]*4)}
var kernelString=this.getKernelString();if(this.debug){console.log('Options:');console.dir(this);console.log('Function output:');console.log(kernelString)}
this.kernelString=kernelString;this.run=new Function([],kernelString).bind(this)()}},{key:'color',value:function color(r,g,b,a){if(typeof a==='undefined'){a=1}
r=Math.floor(r*255);g=Math.floor(g*255);b=Math.floor(b*255);a=Math.floor(a*255);var width=this.output[0];var height=this.output[1];var x=this.thread.x;var y=height-this.thread.y-1;var index=x+y*width;this._colorData[index*4+0]=r;this._colorData[index*4+1]=g;this._colorData[index*4+2]=b;this._colorData[index*4+3]=a}},{key:'getKernelString',value:function getKernelString(){var _this2=this;if(this._kernelString!==null)return this._kernelString;var builder=this.functionBuilder;var threadDim=this.threadDim||(this.threadDim=utils.clone(this.output));while(threadDim.length<3){threadDim.push(1)}
builder.addKernel(this.fnString,{prototypeOnly:!1,constants:this.constants,output:this.output,debug:this.debug,loopMaxIterations:this.loopMaxIterations},this.paramNames,this.paramTypes);builder.addFunctions(this.functions,{constants:this.constants,output:this.output});if(this.subKernels!==null){this.subKernelOutputTextures=[];this.subKernelOutputVariableNames=[];for(var i=0;i<this.subKernels.length;i++){var subKernel=this.subKernels[i];builder.addSubKernel(subKernel,{prototypeOnly:!1,constants:this.constants,output:this.output,debug:this.debug,loopMaxIterations:this.loopMaxIterations});this.subKernelOutputVariableNames.push(subKernel.name+'Result')}}else if(this.subKernelProperties!==null){this.subKernelOutputVariableNames=[];var _i=0;for(var p in this.subKernelProperties){if(!this.subKernelProperties.hasOwnProperty(p))continue;var _subKernel=this.subKernelProperties[p];builder.addSubKernel(_subKernel);this.subKernelOutputVariableNames.push(_subKernel.name+'Result');_i++}}
var prototypes=builder.getPrototypes();var kernel=null;if(prototypes.length>1){prototypes=prototypes.filter(function(fn){if(/^function/.test(fn))return fn;kernel=fn;return!1})}else{kernel=prototypes.shift()}
var kernelString=this._kernelString='\n\t\tvar LOOP_MAX = '+this._getLoopMaxString()+';\n\t\tvar _this = this;\n  '+(this.subKernelOutputVariableNames===null?'':this.subKernelOutputVariableNames.map(function(name){return'  var '+name+' = null;\n'}).join(''))+'\n    return function ('+this.paramNames.map(function(paramName){return'user_'+paramName}).join(', ')+') {\n    var ret = new Array('+threadDim[2]+');\n  '+(this.subKernelOutputVariableNames===null?'':this.subKernelOutputVariableNames.map(function(name){return'  '+name+'Z = new Array('+threadDim[2]+');\n'}).join(''))+'\n    for (this.thread.z = 0; this.thread.z < '+threadDim[2]+'; this.thread.z++) {\n      ret[this.thread.z] = new Array('+threadDim[1]+');\n  '+(this.subKernelOutputVariableNames===null?'':this.subKernelOutputVariableNames.map(function(name){return'    '+name+'Z[this.thread.z] = new Array('+threadDim[1]+');\n'}).join(''))+'\n      for (this.thread.y = 0; this.thread.y < '+threadDim[1]+'; this.thread.y++) {\n        ret[this.thread.z][this.thread.y] = new Array('+threadDim[0]+');\n  '+(this.subKernelOutputVariableNames===null?'':this.subKernelOutputVariableNames.map(function(name){return'      '+name+'Z[this.thread.z][this.thread.y] = new Array('+threadDim[0]+');\n'}).join(''))+'\n        for (this.thread.x = 0; this.thread.x < '+threadDim[0]+'; this.thread.x++) {\n          var kernelResult;\n          '+kernel+'\n          ret[this.thread.z][this.thread.y][this.thread.x] = kernelResult;\n'+(this.subKernelOutputVariableNames===null?'':this.subKernelOutputVariableNames.map(function(name){return'        '+name+'Z[this.thread.z][this.thread.y][this.thread.x] = '+name+';\n'}).join(''))+'\n          }\n        }\n      }\n      \n      if (this.graphical) {\n        this._imageData.data.set(this._colorData);\n        this._canvasCtx.putImageData(this._imageData, 0, 0);\n        return;\n      }\n      \n      if (this.output.length === 1) {\n        ret = ret[0][0];\n'+(this.subKernelOutputVariableNames===null?'':this.subKernelOutputVariableNames.map(function(name){return'    '+name+' = '+name+'Z[0][0];\n'}).join(''))+'\n      \n    } else if (this.output.length === 2) {\n      ret = ret[0];\n      '+(this.subKernelOutputVariableNames===null?'':this.subKernelOutputVariableNames.map(function(name){return'    '+name+' = '+name+'Z[0];\n'}).join(''))+'\n    }\n    \n    '+(this.subKernelOutputVariableNames===null?'return ret;\n':this.subKernels!==null?'var result = [\n        '+this.subKernelOutputVariableNames.map(function(name){return''+name}).join(',\n')+'\n      ];\n      result.result = ret;\n      return result;\n':'return {\n        result: ret,\n        '+Object.keys(this.subKernelProperties).map(function(name,i){return name+': '+_this2.subKernelOutputVariableNames[i]}).join(',\n')+'\n      };')+'\n    '+(prototypes.length>0?prototypes.join('\n'):'')+'\n    }.bind(this);';return kernelString}},{key:'toString',value:function toString(){return kernelString(this)}},{key:'precompileKernelObj',value:function precompileKernelObj(argTypes){var threadDim=this.threadDim||(this.threadDim=utils.clone(this.output));return{threadDim:threadDim}}},{key:'_getLoopMaxString',value:function _getLoopMaxString(){return this.loopMaxIterations?' '+parseInt(this.loopMaxIterations)+';\n':' 1000;\n'}}],[{key:'compileKernel',value:function compileKernel(precompileObj){var threadDim=precompileObj.threadDim;while(threadDim.length<3){threadDim.push(1)}}}]);return CPUKernel}(KernelBase)},{"../../core/utils":78,"../kernel-base":54,"./kernel-string":49}],51:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var utils=require('../../core/utils');var RunnerBase=require('../runner-base');var CPUKernel=require('./kernel');var CPUFunctionBuilder=require('./function-builder');module.exports=function(_RunnerBase){_inherits(CPURunner,_RunnerBase);function CPURunner(settings){_classCallCheck(this,CPURunner);var _this=_possibleConstructorReturn(this,(CPURunner.__proto__||Object.getPrototypeOf(CPURunner)).call(this,new CPUFunctionBuilder(),settings));_this.Kernel=CPUKernel;_this.kernel=null;return _this}
_createClass(CPURunner,[{key:'getMode',value:function getMode(){return'cpu'}}]);return CPURunner}(RunnerBase)},{"../../core/utils":78,"../runner-base":56,"./function-builder":47,"./kernel":50}],52:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
module.exports=function(){function FunctionBuilderBase(gpu){_classCallCheck(this,FunctionBuilderBase);this.nodeMap={};this.nativeFunctions={};this.gpu=gpu;this.rootKernel=null;this.Node=null}
_createClass(FunctionBuilderBase,[{key:'addNativeFunction',value:function addNativeFunction(functionName,glslFunctionString){this.nativeFunctions[functionName]=glslFunctionString}},{key:'addFunction',value:function addFunction(functionName,jsFunction,options,paramTypes,returnType){this.addFunctionNode(new this.Node(functionName,jsFunction,options,paramTypes,returnType).setAddFunction(this.addFunction.bind(this)))}},{key:'addFunctions',value:function addFunctions(functions,options){if(functions){if(Array.isArray(functions)){for(var i=0;i<functions.length;i++){this.addFunction(null,functions[i],options)}}else{for(var p in functions){this.addFunction(p,functions[p],options)}}}}},{key:'addNativeFunctions',value:function addNativeFunctions(nativeFunctions){for(var functionName in nativeFunctions){if(!nativeFunctions.hasOwnProperty(functionName))continue;this.addNativeFunction(functionName,nativeFunctions[functionName])}}},{key:'addFunctionNode',value:function addFunctionNode(inNode){this.nodeMap[inNode.functionName]=inNode;if(inNode.isRootKernel){this.rootKernel=inNode}}},{key:'traceFunctionCalls',value:function traceFunctionCalls(functionName,retList,parent){functionName=functionName||'kernel';retList=retList||[];var fNode=this.nodeMap[functionName];if(fNode){var functionIndex=retList.indexOf(functionName);if(functionIndex===-1){retList.push(functionName);if(parent){fNode.parent=parent}
fNode.getFunctionString();for(var i=0;i<fNode.calledFunctions.length;++i){this.traceFunctionCalls(fNode.calledFunctions[i],retList,fNode)}}else{var dependantFunctionName=retList.splice(functionIndex,1)[0];retList.push(dependantFunctionName)}}
if(this.nativeFunctions[functionName]){if(retList.indexOf(functionName)>=0){}else{retList.push(functionName)}}
return retList}},{key:'addKernel',value:function addKernel(fnString,options,paramNames,paramTypes){var kernelNode=new this.Node('kernel',fnString,options,paramTypes);kernelNode.setAddFunction(this.addFunction.bind(this));kernelNode.paramNames=paramNames;kernelNode.paramTypes=paramTypes;kernelNode.isRootKernel=!0;this.addFunctionNode(kernelNode);return kernelNode}},{key:'addSubKernel',value:function addSubKernel(jsFunction,options,paramTypes,returnType){var kernelNode=new this.Node(null,jsFunction,options,paramTypes,returnType);kernelNode.setAddFunction(this.addFunction.bind(this));kernelNode.isSubKernel=!0;this.addFunctionNode(kernelNode);return kernelNode}},{key:'getPrototypeString',value:function getPrototypeString(functionName){return this.getPrototypes(functionName).join('\n')}},{key:'getPrototypes',value:function getPrototypes(functionName){this.rootKernel.generate();if(functionName){return this.getPrototypesFromFunctionNames(this.traceFunctionCalls(functionName,[]).reverse())}
return this.getPrototypesFromFunctionNames(Object.keys(this.nodeMap))}},{key:'getStringFromFunctionNames',value:function getStringFromFunctionNames(functionList){var ret=[];for(var i=0;i<functionList.length;++i){var node=this.nodeMap[functionList[i]];if(node){ret.push(this.nodeMap[functionList[i]].getFunctionString())}}
return ret.join('\n')}},{key:'getPrototypesFromFunctionNames',value:function getPrototypesFromFunctionNames(functionList,opt){var ret=[];for(var i=0;i<functionList.length;++i){var functionName=functionList[i];var node=this.nodeMap[functionName];if(node){ret.push(node.getFunctionPrototypeString(opt))}else if(this.nativeFunctions[functionName]){ret.push(this.nativeFunctions[functionName])}}
return ret}},{key:'getPrototypeStringFromFunctionNames',value:function getPrototypeStringFromFunctionNames(functionList,opt){return this.getPrototypesFromFunctionNames(functionList,opt).toString()}},{key:'getString',value:function getString(functionName,opt){if(opt===undefined){opt={}}
if(functionName){return this.getStringFromFunctionNames(this.traceFunctionCalls(functionName,[],opt).reverse(),opt)}
return this.getStringFromFunctionNames(Object.keys(this.nodeMap),opt)}}]);return FunctionBuilderBase}()},{}],53:[function(require,module,exports){'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var utils=require('../core/utils');var acorn=require('acorn');module.exports=function(){function BaseFunctionNode(functionName,jsFunction,options,paramTypes,returnType){_classCallCheck(this,BaseFunctionNode);this.calledFunctions=[];this.calledFunctionsArguments={};this.initVariables=[];this.readVariables=[];this.writeVariables=[];this.addFunction=null;this.isRootKernel=!1;this.isSubKernel=!1;this.parent=null;this.debug=null;this.prototypeOnly=null;this.constants=null;this.output=null;if(options){if(options.hasOwnProperty('debug')){this.debug=options.debug}
if(options.hasOwnProperty('prototypeOnly')){this.prototypeOnly=options.prototypeOnly}
if(options.hasOwnProperty('constants')){this.constants=options.constants}
if(options.hasOwnProperty('output')){this.output=options.output}
if(options.hasOwnProperty('loopMaxIterations')){this.loopMaxIterations=options.loopMaxIterations}}
if(!jsFunction){throw 'jsFunction, parameter is missing'}
this.jsFunctionString=jsFunction.toString();if(!utils.isFunctionString(this.jsFunctionString)){console.error('jsFunction, to string conversion check failed: not a function?',this.jsFunctionString);throw 'jsFunction, to string conversion check failed: not a function?'}
if(!utils.isFunction(jsFunction)){this.jsFunction=null}else{this.jsFunction=jsFunction}
this.functionName=functionName||jsFunction&&jsFunction.name||utils.getFunctionNameFromString(this.jsFunctionString);if(!this.functionName){throw 'jsFunction, missing name argument or value'}
this.paramNames=utils.getParamNamesFromString(this.jsFunctionString);if(paramTypes){if(Array.isArray(paramTypes)){if(paramTypes.length!==this.paramNames.length){throw 'Invalid argument type array length, against function length -> ('+paramTypes.length+','+this.paramNames.length+')'}
this.paramTypes=paramTypes}else if((typeof paramTypes==='undefined'?'undefined':_typeof(paramTypes))==='object'){var paramVariableNames=Object.keys(paramTypes);if(paramTypes.hasOwnProperty('returns')){this.returnType=paramTypes.returns;paramVariableNames.splice(paramVariableNames.indexOf('returns'),1)}
if(paramVariableNames.length>0&&paramVariableNames.length!==this.paramNames.length){throw 'Invalid argument type array length, against function length -> ('+paramVariableNames.length+','+this.paramNames.length+')'}else{this.paramTypes=this.paramNames.map(function(key){if(paramTypes.hasOwnProperty(key)){return paramTypes[key]}else{return'float'}})}}}else{this.paramTypes=[]}
if(!this.returnType){this.returnType=returnType||'float'}}
_createClass(BaseFunctionNode,[{key:'isIdentifierConstant',value:function isIdentifierConstant(paramName){if(!this.constants)return!1;return this.constants.hasOwnProperty(paramName)}},{key:'setAddFunction',value:function setAddFunction(fn){this.addFunction=fn;return this}},{key:'getJsFunction',value:function getJsFunction(){if(this.jsFunction){return this.jsFunction}
if(this.jsFunctionString){this.jsFunction=eval(this.jsFunctionString);return this.jsFunction}
throw 'Missing jsFunction, and jsFunctionString parameter'}},{key:'astMemberExpressionUnroll',value:function astMemberExpressionUnroll(ast,funcParam){if(ast.type==='Identifier'){return ast.name}else if(ast.type==='ThisExpression'){return'this'}
if(ast.type==='MemberExpression'){if(ast.object&&ast.property){if(ast.object.hasOwnProperty('name')&&ast.object.name[0]==='_'){return this.astMemberExpressionUnroll(ast.property,funcParam)}
return this.astMemberExpressionUnroll(ast.object,funcParam)+'.'+this.astMemberExpressionUnroll(ast.property,funcParam)}}
if(ast.hasOwnProperty('expressions')){var firstExpression=ast.expressions[0];if(firstExpression.type==='Literal'&&firstExpression.value===0&&ast.expressions.length===2){return this.astMemberExpressionUnroll(ast.expressions[1])}}
throw this.astErrorOutput('Unknown CallExpression_unroll',ast,funcParam)}},{key:'getJsAST',value:function getJsAST(inParser){if(this.jsFunctionAST){return this.jsFunctionAST}
inParser=inParser||acorn;if(inParser===null){throw 'Missing JS to AST parser'}
var ast=inParser.parse('var '+this.functionName+' = '+this.jsFunctionString+';',{locations:!0});if(ast===null){throw 'Failed to parse JS code'}
var funcAST=ast.body[0].declarations[0].init;this.jsFunctionAST=funcAST;return funcAST}},{key:'getFunctionString',value:function getFunctionString(){this.generate();return this.functionString}},{key:'setFunctionString',value:function setFunctionString(functionString){this.functionString=functionString}},{key:'getParamType',value:function getParamType(paramName){var paramIndex=this.paramNames.indexOf(paramName);if(paramIndex===-1)return null;if(!this.parent)return null;if(this.paramTypes[paramIndex])return this.paramTypes[paramIndex];var calledFunctionArguments=this.parent.calledFunctionsArguments[this.functionName];for(var i=0;i<calledFunctionArguments.length;i++){var calledFunctionArgument=calledFunctionArguments[i];if(calledFunctionArgument[paramIndex]!==null){return this.paramTypes[paramIndex]=calledFunctionArgument[paramIndex].type}}
return null}},{key:'getUserParamName',value:function getUserParamName(paramName){var paramIndex=this.paramNames.indexOf(paramName);if(paramIndex===-1)return null;if(!this.parent)return null;var calledFunctionArguments=this.parent.calledFunctionsArguments[this.functionName];for(var i=0;i<calledFunctionArguments.length;i++){var calledFunctionArgument=calledFunctionArguments[i];if(calledFunctionArgument[paramIndex]!==null){return calledFunctionArgument[paramIndex].name}}
return null}},{key:'generate',value:function generate(options){throw new Error('generate not defined on BaseFunctionNode')}},{key:'astErrorOutput',value:function astErrorOutput(error,ast,funcParam){console.error(utils.getAstString(this.jsFunctionString,ast));console.error(error,ast,funcParam);return error}},{key:'astDebuggerStatement',value:function astDebuggerStatement(arrNode,retArr,funcParam){return retArr}}]);return BaseFunctionNode}()},{"../core/utils":78,"acorn":2}],54:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var utils=require('../core/utils');module.exports=function(){function BaseKernel(fnString,settings){_classCallCheck(this,BaseKernel);this.paramNames=utils.getParamNamesFromString(fnString);this.fnString=fnString;this.output=null;this.debug=!1;this.graphical=!1;this.loopMaxIterations=0;this.constants=null;this.wraparound=null;this.hardcodeConstants=null;this.outputToTexture=null;this.outputImmutable=null;this.texSize=null;this._canvas=null;this._webGl=null;this.threadDim=null;this.floatTextures=null;this.floatOutput=null;this.floatOutputForce=null;this.addFunction=null;this.functions=null;this.nativeFunctions=null;this.subKernels=null;this.subKernelProperties=null;this.subKernelNames=null;this.subKernelOutputVariableNames=null;this.functionBuilder=null;this.paramTypes=null;for(var p in settings){if(!settings.hasOwnProperty(p)||!this.hasOwnProperty(p))continue;this[p]=settings[p]}
if(settings.hasOwnProperty('canvas')){this._canvas=settings.canvas}
if(settings.hasOwnProperty('output')){this.setOutput(settings.output)}
if(!this._canvas)this._canvas=utils.initCanvas()}
_createClass(BaseKernel,[{key:'build',value:function build(){throw new Error('"build" not defined on Base')}},{key:'setupParams',value:function setupParams(args){var paramTypes=this.paramTypes=[];for(var i=0;i<args.length;i++){var param=args[i];var paramType=utils.getArgumentType(param);paramTypes.push(paramType)}}},{key:'setAddFunction',value:function setAddFunction(cb){this.addFunction=cb;return this}},{key:'setFunctions',value:function setFunctions(functions){this.functions=functions;return this}},{key:'setOutput',value:function setOutput(output){if(output.hasOwnProperty('x')){if(output.hasOwnProperty('y')){if(output.hasOwnProperty('z')){this.output=[output.x,output.y,output.z]}else{this.output=[output.x,output.y]}}else{this.output=[output.x]}}else{this.output=output}
return this}},{key:'setDebug',value:function setDebug(flag){this.debug=flag;return this}},{key:'setGraphical',value:function setGraphical(flag){this.graphical=flag;return this}},{key:'setLoopMaxIterations',value:function setLoopMaxIterations(max){this.loopMaxIterations=max;return this}},{key:'setConstants',value:function setConstants(constants){this.constants=constants;return this}},{key:'setWraparound',value:function setWraparound(flag){console.warn('Wraparound mode is not supported and undocumented.');this.wraparound=flag;return this}},{key:'setHardcodeConstants',value:function setHardcodeConstants(flag){this.hardcodeConstants=flag;return this}},{key:'setOutputToTexture',value:function setOutputToTexture(flag){this.outputToTexture=flag;return this}},{key:'setOutputImmutable',value:function setOutputImmutable(flag){this.outputImmutable=flag;return this}},{key:'setFloatTextures',value:function setFloatTextures(flag){this.floatTextures=flag;return this}},{key:'setFloatOutput',value:function setFloatOutput(flag){this.floatOutput=flag;return this}},{key:'setFloatOutputForce',value:function setFloatOutputForce(flag){this.floatOutputForce=flag;return this}},{key:'setCanvas',value:function setCanvas(canvas){this._canvas=canvas;return this}},{key:'setWebGl',value:function setWebGl(webGl){this._webGl=webGl;return this}},{key:'getCanvas',value:function getCanvas(){return this._canvas}},{key:'getWebGl',value:function getWebGl(){return this._webGl}},{key:'validateOptions',value:function validateOptions(){throw new Error('validateOptions not defined')}},{key:'exec',value:function exec(){return this.execute.apply(this,arguments)}},{key:'execute',value:function execute(){var _this=this;var args=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);return utils.newPromise(function(accept,reject){try{accept(_this.run.apply(_this,args))}catch(e){reject(e)}})}},{key:'addSubKernel',value:function addSubKernel(fnString){if(this.subKernels===null){this.subKernels=[];this.subKernelNames=[]}
this.subKernels.push(fnString);this.subKernelNames.push(utils.getFunctionNameFromString(fnString));return this}},{key:'addSubKernelProperty',value:function addSubKernelProperty(property,fnString){if(this.subKernelProperties===null){this.subKernelProperties={};this.subKernelNames=[]}
if(this.subKernelProperties.hasOwnProperty(property)){throw new Error('cannot add sub kernel '+property+', already defined')}
this.subKernelProperties[property]=fnString;this.subKernelNames.push(utils.getFunctionNameFromString(fnString));return this}},{key:'addNativeFunction',value:function addNativeFunction(name,source){this.functionBuilder.addNativeFunction(name,source)}}]);return BaseKernel}()},{"../core/utils":78}],55:[function(require,module,exports){'use strict';var utils=require('../core/utils');module.exports=function kernelRunShortcut(kernel){var shortcut=function shortcut(){return kernel.run.apply(kernel,arguments)};utils.allPropertiesOf(kernel).forEach(function(key){if(key[0]==='_'&&key[1]==='_')return;if(typeof kernel[key]==='function'){if(key.substring(0,3)==='add'||key.substring(0,3)==='set'){shortcut[key]=function(){kernel[key].apply(kernel,arguments);return shortcut}}else{shortcut[key]=kernel[key].bind(kernel)}}else{shortcut.__defineGetter__(key,function(){return kernel[key]});shortcut.__defineSetter__(key,function(value){kernel[key]=value})}});shortcut.kernel=kernel;return shortcut}},{"../core/utils":78}],56:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var utils=require('../core/utils');var kernelRunShortcut=require('./kernel-run-shortcut');module.exports=function(){function BaseRunner(functionBuilder,settings){_classCallCheck(this,BaseRunner);settings=settings||{};this.kernel=settings.kernel;this.canvas=settings.canvas;this.webGl=settings.webGl;this.fn=null;this.functionBuilder=functionBuilder;this.fnString=null;this.endianness=utils.systemEndianness()}
_createClass(BaseRunner,[{key:'textureToArray',value:function textureToArray(texture){var copy=this.createKernel(function(x){return x[this.thread.z][this.thread.y][this.thread.x]});return copy(texture)}},{key:'deleteTexture',value:function deleteTexture(texture){this.webGl.deleteTexture(texture.texture)}},{key:'buildPromiseKernel',value:function buildPromiseKernel(){throw new Error('not yet implemented')}},{key:'getMode',value:function getMode(){throw new Error('"mode" not implemented on BaseRunner')}},{key:'buildKernel',value:function buildKernel(fn,settings){settings=Object.assign({},settings||{});var fnString=fn.toString();if(!settings.functionBuilder){settings.functionBuilder=this.functionBuilder}
if(!settings.canvas){settings.canvas=this.canvas}
if(!settings.webGl){settings.webGl=this.webgl}
return kernelRunShortcut(new this.Kernel(fnString,settings))}}]);return BaseRunner}()},{"../core/utils":78,"./kernel-run-shortcut":55}],57:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var FunctionBuilderBase=require('../function-builder-base');var WebGLFunctionNode=require('./function-node');module.exports=function(_FunctionBuilderBase){_inherits(WebGLFunctionBuilder,_FunctionBuilderBase);function WebGLFunctionBuilder(){_classCallCheck(this,WebGLFunctionBuilder);var _this=_possibleConstructorReturn(this,(WebGLFunctionBuilder.__proto__||Object.getPrototypeOf(WebGLFunctionBuilder)).call(this));_this.Node=WebGLFunctionNode;return _this}
_createClass(WebGLFunctionBuilder,[{key:'polyfillStandardFunctions',value:function polyfillStandardFunctions(){this.addFunction('round',_round)}}],[{key:'round',value:function round(a){return _round(a)}}]);return WebGLFunctionBuilder}(FunctionBuilderBase);function _round(a){return Math.floor(a+0.5)}},{"../function-builder-base":52,"./function-node":58}],58:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var FunctionNodeBase=require('../function-node-base');var utils=require('../../core/utils');var jsMathPrefix='Math.';var localPrefix='this.';var constantsPrefix='this.constants.';var DECODE32_ENCODE32=/decode32\(\s+encode32\(/g;var ENCODE32_DECODE32=/encode32\(\s+decode32\(/g;module.exports=function(_FunctionNodeBase){_inherits(WebGLFunctionNode,_FunctionNodeBase);function WebGLFunctionNode(){_classCallCheck(this,WebGLFunctionNode);return _possibleConstructorReturn(this,(WebGLFunctionNode.__proto__||Object.getPrototypeOf(WebGLFunctionNode)).apply(this,arguments))}
_createClass(WebGLFunctionNode,[{key:'generate',value:function generate(){if(this.debug){console.log(this)}
if(this.prototypeOnly){return WebGLFunctionNode.astFunctionPrototype(this.getJsAST(),[],this).join('').trim()}else{this.functionStringArray=this.astGeneric(this.getJsAST(),[],this)}
this.functionString=webGlRegexOptimize(this.functionStringArray.join('').trim());return this.functionString}},{key:'astGeneric',value:function astGeneric(ast,retArr,funcParam){if(ast===null){throw this.astErrorOutput('NULL ast',ast,funcParam)}else{if(Array.isArray(ast)){for(var i=0;i<ast.length;i++){this.astGeneric(ast[i],retArr,funcParam)}
return retArr}
switch(ast.type){case 'FunctionDeclaration':return this.astFunctionDeclaration(ast,retArr,funcParam);case 'FunctionExpression':return this.astFunctionExpression(ast,retArr,funcParam);case 'ReturnStatement':return this.astReturnStatement(ast,retArr,funcParam);case 'Literal':return this.astLiteral(ast,retArr,funcParam);case 'BinaryExpression':return this.astBinaryExpression(ast,retArr,funcParam);case 'Identifier':return this.astIdentifierExpression(ast,retArr,funcParam);case 'AssignmentExpression':return this.astAssignmentExpression(ast,retArr,funcParam);case 'ExpressionStatement':return this.astExpressionStatement(ast,retArr,funcParam);case 'EmptyStatement':return this.astEmptyStatement(ast,retArr,funcParam);case 'BlockStatement':return this.astBlockStatement(ast,retArr,funcParam);case 'IfStatement':return this.astIfStatement(ast,retArr,funcParam);case 'BreakStatement':return this.astBreakStatement(ast,retArr,funcParam);case 'ContinueStatement':return this.astContinueStatement(ast,retArr,funcParam);case 'ForStatement':return this.astForStatement(ast,retArr,funcParam);case 'WhileStatement':return this.astWhileStatement(ast,retArr,funcParam);case 'VariableDeclaration':return this.astVariableDeclaration(ast,retArr,funcParam);case 'VariableDeclarator':return this.astVariableDeclarator(ast,retArr,funcParam);case 'ThisExpression':return this.astThisExpression(ast,retArr,funcParam);case 'SequenceExpression':return this.astSequenceExpression(ast,retArr,funcParam);case 'UnaryExpression':return this.astUnaryExpression(ast,retArr,funcParam);case 'UpdateExpression':return this.astUpdateExpression(ast,retArr,funcParam);case 'LogicalExpression':return this.astLogicalExpression(ast,retArr,funcParam);case 'MemberExpression':return this.astMemberExpression(ast,retArr,funcParam);case 'CallExpression':return this.astCallExpression(ast,retArr,funcParam);case 'ArrayExpression':return this.astArrayExpression(ast,retArr,funcParam);case 'DebuggerStatement':return this.astDebuggerStatement(ast,retArr,funcParam)}
throw this.astErrorOutput('Unknown ast type : '+ast.type,ast,funcParam)}}},{key:'astFunctionDeclaration',value:function astFunctionDeclaration(ast,retArr,funcParam){if(this.addFunction){this.addFunction(null,utils.getAstString(this.jsFunctionString,ast))}
return retArr}},{key:'astFunctionExpression',value:function astFunctionExpression(ast,retArr,funcParam){if(funcParam.isRootKernel){retArr.push('void');funcParam.kernalAst=ast}else{retArr.push(funcParam.returnType)}
retArr.push(' ');retArr.push(funcParam.functionName);retArr.push('(');if(!funcParam.isRootKernel){for(var i=0;i<funcParam.paramNames.length;++i){var paramName=funcParam.paramNames[i];if(i>0){retArr.push(', ')}
var type=funcParam.getParamType(paramName);switch(type){case 'Texture':case 'Input':case 'Array':retArr.push('sampler2D');break;default:retArr.push('float')}
retArr.push(' ');retArr.push('user_');retArr.push(paramName)}}
retArr.push(') {\n');for(var _i=0;_i<ast.body.body.length;++_i){this.astGeneric(ast.body.body[_i],retArr,funcParam);retArr.push('\n')}
retArr.push('}\n');return retArr}},{key:'astReturnStatement',value:function astReturnStatement(ast,retArr,funcParam){if(funcParam.isRootKernel){retArr.push('kernelResult = ');this.astGeneric(ast.argument,retArr,funcParam);retArr.push(';');retArr.push('return;')}else if(funcParam.isSubKernel){retArr.push(funcParam.functionName+'Result = ');this.astGeneric(ast.argument,retArr,funcParam);retArr.push(';');retArr.push('return '+funcParam.functionName+'Result;')}else{retArr.push('return ');this.astGeneric(ast.argument,retArr,funcParam);retArr.push(';')}
return retArr}},{key:'astLiteral',value:function astLiteral(ast,retArr,funcParam){if(isNaN(ast.value)){throw this.astErrorOutput('Non-numeric literal not supported : '+ast.value,ast,funcParam)}
retArr.push(ast.value);if(Number.isInteger(ast.value)){retArr.push('.0')}
return retArr}},{key:'astBinaryExpression',value:function astBinaryExpression(ast,retArr,funcParam){retArr.push('(');if(ast.operator==='%'){retArr.push('mod(');this.astGeneric(ast.left,retArr,funcParam);retArr.push(',');this.astGeneric(ast.right,retArr,funcParam);retArr.push(')')}else if(ast.operator==='==='){this.astGeneric(ast.left,retArr,funcParam);retArr.push('==');this.astGeneric(ast.right,retArr,funcParam)}else if(ast.operator==='!=='){this.astGeneric(ast.left,retArr,funcParam);retArr.push('!=');this.astGeneric(ast.right,retArr,funcParam)}else{this.astGeneric(ast.left,retArr,funcParam);retArr.push(ast.operator);this.astGeneric(ast.right,retArr,funcParam)}
retArr.push(')');return retArr}},{key:'astIdentifierExpression',value:function astIdentifierExpression(idtNode,retArr,funcParam){if(idtNode.type!=='Identifier'){throw this.astErrorOutput('IdentifierExpression - not an Identifier',idtNode,funcParam)}
switch(idtNode.name){case 'gpu_threadX':retArr.push('threadId.x');break;case 'gpu_threadY':retArr.push('threadId.y');break;case 'gpu_threadZ':retArr.push('threadId.z');break;case 'gpu_outputX':retArr.push('uOutputDim.x');break;case 'gpu_outputY':retArr.push('uOutputDim.y');break;case 'gpu_outputZ':retArr.push('uOutputDim.z');break;default:if(this.constants&&this.constants.hasOwnProperty(idtNode.name)){retArr.push('constants_'+idtNode.name)}else{var userParamName=funcParam.getUserParamName(idtNode.name);if(userParamName!==null){retArr.push('user_'+userParamName)}else{retArr.push('user_'+idtNode.name)}}}
return retArr}},{key:'astForStatement',value:function astForStatement(forNode,retArr,funcParam){if(forNode.type!=='ForStatement'){throw this.astErrorOutput('Invalid for statment',forNode,funcParam)}
if(forNode.test&&forNode.test.type==='BinaryExpression'){if(forNode.test.right.type==='Identifier'&&forNode.test.operator==='<'&&this.isIdentifierConstant(forNode.test.right.name)===!1){if(!this.loopMaxIterations){console.warn('Warning: loopMaxIterations is not set! Using default of 1000 which may result in unintended behavior.');console.warn('Set loopMaxIterations or use a for loop of fixed length to silence this message.')}
retArr.push('for (');this.astGeneric(forNode.init,retArr,funcParam);this.astGeneric(forNode.test.left,retArr,funcParam);retArr.push(forNode.test.operator);retArr.push('LOOP_MAX');retArr.push(';');this.astGeneric(forNode.update,retArr,funcParam);retArr.push(')');retArr.push('{\n');retArr.push('if (');this.astGeneric(forNode.test.left,retArr,funcParam);retArr.push(forNode.test.operator);this.astGeneric(forNode.test.right,retArr,funcParam);retArr.push(') {\n');if(forNode.body.type==='BlockStatement'){for(var i=0;i<forNode.body.body.length;i++){this.astGeneric(forNode.body.body[i],retArr,funcParam)}}else{this.astGeneric(forNode.body,retArr,funcParam)}
retArr.push('} else {\n');retArr.push('break;\n');retArr.push('}\n');retArr.push('}\n');return retArr}else{var declarations=JSON.parse(JSON.stringify(forNode.init.declarations));var updateArgument=forNode.update.argument;if(!Array.isArray(declarations)||declarations.length<1){console.log(this.jsFunctionString);throw new Error('Error: Incompatible for loop declaration')}
if(declarations.length>1){var initArgument=null;for(var _i2=0;_i2<declarations.length;_i2++){var declaration=declarations[_i2];if(declaration.id.name===updateArgument.name){initArgument=declaration;declarations.splice(_i2,1)}else{retArr.push('float ');this.astGeneric(declaration,retArr,funcParam);retArr.push(';')}}
retArr.push('for (float ');this.astGeneric(initArgument,retArr,funcParam);retArr.push(';')}else{retArr.push('for (');this.astGeneric(forNode.init,retArr,funcParam)}
this.astGeneric(forNode.test,retArr,funcParam);retArr.push(';');this.astGeneric(forNode.update,retArr,funcParam);retArr.push(')');this.astGeneric(forNode.body,retArr,funcParam);return retArr}}
throw this.astErrorOutput('Invalid for statement',forNode,funcParam)}},{key:'astWhileStatement',value:function astWhileStatement(whileNode,retArr,funcParam){if(whileNode.type!=='WhileStatement'){throw this.astErrorOutput('Invalid while statment',whileNode,funcParam)}
retArr.push('for (float i = 0.0; i < LOOP_MAX; i++) {');retArr.push('if (');this.astGeneric(whileNode.test,retArr,funcParam);retArr.push(') {\n');this.astGeneric(whileNode.body,retArr,funcParam);retArr.push('} else {\n');retArr.push('break;\n');retArr.push('}\n');retArr.push('}\n');return retArr}},{key:'astAssignmentExpression',value:function astAssignmentExpression(assNode,retArr,funcParam){if(assNode.operator==='%='){this.astGeneric(assNode.left,retArr,funcParam);retArr.push('=');retArr.push('mod(');this.astGeneric(assNode.left,retArr,funcParam);retArr.push(',');this.astGeneric(assNode.right,retArr,funcParam);retArr.push(')')}else{this.astGeneric(assNode.left,retArr,funcParam);retArr.push(assNode.operator);this.astGeneric(assNode.right,retArr,funcParam);return retArr}}},{key:'astEmptyStatement',value:function astEmptyStatement(eNode,retArr,funcParam){return retArr}},{key:'astBlockStatement',value:function astBlockStatement(bNode,retArr,funcParam){retArr.push('{\n');for(var i=0;i<bNode.body.length;i++){this.astGeneric(bNode.body[i],retArr,funcParam)}
retArr.push('}\n');return retArr}},{key:'astExpressionStatement',value:function astExpressionStatement(esNode,retArr,funcParam){this.astGeneric(esNode.expression,retArr,funcParam);retArr.push(';\n');return retArr}},{key:'astVariableDeclaration',value:function astVariableDeclaration(vardecNode,retArr,funcParam){retArr.push('float ');for(var i=0;i<vardecNode.declarations.length;i++){if(i>0){retArr.push(',')}
this.astGeneric(vardecNode.declarations[i],retArr,funcParam)}
retArr.push(';');return retArr}},{key:'astVariableDeclarator',value:function astVariableDeclarator(ivardecNode,retArr,funcParam){this.astGeneric(ivardecNode.id,retArr,funcParam);if(ivardecNode.init!==null){retArr.push('=');this.astGeneric(ivardecNode.init,retArr,funcParam)}
return retArr}},{key:'astIfStatement',value:function astIfStatement(ifNode,retArr,funcParam){retArr.push('if (');this.astGeneric(ifNode.test,retArr,funcParam);retArr.push(')');if(ifNode.consequent.type==='BlockStatement'){this.astGeneric(ifNode.consequent,retArr,funcParam)}else{retArr.push(' {\n');this.astGeneric(ifNode.consequent,retArr,funcParam);retArr.push('\n}\n')}
if(ifNode.alternate){retArr.push('else ');if(ifNode.alternate.type==='BlockStatement'){this.astGeneric(ifNode.alternate,retArr,funcParam)}else{retArr.push(' {\n');this.astGeneric(ifNode.alternate,retArr,funcParam);retArr.push('\n}\n')}}
return retArr}},{key:'astBreakStatement',value:function astBreakStatement(brNode,retArr,funcParam){retArr.push('break;\n');return retArr}},{key:'astContinueStatement',value:function astContinueStatement(crNode,retArr,funcParam){retArr.push('continue;\n');return retArr}},{key:'astLogicalExpression',value:function astLogicalExpression(logNode,retArr,funcParam){retArr.push('(');this.astGeneric(logNode.left,retArr,funcParam);retArr.push(logNode.operator);this.astGeneric(logNode.right,retArr,funcParam);retArr.push(')');return retArr}},{key:'astUpdateExpression',value:function astUpdateExpression(uNode,retArr,funcParam){if(uNode.prefix){retArr.push(uNode.operator);this.astGeneric(uNode.argument,retArr,funcParam)}else{this.astGeneric(uNode.argument,retArr,funcParam);retArr.push(uNode.operator)}
return retArr}},{key:'astUnaryExpression',value:function astUnaryExpression(uNode,retArr,funcParam){if(uNode.prefix){retArr.push(uNode.operator);this.astGeneric(uNode.argument,retArr,funcParam)}else{this.astGeneric(uNode.argument,retArr,funcParam);retArr.push(uNode.operator)}
return retArr}},{key:'astThisExpression',value:function astThisExpression(tNode,retArr,funcParam){retArr.push('this');return retArr}},{key:'astMemberExpression',value:function astMemberExpression(mNode,retArr,funcParam){if(mNode.computed){if(mNode.object.type==='Identifier'){var reqName=mNode.object.name;var funcName=funcParam.functionName||'kernel';var assumeNotTexture=!1;if(funcParam.paramNames){var idx=funcParam.paramNames.indexOf(reqName);if(idx>=0&&funcParam.paramTypes[idx]==='float'){assumeNotTexture=!0}}
if(assumeNotTexture){this.astGeneric(mNode.object,retArr,funcParam);retArr.push('[int(');this.astGeneric(mNode.property,retArr,funcParam);retArr.push(')]')}else{retArr.push('get(');this.astGeneric(mNode.object,retArr,funcParam);retArr.push(', vec2(');this.astGeneric(mNode.object,retArr,funcParam);retArr.push('Size[0],');this.astGeneric(mNode.object,retArr,funcParam);retArr.push('Size[1]), vec3(');this.astGeneric(mNode.object,retArr,funcParam);retArr.push('Dim[0],');this.astGeneric(mNode.object,retArr,funcParam);retArr.push('Dim[1],');this.astGeneric(mNode.object,retArr,funcParam);retArr.push('Dim[2]');retArr.push('), ');this.astGeneric(mNode.property,retArr,funcParam);retArr.push(')')}}else{this.astGeneric(mNode.object,retArr,funcParam);var last=retArr.pop();retArr.push(',');this.astGeneric(mNode.property,retArr,funcParam);retArr.push(last)}}else{var unrolled=this.astMemberExpressionUnroll(mNode);var unrolled_lc=unrolled.toLowerCase();if(unrolled.indexOf(constantsPrefix)===0){unrolled='constants_'+unrolled.slice(constantsPrefix.length)}
switch(unrolled_lc){case 'this.thread.x':retArr.push('threadId.x');break;case 'this.thread.y':retArr.push('threadId.y');break;case 'this.thread.z':retArr.push('threadId.z');break;case 'this.output.x':retArr.push(this.output[0]+'.0');break;case 'this.output.y':retArr.push(this.output[1]+'.0');break;case 'this.output.z':retArr.push(this.output[2]+'.0');break;default:retArr.push(unrolled)}}
return retArr}},{key:'astSequenceExpression',value:function astSequenceExpression(sNode,retArr,funcParam){for(var i=0;i<sNode.expressions.length;i++){if(i>0){retArr.push(',')}
this.astGeneric(sNode.expressions,retArr,funcParam)}
return retArr}},{key:'astCallExpression',value:function astCallExpression(ast,retArr,funcParam){if(ast.callee){var funcName=this.astMemberExpressionUnroll(ast.callee);if(funcName.indexOf(jsMathPrefix)===0){funcName=funcName.slice(jsMathPrefix.length)}
if(funcName.indexOf(localPrefix)===0){funcName=funcName.slice(localPrefix.length)}
if(funcName==='atan2'){funcName='atan'}
if(funcParam.calledFunctions.indexOf(funcName)<0){funcParam.calledFunctions.push(funcName)}
if(!funcParam.hasOwnProperty('funcName')){funcParam.calledFunctionsArguments[funcName]=[]}
var functionArguments=[];funcParam.calledFunctionsArguments[funcName].push(functionArguments);retArr.push(funcName);retArr.push('(');for(var i=0;i<ast.arguments.length;++i){var argument=ast.arguments[i];if(i>0){retArr.push(', ')}
this.astGeneric(argument,retArr,funcParam);if(argument.type==='Identifier'){var paramIndex=funcParam.paramNames.indexOf(argument.name);if(paramIndex===-1){functionArguments.push(null)}else{functionArguments.push({name:argument.name,type:funcParam.paramTypes[paramIndex]})}}else{functionArguments.push(null)}}
retArr.push(')');return retArr}
throw this.astErrorOutput('Unknown CallExpression',ast,funcParam);return retArr}},{key:'astArrayExpression',value:function astArrayExpression(arrNode,retArr,funcParam){var arrLen=arrNode.elements.length;retArr.push('float['+arrLen+'](');for(var i=0;i<arrLen;++i){if(i>0){retArr.push(', ')}
var subNode=arrNode.elements[i];this.astGeneric(subNode,retArr,funcParam)}
retArr.push(')');return retArr}},{key:'getFunctionPrototypeString',value:function getFunctionPrototypeString(){if(this.webGlFunctionPrototypeString){return this.webGlFunctionPrototypeString}
return this.webGlFunctionPrototypeString=this.generate()}},{key:'build',value:function build(){return this.getFunctionPrototypeString().length>0}}],[{key:'astFunctionPrototype',value:function astFunctionPrototype(ast,retArr,funcParam){if(funcParam.isRootKernel||funcParam.isSubKernel){return retArr}
retArr.push(funcParam.returnType);retArr.push(' ');retArr.push(funcParam.functionName);retArr.push('(');for(var i=0;i<funcParam.paramNames.length;++i){if(i>0){retArr.push(', ')}
retArr.push(funcParam.paramTypes[i]);retArr.push(' ');retArr.push('user_');retArr.push(funcParam.paramNames[i])}
retArr.push(');\n');return retArr}}]);return WebGLFunctionNode}(FunctionNodeBase);function isIdentifierKernelParam(paramName,ast,funcParam){return funcParam.paramNames.indexOf(paramName)!==-1}
function ensureIndentifierType(paramName,expectedType,ast,funcParam){var start=ast.loc.start;if(!isIdentifierKernelParam(paramName,funcParam)&&expectedType!=='float'){throw new Error('Error unexpected identifier '+paramName+' on line '+start.line)}else{var actualType=funcParam.paramTypes[funcParam.paramNames.indexOf(paramName)];if(actualType!==expectedType){throw new Error('Error unexpected identifier '+paramName+' on line '+start.line)}}}
function webGlRegexOptimize(inStr){return inStr.replace(DECODE32_ENCODE32,'((').replace(ENCODE32_DECODE32,'((')}},{"../../core/utils":78,"../function-node-base":53}],59:[function(require,module,exports){'use strict';var utils=require('../../core/utils');var kernelRunShortcut=require('../kernel-run-shortcut');function removeFnNoise(fn){if(/^function /.test(fn)){fn=fn.substring(9)}
return fn.replace(/[_]typeof/g,'typeof')}
function removeNoise(str){return str.replace(/[_]typeof/g,'typeof')}
module.exports=function(gpuKernel,name){return'() => {\n    '+kernelRunShortcut.toString()+';\n    const utils = {\n      allPropertiesOf: '+removeNoise(utils.allPropertiesOf.toString())+',\n      clone: '+removeNoise(utils.clone.toString())+',\n      splitArray: '+removeNoise(utils.splitArray.toString())+',\n      getArgumentType: '+removeNoise(utils.getArgumentType.toString())+',\n      getDimensions: '+removeNoise(utils.getDimensions.toString())+',\n      dimToTexSize: '+removeNoise(utils.dimToTexSize.toString())+',\n      flattenTo: '+removeNoise(utils.flattenTo.toString())+',\n      flatten2dArrayTo: '+removeNoise(utils.flatten2dArrayTo.toString())+',\n      flatten3dArrayTo: '+removeNoise(utils.flatten3dArrayTo.toString())+',\n      systemEndianness: \''+removeNoise(utils.systemEndianness())+'\',\n      initWebGl: '+removeNoise(utils.initWebGl.toString())+',\n      isArray: '+removeNoise(utils.isArray.toString())+'\n    };\n    const Utils = utils;\n    const canvases = [];\n    const maxTexSizes = {};\n    class '+(name||'Kernel')+' {\n      constructor() {\n        this.maxTexSize = null;\n        this.argumentsLength = 0;\n        this._canvas = null;\n        this._webGl = null;\n        this.built = false;\n        this.program = null;\n        this.paramNames = '+JSON.stringify(gpuKernel.paramNames)+';\n        this.paramTypes = '+JSON.stringify(gpuKernel.paramTypes)+';\n        this.texSize = '+JSON.stringify(gpuKernel.texSize)+';\n        this.output = '+JSON.stringify(gpuKernel.output)+';\n        this.compiledFragShaderString = `'+gpuKernel.compiledFragShaderString+'`;\n\t\t    this.compiledVertShaderString = `'+gpuKernel.compiledVertShaderString+'`;\n\t\t    this.programUniformLocationCache = {};\n\t\t    this.textureCache = {};\n\t\t    this.subKernelOutputTextures = null;\n\t\t    this.subKernelOutputVariableNames = null;\n\t\t    this.uniform1fCache = {};\n\t\t    this.uniform1iCache = {};\n\t\t    this.uniform2fCache = {};\n\t\t    this.uniform2fvCache = {};\n\t\t    this.uniform3fvCache = {};\n      }\n      '+removeFnNoise(gpuKernel._getFragShaderString.toString())+'\n      '+removeFnNoise(gpuKernel._getVertShaderString.toString())+'\n      validateOptions() {}\n      setupParams() {}\n      setCanvas(canvas) { this._canvas = canvas; return this; }\n      setWebGl(webGl) { this._webGl = webGl; return this; }\n      '+removeFnNoise(gpuKernel.getUniformLocation.toString())+'\n      '+removeFnNoise(gpuKernel.setupParams.toString())+'\n      '+removeFnNoise(gpuKernel.build.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.run.toString())+'\n\t\t  '+removeFnNoise(gpuKernel._addArgument.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.getArgumentTexture.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.getTextureCache.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.getOutputTexture.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.renderOutput.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.updateMaxTexSize.toString())+'\n\t\t  '+removeFnNoise(gpuKernel._setupOutputTexture.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.detachTextureCache.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.setUniform1f.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.setUniform1i.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.setUniform2f.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.setUniform2fv.toString())+'\n\t\t  '+removeFnNoise(gpuKernel.setUniform3fv.toString())+' \n    };\n    return kernelRunShortcut(new Kernel());\n  };'}},{"../../core/utils":78,"../kernel-run-shortcut":55}],60:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var KernelBase=require('../kernel-base');var utils=require('../../core/utils');var Texture=require('../../core/texture');var fragShaderString=require('./shader-frag');var vertShaderString=require('./shader-vert');var kernelString=require('./kernel-string');var canvases=[];var maxTexSizes={};module.exports=function(_KernelBase){_inherits(WebGLKernel,_KernelBase);function WebGLKernel(fnString,settings){_classCallCheck(this,WebGLKernel);var _this=_possibleConstructorReturn(this,(WebGLKernel.__proto__||Object.getPrototypeOf(WebGLKernel)).call(this,fnString,settings));_this.textureCache={};_this.threadDim={};_this.programUniformLocationCache={};_this.framebuffer=null;_this.buffer=null;_this.program=null;_this.outputToTexture=settings.outputToTexture;_this.endianness=utils.systemEndianness();_this.subKernelOutputTextures=null;_this.subKernelOutputVariableNames=null;_this.argumentsLength=0;_this.compiledFragShaderString=null;_this.compiledVertShaderString=null;_this.drawBuffersMap=null;_this.outputTexture=null;_this.maxTexSize=null;_this.uniform1fCache={};_this.uniform1iCache={};_this.uniform2fCache={};_this.uniform2fvCache={};_this.uniform3fvCache={};if(!_this._webGl)_this._webGl=_this.initWebGl();return _this}
_createClass(WebGLKernel,[{key:'initWebGl',value:function initWebGl(){return utils.initWebGl(this.getCanvas())}},{key:'validateOptions',value:function validateOptions(){var isFloatReadPixel=utils.isFloatReadPixelsSupported();if(this.floatTextures===!0&&!utils.OES_texture_float){throw new Error('Float textures are not supported on this browser')}else if(this.floatOutput===!0&&this.floatOutputForce!==!0&&!isFloatReadPixel){throw new Error('Float texture outputs are not supported on this browser')}else if(this.floatTextures===undefined&&utils.OES_texture_float){this.floatTextures=!0;this.floatOutput=isFloatReadPixel}
if(!this.output||this.output.length===0){if(arguments.length!==1){throw new Error('Auto output only supported for kernels with only one input')}
var argType=utils.getArgumentType(arguments[0]);if(argType==='Array'){this.output=utils.getDimensions(argType)}else if(argType==='Texture'){this.output=arguments[0].output}else{throw new Error('Auto output not supported for input type: '+argType)}}
this.texSize=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},this.output,!0);if(this.graphical){if(this.output.length!==2){throw new Error('Output must have 2 dimensions on graphical mode')}
if(this.floatOutput){this.floatOutput=!1;console.warn('Cannot use graphical mode and float output at the same time')}
this.texSize=utils.clone(this.output)}else if(this.floatOutput===undefined&&utils.OES_texture_float){this.floatOutput=!0}}},{key:'updateMaxTexSize',value:function updateMaxTexSize(){var texSize=this.texSize;var canvas=this._canvas;if(this.maxTexSize===null){var canvasIndex=canvases.indexOf(canvas);if(canvasIndex===-1){canvasIndex=canvases.length;canvases.push(canvas);maxTexSizes[canvasIndex]=[texSize[0],texSize[1]]}
this.maxTexSize=maxTexSizes[canvasIndex]}
if(this.maxTexSize[0]<texSize[0]){this.maxTexSize[0]=texSize[0]}
if(this.maxTexSize[1]<texSize[1]){this.maxTexSize[1]=texSize[1]}}},{key:'build',value:function build(){this.validateOptions();this.setupParams(arguments);this.updateMaxTexSize();var texSize=this.texSize;var gl=this._webGl;var canvas=this._canvas;gl.enable(gl.SCISSOR_TEST);gl.viewport(0,0,this.maxTexSize[0],this.maxTexSize[1]);canvas.width=this.maxTexSize[0];canvas.height=this.maxTexSize[1];var threadDim=this.threadDim=utils.clone(this.output);while(threadDim.length<3){threadDim.push(1)}
if(this.functionBuilder)this._addKernels();var compiledVertShaderString=this._getVertShaderString(arguments);var vertShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vertShader,compiledVertShaderString);gl.compileShader(vertShader);var compiledFragShaderString=this._getFragShaderString(arguments);var fragShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fragShader,compiledFragShaderString);gl.compileShader(fragShader);if(!gl.getShaderParameter(vertShader,gl.COMPILE_STATUS)){console.log(compiledVertShaderString);console.error('An error occurred compiling the shaders: '+gl.getShaderInfoLog(vertShader));throw new Error('Error compiling vertex shader')}
if(!gl.getShaderParameter(fragShader,gl.COMPILE_STATUS)){console.log(compiledFragShaderString);console.error('An error occurred compiling the shaders: '+gl.getShaderInfoLog(fragShader));throw new Error('Error compiling fragment shader')}
if(this.debug){console.log('Options:');console.dir(this);console.log('GLSL Shader Output:');console.log(compiledFragShaderString)}
var program=this.program=gl.createProgram();gl.attachShader(program,vertShader);gl.attachShader(program,fragShader);gl.linkProgram(program);this.framebuffer=gl.createFramebuffer();this.framebuffer.width=texSize[0];this.framebuffer.height=texSize[1];var vertices=new Float32Array([-1,-1,1,-1,-1,1,1,1]);var texCoords=new Float32Array([0,0,1,0,0,1,1,1]);var texCoordOffset=vertices.byteLength;var buffer=this.buffer;if(!buffer){buffer=this.buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,vertices.byteLength+texCoords.byteLength,gl.STATIC_DRAW)}else{gl.bindBuffer(gl.ARRAY_BUFFER,buffer)}
gl.bufferSubData(gl.ARRAY_BUFFER,0,vertices);gl.bufferSubData(gl.ARRAY_BUFFER,texCoordOffset,texCoords);var aPosLoc=gl.getAttribLocation(this.program,'aPos');gl.enableVertexAttribArray(aPosLoc);gl.vertexAttribPointer(aPosLoc,2,gl.FLOAT,gl.FALSE,0,0);var aTexCoordLoc=gl.getAttribLocation(this.program,'aTexCoord');gl.enableVertexAttribArray(aTexCoordLoc);gl.vertexAttribPointer(aTexCoordLoc,2,gl.FLOAT,gl.FALSE,0,texCoordOffset);gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);if(!this.outputImmutable){this._setupOutputTexture();if(this.subKernelOutputVariableNames!==null&&this.subKernelOutputVariableNames.length>0){this._setupSubOutputTextures(this.subKernelOutputVariableNames.length)}}}},{key:'run',value:function run(){if(this.program===null){this.build.apply(this,arguments)}
var paramNames=this.paramNames;var paramTypes=this.paramTypes;var texSize=this.texSize;var gl=this._webGl;gl.useProgram(this.program);gl.scissor(0,0,texSize[0],texSize[1]);if(!this.hardcodeConstants){this.setUniform3fv('uOutputDim',this.threadDim);this.setUniform2fv('uTexSize',texSize)}
this.setUniform2f('ratio',texSize[0]/this.maxTexSize[0],texSize[1]/this.maxTexSize[1]);this.argumentsLength=0;for(var texIndex=0;texIndex<paramNames.length;texIndex++){this._addArgument(arguments[texIndex],paramTypes[texIndex],paramNames[texIndex])}
if(this.graphical){gl.bindRenderbuffer(gl.RENDERBUFFER,null);gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);return}
gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);if(this.outputImmutable){this._setupOutputTexture()}
var outputTexture=this.outputTexture;if(this.subKernelOutputVariableNames!==null){if(this.outputImmutable){this.subKernelOutputTextures=[];this._setupSubOutputTextures(this.subKernelOutputVariableNames.length)}
this.drawBuffers.drawBuffersWEBGL(this.drawBuffersMap)}
gl.drawArrays(gl.TRIANGLE_STRIP,0,4);if(this.subKernelOutputTextures!==null){if(this.subKernels!==null){var output=[];output.result=this.renderOutput(outputTexture);for(var i=0;i<this.subKernels.length;i++){output.push(new Texture(this.subKernelOutputTextures[i],texSize,this.threadDim,this.output,this._webGl))}
return output}else if(this.subKernelProperties!==null){var _output={result:this.renderOutput(outputTexture)};var _i=0;for(var p in this.subKernelProperties){if(!this.subKernelProperties.hasOwnProperty(p))continue;_output[p]=new Texture(this.subKernelOutputTextures[_i],texSize,this.threadDim,this.output,this._webGl);_i++}
return _output}}
return this.renderOutput(outputTexture)}},{key:'renderOutput',value:function renderOutput(outputTexture){var texSize=this.texSize;var gl=this._webGl;var threadDim=this.threadDim;var output=this.output;if(this.outputToTexture){return new Texture(outputTexture,texSize,this.threadDim,output,this._webGl)}else{var result=void 0;if(this.floatOutput){result=new Float32Array(texSize[0]*texSize[1]*4);gl.readPixels(0,0,texSize[0],texSize[1],gl.RGBA,gl.FLOAT,result)}else{var bytes=new Uint8Array(texSize[0]*texSize[1]*4);gl.readPixels(0,0,texSize[0],texSize[1],gl.RGBA,gl.UNSIGNED_BYTE,bytes);result=new Float32Array(bytes.buffer)}
result=result.subarray(0,threadDim[0]*threadDim[1]*threadDim[2]);if(output.length===1){return result}else if(output.length===2){return utils.splitArray(result,output[0])}else if(output.length===3){var cube=utils.splitArray(result,output[0]*output[1]);return cube.map(function(x){return utils.splitArray(x,output[0])})}}}},{key:'getOutputTexture',value:function getOutputTexture(){return this.outputTexture}},{key:'_setupOutputTexture',value:function _setupOutputTexture(){var gl=this._webGl;var texSize=this.texSize;var texture=this.outputTexture=this._webGl.createTexture();gl.activeTexture(gl.TEXTURE0+this.paramNames.length);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);if(this.floatOutput){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.FLOAT,null)}else{gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.UNSIGNED_BYTE,null)}
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0)}},{key:'_setupSubOutputTextures',value:function _setupSubOutputTextures(length){var gl=this._webGl;var texSize=this.texSize;var drawBuffersMap=this.drawBuffersMap=[gl.COLOR_ATTACHMENT0];var textures=this.subKernelOutputTextures=[];for(var i=0;i<length;i++){var texture=this._webGl.createTexture();textures.push(texture);drawBuffersMap.push(gl.COLOR_ATTACHMENT0+i+1);gl.activeTexture(gl.TEXTURE0+this.paramNames.length+i);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);if(this.floatOutput){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.FLOAT,null)}else{gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.UNSIGNED_BYTE,null)}
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+i+1,gl.TEXTURE_2D,texture,0)}}},{key:'getArgumentTexture',value:function getArgumentTexture(name){return this.getTextureCache('ARGUMENT_'+name)}},{key:'getTextureCache',value:function getTextureCache(name){if(this.textureCache.hasOwnProperty(name)){return this.textureCache[name]}
return this.textureCache[name]=this._webGl.createTexture()}},{key:'detachTextureCache',value:function detachTextureCache(name){delete this.textureCache[name]}},{key:'setUniform1f',value:function setUniform1f(name,value){if(this.uniform1fCache.hasOwnProperty(name)){var cache=this.uniform1fCache[name];if(value===cache){return}}
this.uniform1fCache[name]=value;var loc=this.getUniformLocation(name);this._webGl.uniform1f(loc,value)}},{key:'setUniform1i',value:function setUniform1i(name,value){if(this.uniform1iCache.hasOwnProperty(name)){var cache=this.uniform1iCache[name];if(value===cache){return}}
this.uniform1iCache[name]=value;var loc=this.getUniformLocation(name);this._webGl.uniform1i(loc,value)}},{key:'setUniform2f',value:function setUniform2f(name,value1,value2){if(this.uniform2fCache.hasOwnProperty(name)){var cache=this.uniform2fCache[name];if(value1===cache[0]&&value2===cache[1]){return}}
this.uniform2fCache[name]=[value1,value2];var loc=this.getUniformLocation(name);this._webGl.uniform2f(loc,value1,value2)}},{key:'setUniform2fv',value:function setUniform2fv(name,value){if(this.uniform2fvCache.hasOwnProperty(name)){var cache=this.uniform2fvCache[name];if(value[0]===cache[0]&&value[1]===cache[1]){return}}
this.uniform2fvCache[name]=value;var loc=this.getUniformLocation(name);this._webGl.uniform2fv(loc,value)}},{key:'setUniform3fv',value:function setUniform3fv(name,value){if(this.uniform3fvCache.hasOwnProperty(name)){var cache=this.uniform3fvCache[name];if(value[0]===cache[0]&&value[1]===cache[1]&&value[2]===cache[2]){return}}
this.uniform3fvCache[name]=value;var loc=this.getUniformLocation(name);this._webGl.uniform3fv(loc,value)}},{key:'getUniformLocation',value:function getUniformLocation(name){if(this.programUniformLocationCache.hasOwnProperty(name)){return this.programUniformLocationCache[name]}
return this.programUniformLocationCache[name]=this._webGl.getUniformLocation(this.program,name)}},{key:'_getFragShaderArtifactMap',value:function _getFragShaderArtifactMap(args){return{HEADER:this._getHeaderString(),LOOP_MAX:this._getLoopMaxString(),CONSTANTS:this._getConstantsString(),DECODE32_ENDIANNESS:this._getDecode32EndiannessString(),ENCODE32_ENDIANNESS:this._getEncode32EndiannessString(),GET_WRAPAROUND:this._getGetWraparoundString(),GET_TEXTURE_CHANNEL:this._getGetTextureChannelString(),GET_TEXTURE_INDEX:this._getGetTextureIndexString(),GET_RESULT:this._getGetResultString(),MAIN_PARAMS:this._getMainParamsString(args),MAIN_CONSTANTS:this._getMainConstantsString(),KERNEL:this._getKernelString(),MAIN_RESULT:this._getMainResultString()}}},{key:'_addArgument',value:function _addArgument(value,type,name){var gl=this._webGl;var argumentTexture=this.getArgumentTexture(name);if(value instanceof Texture){type='Texture'}
switch(type){case 'Array':{var dim=utils.getDimensions(value,!0);var size=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},dim);gl.activeTexture(gl.TEXTURE0+this.argumentsLength);gl.bindTexture(gl.TEXTURE_2D,argumentTexture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);var length=size[0]*size[1];if(this.floatTextures){length*=4}
var valuesFlat=new Float32Array(length);utils.flattenTo(value,valuesFlat);var buffer=void 0;if(this.floatTextures){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,size[0],size[1],0,gl.RGBA,gl.FLOAT,valuesFlat)}else{buffer=new Uint8Array(valuesFlat.buffer);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,size[0],size[1],0,gl.RGBA,gl.UNSIGNED_BYTE,buffer)}
if(!this.hardcodeConstants){this.setUniform3fv('user_'+name+'Dim',dim);this.setUniform2fv('user_'+name+'Size',size)}
this.setUniform1i('user_'+name,this.argumentsLength);break}
case 'Number':{this.setUniform1f('user_'+name,value);break}
case 'Input':{var input=value;var _dim=input.size;var _size=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},_dim);gl.activeTexture(gl.TEXTURE0+this.argumentsLength);gl.bindTexture(gl.TEXTURE_2D,argumentTexture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);var _length=_size[0]*_size[1];var inputArray=void 0;if(this.floatTextures){_length*=4;inputArray=new Float32Array(_length);inputArray.set(input.value)}else{inputArray=input.value}
if(this.floatTextures){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,_size[0],_size[1],0,gl.RGBA,gl.FLOAT,inputArray)}else{var _buffer=new Uint8Array(inputArray.buffer);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,_size[0],_size[1],0,gl.RGBA,gl.UNSIGNED_BYTE,_buffer)}
if(!this.hardcodeConstants){this.setUniform3fv('user_'+name+'Dim',_dim);this.setUniform2fv('user_'+name+'Size',_size)}
this.setUniform1i('user_'+name,this.argumentsLength);break}
case 'Texture':{var inputTexture=value;var _dim2=inputTexture.dimensions;var _size2=inputTexture.size;gl.activeTexture(gl.TEXTURE0+this.argumentsLength);gl.bindTexture(gl.TEXTURE_2D,inputTexture.texture);this.setUniform3fv('user_'+name+'Dim',_dim2);this.setUniform2fv('user_'+name+'Size',_size2);this.setUniform1i('user_'+name,this.argumentsLength);break}
default:throw new Error('Input type not supported (WebGL): '+value)}
this.argumentsLength++}},{key:'_getHeaderString',value:function _getHeaderString(){return this.subKernels!==null||this.subKernelProperties!==null?'#extension GL_EXT_draw_buffers : require\n':''}},{key:'_getLoopMaxString',value:function _getLoopMaxString(){return this.loopMaxIterations?' '+parseInt(this.loopMaxIterations)+'.0;\n':' 1000.0;\n'}},{key:'_getConstantsString',value:function _getConstantsString(){var result=[];var threadDim=this.threadDim;var texSize=this.texSize;if(this.hardcodeConstants){result.push('highp vec3 uOutputDim = vec3('+threadDim[0]+','+threadDim[1]+', '+threadDim[2]+')','highp vec2 uTexSize = vec2('+texSize[0]+', '+texSize[1]+')')}else{result.push('uniform highp vec3 uOutputDim','uniform highp vec2 uTexSize')}
return this._linesToString(result)}},{key:'_getTextureCoordinate',value:function _getTextureCoordinate(){var names=this.subKernelOutputVariableNames;if(names===null||names.length<1){return'varying highp vec2 vTexCoord;\n'}else{return'out highp vec2 vTexCoord;\n'}}},{key:'_getDecode32EndiannessString',value:function _getDecode32EndiannessString(){return this.endianness==='LE'?'':'  rgba.rgba = rgba.abgr;\n'}},{key:'_getEncode32EndiannessString',value:function _getEncode32EndiannessString(){return this.endianness==='LE'?'':'  rgba.rgba = rgba.abgr;\n'}},{key:'_getGetWraparoundString',value:function _getGetWraparoundString(){return this.wraparound?'  xyz = mod(xyz, texDim);\n':''}},{key:'_getGetTextureChannelString',value:function _getGetTextureChannelString(){if(!this.floatTextures)return'';return this._linesToString(['  int channel = int(integerMod(index, 4.0))','  index = float(int(index) / 4)'])}},{key:'_getGetTextureIndexString',value:function _getGetTextureIndexString(){return this.floatTextures?'  index = float(int(index)/4);\n':''}},{key:'_getGetResultString',value:function _getGetResultString(){if(!this.floatTextures)return'  return decode32(texel);\n';return this._linesToString(['  if (channel == 0) return texel.r','  if (channel == 1) return texel.g','  if (channel == 2) return texel.b','  if (channel == 3) return texel.a'])}},{key:'_getMainParamsString',value:function _getMainParamsString(args){var result=[];var paramTypes=this.paramTypes;var paramNames=this.paramNames;for(var i=0;i<paramNames.length;i++){var param=args[i];var paramName=paramNames[i];var paramType=paramTypes[i];if(this.hardcodeConstants){if(paramType==='Array'||paramType==='Texture'){var paramDim=utils.getDimensions(param,!0);var paramSize=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},paramDim);result.push('uniform highp sampler2D user_'+paramName,'highp vec2 user_'+paramName+'Size = vec2('+paramSize[0]+'.0, '+paramSize[1]+'.0)','highp vec3 user_'+paramName+'Dim = vec3('+paramDim[0]+'.0, '+paramDim[1]+'.0, '+paramDim[2]+'.0)')}else if(paramType==='Number'&&Number.isInteger(param)){result.push('highp float user_'+paramName+' = '+param+'.0')}else if(paramType==='Number'){result.push('highp float user_'+paramName+' = '+param)}}else{if(paramType==='Array'||paramType==='Texture'||paramType==='Input'){result.push('uniform highp sampler2D user_'+paramName,'uniform highp vec2 user_'+paramName+'Size','uniform highp vec3 user_'+paramName+'Dim')}else if(paramType==='Number'){result.push('uniform highp float user_'+paramName)}}}
return this._linesToString(result)}},{key:'_getMainConstantsString',value:function _getMainConstantsString(){var result=[];if(this.constants){for(var name in this.constants){if(!this.constants.hasOwnProperty(name))continue;var value=parseFloat(this.constants[name]);if(Number.isInteger(value)){result.push('const float constants_'+name+' = '+parseInt(value)+'.0')}else{result.push('const float constants_'+name+' = '+parseFloat(value))}}}
return this._linesToString(result)}},{key:'_getKernelString',value:function _getKernelString(){var result=[];var names=this.subKernelOutputVariableNames;if(names!==null){result.push('highp float kernelResult = 0.0');for(var i=0;i<names.length;i++){result.push('highp float '+names[i]+' = 0.0')}}else{result.push('highp float kernelResult = 0.0')}
return this._linesToString(result)+this.functionBuilder.getPrototypeString('kernel')}},{key:'_getMainResultString',value:function _getMainResultString(){var names=this.subKernelOutputVariableNames;var result=[];if(this.floatOutput){result.push('  index *= 4.0')}
if(this.graphical){result.push('  threadId = indexTo3D(index, uOutputDim)','  kernel()','  gl_FragColor = actualColor')}else if(this.floatOutput){var channels=['r','g','b','a'];for(var i=0;i<channels.length;++i){result.push('  threadId = indexTo3D(index, uOutputDim)');result.push('  kernel()');if(names){result.push('  gl_FragData[0].'+channels[i]+' = kernelResult');for(var j=0;j<names.length;++j){result.push('  gl_FragData['+(j+1)+'].'+channels[i]+' = '+names[j])}}else{result.push('  gl_FragColor.'+channels[i]+' = kernelResult')}
if(i<channels.length-1){result.push('  index += 1.0')}}}else if(names!==null){result.push('  threadId = indexTo3D(index, uOutputDim)');result.push('  kernel()');result.push('  gl_FragData[0] = encode32(kernelResult)');for(var _i2=0;_i2<names.length;_i2++){result.push('  gl_FragData['+(_i2+1)+'] = encode32('+names[_i2]+')')}}else{result.push('  threadId = indexTo3D(index, uOutputDim)','  kernel()','  gl_FragColor = encode32(kernelResult)')}
return this._linesToString(result)}},{key:'_linesToString',value:function _linesToString(lines){if(lines.length>0){return lines.join(';\n')+';\n'}else{return'\n'}}},{key:'_replaceArtifacts',value:function _replaceArtifacts(src,map){return src.replace(/[ ]*__([A-Z]+[0-9]*([_]?[A-Z])*)__;\n/g,function(match,artifact){if(map.hasOwnProperty(artifact)){return map[artifact]}
throw 'unhandled artifact '+artifact})}},{key:'_addKernels',value:function _addKernels(){var _this2=this;var builder=this.functionBuilder;var gl=this._webGl;builder.addFunctions(this.functions,{constants:this.constants,output:this.output});builder.addNativeFunctions(this.nativeFunctions);builder.addKernel(this.fnString,{prototypeOnly:!1,constants:this.constants,output:this.output,debug:this.debug,loopMaxIterations:this.loopMaxIterations},this.paramNames,this.paramTypes);if(this.subKernels!==null){var drawBuffers=this.drawBuffers=gl.getExtension('WEBGL_draw_buffers');if(!drawBuffers)throw new Error('could not instantiate draw buffers extension');this.subKernelOutputVariableNames=[];this.subKernels.forEach(function(subKernel){return _this2._addSubKernel(subKernel)})}else if(this.subKernelProperties!==null){var _drawBuffers=this.drawBuffers=gl.getExtension('WEBGL_draw_buffers');if(!_drawBuffers)throw new Error('could not instantiate draw buffers extension');this.subKernelOutputVariableNames=[];Object.keys(this.subKernelProperties).forEach(function(property){return _this2._addSubKernel(_this2.subKernelProperties[property])})}}},{key:'_addSubKernel',value:function _addSubKernel(subKernel){this.functionBuilder.addSubKernel(subKernel,{prototypeOnly:!1,constants:this.constants,output:this.output,debug:this.debug,loopMaxIterations:this.loopMaxIterations});this.subKernelOutputVariableNames.push(subKernel.name+'Result')}},{key:'_getFragShaderString',value:function _getFragShaderString(args){if(this.compiledFragShaderString!==null){return this.compiledFragShaderString}
return this.compiledFragShaderString=this._replaceArtifacts(fragShaderString,this._getFragShaderArtifactMap(args))}},{key:'_getVertShaderString',value:function _getVertShaderString(args){if(this.compiledVertShaderString!==null){return this.compiledVertShaderString}
return this.compiledVertShaderString=vertShaderString}},{key:'toString',value:function toString(){return kernelString(this)}},{key:'addFunction',value:function addFunction(fn){this.functionBuilder.addFunction(null,fn)}}]);return WebGLKernel}(KernelBase)},{"../../core/texture":76,"../../core/utils":78,"../kernel-base":54,"./kernel-string":59,"./shader-frag":62,"./shader-vert":63}],61:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var RunnerBase=require('../runner-base');var WebGLKernel=require('./kernel');var utils=require('../../core/utils');var WebGLFunctionBuilder=require('./function-builder');module.exports=function(_RunnerBase){_inherits(WebGLRunner,_RunnerBase);function WebGLRunner(settings){_classCallCheck(this,WebGLRunner);var _this=_possibleConstructorReturn(this,(WebGLRunner.__proto__||Object.getPrototypeOf(WebGLRunner)).call(this,new WebGLFunctionBuilder(),settings));_this.Kernel=WebGLKernel;_this.kernel=null;return _this}
_createClass(WebGLRunner,[{key:'getMode',value:function getMode(){return'gpu'}}]);return WebGLRunner}(RunnerBase)},{"../../core/utils":78,"../runner-base":56,"./function-builder":57,"./kernel":60}],62:[function(require,module,exports){"use strict";module.exports="__HEADER__;\nprecision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\nconst float LOOP_MAX = __LOOP_MAX__;\n#define EPSILON 0.0000001;\n\n__CONSTANTS__;\n\nvarying highp vec2 vTexCoord;\n\nvec4 round(vec4 x) {\n  return floor(x + 0.5);\n}\n\nhighp float round(highp float x) {\n  return floor(x + 0.5);\n}\n\nvec2 integerMod(vec2 x, float y) {\n  vec2 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec3 integerMod(vec3 x, float y) {\n  vec3 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec4 integerMod(vec4 x, vec4 y) {\n  vec4 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nhighp float integerMod(highp float x, highp float y) {\n  highp float res = floor(mod(x, y));\n  return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);\n}\n\nhighp int integerMod(highp int x, highp int y) {\n  return int(integerMod(float(x), float(y)));\n}\n\n// Here be dragons!\n// DO NOT OPTIMIZE THIS CODE\n// YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE\n// LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME\nconst vec2 MAGIC_VEC = vec2(1.0, -256.0);\nconst vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);\nconst vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536\nhighp float decode32(highp vec4 rgba) {\n  __DECODE32_ENDIANNESS__;\n  rgba *= 255.0;\n  vec2 gte128;\n  gte128.x = rgba.b >= 128.0 ? 1.0 : 0.0;\n  gte128.y = rgba.a >= 128.0 ? 1.0 : 0.0;\n  float exponent = 2.0 * rgba.a - 127.0 + dot(gte128, MAGIC_VEC);\n  float res = exp2(round(exponent));\n  rgba.b = rgba.b - 128.0 * gte128.x;\n  res = dot(rgba, SCALE_FACTOR) * exp2(round(exponent-23.0)) + res;\n  res *= gte128.y * -2.0 + 1.0;\n  return res;\n}\n\nhighp vec4 encode32(highp float f) {\n  highp float F = abs(f);\n  highp float sign = f < 0.0 ? 1.0 : 0.0;\n  highp float exponent = floor(log2(F));\n  highp float mantissa = (exp2(-exponent) * F);\n  // exponent += floor(log2(mantissa));\n  vec4 rgba = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;\n  rgba.rg = integerMod(rgba.rg, 256.0);\n  rgba.b = integerMod(rgba.b, 128.0);\n  rgba.a = exponent*0.5 + 63.5;\n  rgba.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;\n  rgba = floor(rgba);\n  rgba *= 0.003921569; // 1/255\n  __ENCODE32_ENDIANNESS__;\n  return rgba;\n}\n// Dragons end here\n\nhighp float index;\nhighp vec3 threadId;\n\nhighp vec3 indexTo3D(highp float idx, highp vec3 texDim) {\n  highp float z = floor(idx / (texDim.x * texDim.y));\n  idx -= z * texDim.x * texDim.y;\n  highp float y = floor(idx / texDim.x);\n  highp float x = integerMod(idx, texDim.x);\n  return vec3(x, y, z);\n}\n\nhighp float get(highp sampler2D tex, highp vec2 texSize, highp vec3 texDim, highp float z, highp float y, highp float x) {\n  highp vec3 xyz = vec3(x, y, z);\n  xyz = floor(xyz + 0.5);\n  __GET_WRAPAROUND__;\n  highp float index = round(xyz.x + texDim.x * (xyz.y + texDim.y * xyz.z));\n  __GET_TEXTURE_CHANNEL__;\n  highp float w = round(texSize.x);\n  vec2 st = vec2(integerMod(index, w), float(int(index) / int(w))) + 0.5;\n  __GET_TEXTURE_INDEX__;\n  highp vec4 texel = texture2D(tex, st / texSize);\n  __GET_RESULT__;\n}\n\nhighp float get(highp sampler2D tex, highp vec2 texSize, highp vec3 texDim, highp float y, highp float x) {\n  return get(tex, texSize, texDim, 0.0, y, x);\n}\n\nhighp float get(highp sampler2D tex, highp vec2 texSize, highp vec3 texDim, highp float x) {\n  return get(tex, texSize, texDim, 0.0, 0.0, x);\n}\n\nhighp vec4 actualColor;\nvoid color(float r, float g, float b, float a) {\n  actualColor = vec4(r,g,b,a);\n}\n\nvoid color(float r, float g, float b) {\n  color(r,g,b,1.0);\n}\n\n__MAIN_PARAMS__;\n__MAIN_CONSTANTS__;\n__KERNEL__;\n\nvoid main(void) {\n  index = floor(vTexCoord.s * float(uTexSize.x)) + floor(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;\n  __MAIN_RESULT__;\n}"},{}],63:[function(require,module,exports){"use strict";module.exports="precision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\nattribute highp vec2 aPos;\nattribute highp vec2 aTexCoord;\n\nvarying highp vec2 vTexCoord;\nuniform vec2 ratio;\n\nvoid main(void) {\n  gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);\n  vTexCoord = aTexCoord;\n}"},{}],64:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var WebGLKernel=require('./kernel');var utils=require('../../core/utils');module.exports=function(_WebGLKernel){_inherits(WebGLValidatorKernel,_WebGLKernel);function WebGLValidatorKernel(){_classCallCheck(this,WebGLValidatorKernel);return _possibleConstructorReturn(this,(WebGLValidatorKernel.__proto__||Object.getPrototypeOf(WebGLValidatorKernel)).apply(this,arguments))}
_createClass(WebGLValidatorKernel,[{key:'validateOptions',value:function validateOptions(){this.texSize=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},this.output,!0)}}]);return WebGLValidatorKernel}(WebGLKernel)},{"../../core/utils":78,"./kernel":60}],65:[function(require,module,exports){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var FunctionBuilderBase=require('../function-builder-base');var WebGLFunctionNode=require('./function-node');module.exports=function(_FunctionBuilderBase){_inherits(WebGL2FunctionBuilder,_FunctionBuilderBase);function WebGL2FunctionBuilder(){_classCallCheck(this,WebGL2FunctionBuilder);var _this=_possibleConstructorReturn(this,(WebGL2FunctionBuilder.__proto__||Object.getPrototypeOf(WebGL2FunctionBuilder)).call(this));_this.Node=WebGLFunctionNode;return _this}
return WebGL2FunctionBuilder}(FunctionBuilderBase)},{"../function-builder-base":52,"./function-node":66}],66:[function(require,module,exports){arguments[4][58][0].apply(exports,arguments)},{"../../core/utils":78,"../function-node-base":53,"dup":58}],67:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var WebGLKernel=require('../web-gl/kernel');var utils=require('../../core/utils');var Texture=require('../../core/texture');var fragShaderString=require('./shader-frag');var vertShaderString=require('./shader-vert');module.exports=function(_WebGLKernel){_inherits(WebGL2Kernel,_WebGLKernel);function WebGL2Kernel(){_classCallCheck(this,WebGL2Kernel);return _possibleConstructorReturn(this,(WebGL2Kernel.__proto__||Object.getPrototypeOf(WebGL2Kernel)).apply(this,arguments))}
_createClass(WebGL2Kernel,[{key:'initWebGl',value:function initWebGl(){return utils.initWebGl2(this.getCanvas())}},{key:'validateOptions',value:function validateOptions(){var isFloatReadPixel=utils.isFloatReadPixelsSupportedWebGL2();if(this.floatOutput===!0&&this.floatOutputForce!==!0&&!isFloatReadPixel){throw new Error('Float texture outputs are not supported on this browser')}else if(this.floatTextures===undefined){this.floatTextures=!0;this.floatOutput=isFloatReadPixel}
if(!this.output||this.output.length===0){if(arguments.length!==1){throw new Error('Auto output only supported for kernels with only one input')}
var argType=utils.getArgumentType(arguments[0]);if(argType==='Array'){this.output=utils.getDimensions(argType)}else if(argType==='Texture'){this.output=arguments[0].output}else{throw new Error('Auto output not supported for input type: '+argType)}}
this.texSize=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},this.output,!0);if(this.graphical){if(this.output.length!==2){throw new Error('Output must have 2 dimensions on graphical mode')}
if(this.floatOutput){this.floatOutput=!1;console.warn('Cannot use graphical mode and float output at the same time')}
this.texSize=utils.clone(this.output)}else if(this.floatOutput===undefined){this.floatOutput=!0}
if(this.floatOutput||this.floatOutputForce){this._webGl.getExtension('EXT_color_buffer_float')}}},{key:'run',value:function run(){if(this.program===null){this.build.apply(this,arguments)}
var paramNames=this.paramNames;var paramTypes=this.paramTypes;var texSize=this.texSize;var gl=this._webGl;gl.useProgram(this.program);gl.scissor(0,0,texSize[0],texSize[1]);if(!this.hardcodeConstants){this.setUniform3fv('uOutputDim',this.threadDim);this.setUniform2fv('uTexSize',texSize)}
this.setUniform2f('ratio',texSize[0]/this.maxTexSize[0],texSize[1]/this.maxTexSize[1]);this.argumentsLength=0;for(var texIndex=0;texIndex<paramNames.length;texIndex++){this._addArgument(arguments[texIndex],paramTypes[texIndex],paramNames[texIndex])}
if(this.graphical){gl.bindRenderbuffer(gl.RENDERBUFFER,null);gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);return}
gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);if(this.outputImmutable){this._setupOutputTexture()}
var outputTexture=this.outputTexture;if(this.subKernelOutputVariableNames!==null){if(this.outputImmutable){this.subKernelOutputTextures=[];this._setupSubOutputTextures(this.subKernelOutputVariableNames.length)}
gl.drawBuffers(this.drawBuffersMap)}
gl.drawArrays(gl.TRIANGLE_STRIP,0,4);if(this.subKernelOutputTextures!==null){if(this.subKernels!==null){var output=[];output.result=this.renderOutput(outputTexture);for(var i=0;i<this.subKernels.length;i++){output.push(new Texture(this.subKernelOutputTextures[i],texSize,this.threadDim,this.output,this._webGl))}
return output}else if(this.subKernelProperties!==null){var _output={result:this.renderOutput(outputTexture)};var _i=0;for(var p in this.subKernelProperties){if(!this.subKernelProperties.hasOwnProperty(p))continue;_output[p]=new Texture(this.subKernelOutputTextures[_i],texSize,this.threadDim,this.output,this._webGl);_i++}
return _output}}
return this.renderOutput(outputTexture)}},{key:'getOutputTexture',value:function getOutputTexture(){return this.outputTexture}},{key:'_setupOutputTexture',value:function _setupOutputTexture(){var gl=this._webGl;var texSize=this.texSize;var texture=this.outputTexture=this._webGl.createTexture();gl.activeTexture(gl.TEXTURE0+this.paramNames.length);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);if(this.floatOutput){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,texSize[0],texSize[1],0,gl.RGBA,gl.FLOAT,null)}else{gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.UNSIGNED_BYTE,null)}
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0)}},{key:'_setupSubOutputTextures',value:function _setupSubOutputTextures(length){var gl=this._webGl;var texSize=this.texSize;var drawBuffersMap=this.drawBuffersMap=[gl.COLOR_ATTACHMENT0];var textures=this.subKernelOutputTextures=[];for(var i=0;i<length;i++){var texture=this._webGl.createTexture();textures.push(texture);drawBuffersMap.push(gl.COLOR_ATTACHMENT0+i+1);gl.activeTexture(gl.TEXTURE0+this.paramNames.length+i);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);if(this.floatOutput){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,texSize[0],texSize[1],0,gl.RGBA,gl.FLOAT,null)}else{gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.UNSIGNED_BYTE,null)}
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+i+1,gl.TEXTURE_2D,texture,0)}}},{key:'_addArgument',value:function _addArgument(value,type,name){var gl=this._webGl;var argumentTexture=this.getArgumentTexture(name);if(value instanceof Texture){type='Texture'}
switch(type){case 'Array':{var dim=utils.getDimensions(value,!0);var size=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},dim);gl.activeTexture(gl.TEXTURE0+this.argumentsLength);gl.bindTexture(gl.TEXTURE_2D,argumentTexture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);var length=size[0]*size[1];if(this.floatTextures){length*=4}
var valuesFlat=new Float32Array(length);utils.flattenTo(value,valuesFlat);var buffer=void 0;if(this.floatTextures){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,size[0],size[1],0,gl.RGBA,gl.FLOAT,valuesFlat)}else{buffer=new Uint8Array(valuesFlat.buffer);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,size[0],size[1],0,gl.RGBA,gl.UNSIGNED_BYTE,buffer)}
if(!this.hardcodeConstants){this.setUniform3fv('user_'+name+'Dim',dim);this.setUniform2fv('user_'+name+'Size',size)}
this.setUniform1i('user_'+name,this.argumentsLength);break}
case 'Number':{this.setUniform1f('user_'+name,value);break}
case 'Input':{var input=value;var _dim=input.size;var _size=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},_dim);gl.activeTexture(gl.TEXTURE0+this.argumentsLength);gl.bindTexture(gl.TEXTURE_2D,argumentTexture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);var _length=_size[0]*_size[1];var inputArray=void 0;if(this.floatTextures){_length*=4;inputArray=new Float32Array(_length);inputArray.set(input.value)}else{inputArray=input.value}
if(this.floatTextures){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,_size[0],_size[1],0,gl.RGBA,gl.FLOAT,inputArray)}else{var _buffer=new Uint8Array(inputArray.buffer);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,_size[0],_size[1],0,gl.RGBA,gl.UNSIGNED_BYTE,_buffer)}
if(!this.hardcodeConstants){this.setUniform3fv('user_'+name+'Dim',_dim);this.setUniform2fv('user_'+name+'Size',_size)}
this.setUniform1i('user_'+name,this.argumentsLength);break}
case 'Texture':{var inputTexture=value;var _dim2=inputTexture.dimensions;var _size2=inputTexture.size;gl.activeTexture(gl.TEXTURE0+this.argumentsLength);gl.bindTexture(gl.TEXTURE_2D,inputTexture.texture);this.setUniform3fv('user_'+name+'Dim',_dim2);this.setUniform2fv('user_'+name+'Size',_size2);this.setUniform1i('user_'+name,this.argumentsLength);break}
default:throw new Error('Input type not supported (WebGL): '+value)}
this.argumentsLength++}},{key:'_getHeaderString',value:function _getHeaderString(){return''}},{key:'_getTextureCoordinate',value:function _getTextureCoordinate(){var names=this.subKernelOutputVariableNames;if(names===null||names.length<1){return'in highp vec2 vTexCoord;\n'}else{return'out highp vec2 vTexCoord;\n'}}},{key:'_getKernelString',value:function _getKernelString(){var result=[];var names=this.subKernelOutputVariableNames;if(names!==null){result.push('highp float kernelResult = 0.0');result.push('layout(location = 0) out highp vec4 data0');for(var i=0;i<names.length;i++){result.push('highp float '+names[i]+' = 0.0','layout(location = '+(i+1)+') out highp vec4 data'+(i+1))}}else{result.push('out highp vec4 data0');result.push('highp float kernelResult = 0.0')}
return this._linesToString(result)+this.functionBuilder.getPrototypeString('kernel')}},{key:'_getMainResultString',value:function _getMainResultString(){var names=this.subKernelOutputVariableNames;var result=[];if(this.floatOutput){result.push('  index *= 4.0')}
if(this.graphical){result.push('  threadId = indexTo3D(index, uOutputDim)','  kernel()','  data0 = actualColor')}else if(this.floatOutput){var channels=['r','g','b','a'];for(var i=0;i<channels.length;++i){result.push('  threadId = indexTo3D(index, uOutputDim)');result.push('  kernel()');if(names){result.push('  data0.'+channels[i]+' = kernelResult');for(var j=0;j<names.length;++j){result.push('  data'+(j+1)+'.'+channels[i]+' = '+names[j])}}else{result.push('  data0.'+channels[i]+' = kernelResult')}
if(i<channels.length-1){result.push('  index += 1.0')}}}else if(names!==null){result.push('  threadId = indexTo3D(index, uOutputDim)');result.push('  kernel()');result.push('  data0 = encode32(kernelResult)');for(var _i2=0;_i2<names.length;_i2++){result.push('  data'+(_i2+1)+' = encode32('+names[_i2]+')')}}else{result.push('  threadId = indexTo3D(index, uOutputDim)','  kernel()','  data0 = encode32(kernelResult)')}
return this._linesToString(result)}},{key:'_addKernels',value:function _addKernels(){var _this2=this;var builder=this.functionBuilder;var gl=this._webGl;builder.addFunctions(this.functions,{constants:this.constants,output:this.output});builder.addNativeFunctions(this.nativeFunctions);builder.addKernel(this.fnString,{prototypeOnly:!1,constants:this.constants,output:this.output,debug:this.debug,loopMaxIterations:this.loopMaxIterations},this.paramNames,this.paramTypes);if(this.subKernels!==null){this.subKernelOutputTextures=[];this.subKernelOutputVariableNames=[];this.subKernels.forEach(function(subKernel){return _this2._addSubKernel(subKernel)})}else if(this.subKernelProperties!==null){this.subKernelOutputTextures=[];this.subKernelOutputVariableNames=[];Object.keys(this.subKernelProperties).forEach(function(property){return _this2._addSubKernel(_this2.subKernelProperties[property])})}}},{key:'_getFragShaderString',value:function _getFragShaderString(args){if(this.compiledFragShaderString!==null){return this.compiledFragShaderString}
return this.compiledFragShaderString=this._replaceArtifacts(fragShaderString,this._getFragShaderArtifactMap(args))}},{key:'_getVertShaderString',value:function _getVertShaderString(args){if(this.compiledVertShaderString!==null){return this.compiledVertShaderString}
return this.compiledVertShaderString=vertShaderString}}]);return WebGL2Kernel}(WebGLKernel)},{"../../core/texture":76,"../../core/utils":78,"../web-gl/kernel":60,"./shader-frag":69,"./shader-vert":70}],68:[function(require,module,exports){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var WebGLRunner=require('../web-gl/runner');var WebGL2FunctionBuilder=require('./function-builder');var WebGL2Kernel=require('./kernel');module.exports=function(_WebGLRunner){_inherits(WebGL2Runner,_WebGLRunner);function WebGL2Runner(settings){_classCallCheck(this,WebGL2Runner);var _this=_possibleConstructorReturn(this,(WebGL2Runner.__proto__||Object.getPrototypeOf(WebGL2Runner)).call(this,new WebGL2FunctionBuilder(),settings));_this.Kernel=WebGL2Kernel;_this.kernel=null;return _this}
return WebGL2Runner}(WebGLRunner)},{"../web-gl/runner":61,"./function-builder":65,"./kernel":67}],69:[function(require,module,exports){"use strict";module.exports="#version 300 es\n__HEADER__;\nprecision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\nconst float LOOP_MAX = __LOOP_MAX__;\n#define EPSILON 0.0000001;\n\n__CONSTANTS__;\n\nin highp vec2 vTexCoord;\n\nvec2 integerMod(vec2 x, float y) {\n  vec2 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec3 integerMod(vec3 x, float y) {\n  vec3 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec4 integerMod(vec4 x, vec4 y) {\n  vec4 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nhighp float integerMod(highp float x, highp float y) {\n  highp float res = floor(mod(x, y));\n  return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);\n}\n\nhighp int integerMod(highp int x, highp int y) {\n  return int(integerMod(float(x), float(y)));\n}\n\n// Here be dragons!\n// DO NOT OPTIMIZE THIS CODE\n// YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE\n// LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME\nconst vec2 MAGIC_VEC = vec2(1.0, -256.0);\nconst vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);\nconst vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536\nhighp float decode32(highp vec4 rgba) {\n  __DECODE32_ENDIANNESS__;\n  rgba *= 255.0;\n  vec2 gte128;\n  gte128.x = rgba.b >= 128.0 ? 1.0 : 0.0;\n  gte128.y = rgba.a >= 128.0 ? 1.0 : 0.0;\n  float exponent = 2.0 * rgba.a - 127.0 + dot(gte128, MAGIC_VEC);\n  float res = exp2(round(exponent));\n  rgba.b = rgba.b - 128.0 * gte128.x;\n  res = dot(rgba, SCALE_FACTOR) * exp2(round(exponent-23.0)) + res;\n  res *= gte128.y * -2.0 + 1.0;\n  return res;\n}\n\nhighp vec4 encode32(highp float f) {\n  highp float F = abs(f);\n  highp float sign = f < 0.0 ? 1.0 : 0.0;\n  highp float exponent = floor(log2(F));\n  highp float mantissa = (exp2(-exponent) * F);\n  // exponent += floor(log2(mantissa));\n  vec4 rgba = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;\n  rgba.rg = integerMod(rgba.rg, 256.0);\n  rgba.b = integerMod(rgba.b, 128.0);\n  rgba.a = exponent*0.5 + 63.5;\n  rgba.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;\n  rgba = floor(rgba);\n  rgba *= 0.003921569; // 1/255\n  __ENCODE32_ENDIANNESS__;\n  return rgba;\n}\n// Dragons end here\n\nhighp float index;\nhighp vec3 threadId;\n\nhighp vec3 indexTo3D(highp float idx, highp vec3 texDim) {\n  highp float z = floor(idx / (texDim.x * texDim.y));\n  idx -= z * texDim.x * texDim.y;\n  highp float y = floor(idx / texDim.x);\n  highp float x = integerMod(idx, texDim.x);\n  return vec3(x, y, z);\n}\n\nhighp float get(highp sampler2D tex, highp vec2 texSize, highp vec3 texDim, highp float z, highp float y, highp float x) {\n  highp vec3 xyz = vec3(x, y, z);\n  xyz = floor(xyz + 0.5);\n  __GET_WRAPAROUND__;\n  highp float index = round(xyz.x + texDim.x * (xyz.y + texDim.y * xyz.z));\n  __GET_TEXTURE_CHANNEL__;\n  highp float w = round(texSize.x);\n  vec2 st = vec2(integerMod(index, w), float(int(index) / int(w))) + 0.5;\n  __GET_TEXTURE_INDEX__;\n  highp vec4 texel = texture(tex, st / texSize);\n  __GET_RESULT__;\n}\n\nhighp float get(highp sampler2D tex, highp vec2 texSize, highp vec3 texDim, highp float y, highp float x) {\n  return get(tex, texSize, texDim, 0.0, y, x);\n}\n\nhighp float get(highp sampler2D tex, highp vec2 texSize, highp vec3 texDim, highp float x) {\n  return get(tex, texSize, texDim, 0.0, 0.0, x);\n}\n\nhighp vec4 actualColor;\nvoid color(float r, float g, float b, float a) {\n  actualColor = vec4(r,g,b,a);\n}\n\nvoid color(float r, float g, float b) {\n  color(r,g,b,1.0);\n}\n\n__MAIN_PARAMS__;\n__MAIN_CONSTANTS__;\n__KERNEL__;\n\nvoid main(void) {\n  index = floor(vTexCoord.s * float(uTexSize.x)) + floor(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;\n  __MAIN_RESULT__;\n}"},{}],70:[function(require,module,exports){"use strict";module.exports="#version 300 es\nprecision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\nin highp vec2 aPos;\nin highp vec2 aTexCoord;\n\nout highp vec2 vTexCoord;\nuniform vec2 ratio;\n\nvoid main(void) {\n  gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);\n  vTexCoord = aTexCoord;\n}"},{}],71:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var WebGLKernel=require('./kernel');var utils=require('../../core/utils');module.exports=function(_WebGLKernel){_inherits(WebGL2ValidatorKernel,_WebGLKernel);function WebGL2ValidatorKernel(){_classCallCheck(this,WebGL2ValidatorKernel);return _possibleConstructorReturn(this,(WebGL2ValidatorKernel.__proto__||Object.getPrototypeOf(WebGL2ValidatorKernel)).apply(this,arguments))}
_createClass(WebGL2ValidatorKernel,[{key:'validateOptions',value:function validateOptions(){this._webGl.getExtension('EXT_color_buffer_float');this.texSize=utils.dimToTexSize({floatTextures:this.floatTextures,floatOutput:this.floatOutput},this.output,!0)}}]);return WebGL2ValidatorKernel}(WebGLKernel)},{"../../core/utils":78,"./kernel":67}],72:[function(require,module,exports){'use strict';var utils=require('./utils');module.exports=function alias(name,fn){var fnString=fn.toString();return new Function('return function '+name+' ('+utils.getParamNamesFromString(fnString).join(', ')+') {'+utils.getFunctionBodyFromString(fnString)+'}')()}},{"./utils":78}],73:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var UtilsCore=require("./utils-core");module.exports=function(){function GPUCore(){_classCallCheck(this,GPUCore)}
_createClass(GPUCore,null,[{key:"validateKernelObj",value:function validateKernelObj(kernelObj){if(kernelObj===null){throw "KernelObj being validated is NULL"}
if(typeof kernelObj==="string"){try{kernelObj=JSON.parse(kernelObj)}catch(e){console.error(e);throw "Failed to convert KernelObj from JSON string"}
if(kernelObj===null){throw "Invalid (NULL) KernelObj JSON string representation"}}
if(kernelObj.isKernelObj!==!0){throw "Failed missing isKernelObj flag check"}
return kernelObj}},{key:"loadKernelObj",value:function loadKernelObj(kernelObj,inOpt){kernelObj=validateKernelObj(kernelObj)}}]);return GPUCore}()},{"./utils-core":77}],74:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var utils=require('./utils');var WebGLRunner=require('../backend/web-gl/runner');var WebGL2Runner=require('../backend/web-gl2/runner');var CPURunner=require('../backend/cpu/runner');var WebGLValidatorKernel=require('../backend/web-gl/validator-kernel');var WebGL2ValidatorKernel=require('../backend/web-gl2/validator-kernel');var GPUCore=require("./gpu-core");var GPU=function(_GPUCore){_inherits(GPU,_GPUCore);function GPU(settings){_classCallCheck(this,GPU);var _this=_possibleConstructorReturn(this,(GPU.__proto__||Object.getPrototypeOf(GPU)).call(this,settings));settings=settings||{};_this._canvas=settings.canvas||null;_this._webGl=settings.webGl||null;var mode=settings.mode;var detectedMode=void 0;if(!utils.isWebGlSupported()){if(mode&&mode!=='cpu'){throw new Error('A requested mode of "'+mode+'" and is not supported')}else{console.warn('Warning: gpu not supported, falling back to cpu support');detectedMode='cpu'}}else{detectedMode=mode||'gpu'}
_this.kernels=[];var runnerSettings={canvas:_this._canvas,webGl:_this._webGl};switch(detectedMode){case 'cpu':_this._runner=new CPURunner(runnerSettings);break;case 'gpu':var Runner=_this.getGPURunner();_this._runner=new Runner(runnerSettings);break;case 'webgl2':_this._runner=new WebGL2Runner(runnerSettings);break;case 'webgl':_this._runner=new WebGLRunner(runnerSettings);break;case 'webgl2-validator':_this._runner=new WebGL2Runner(runnerSettings);_this._runner.Kernel=WebGL2ValidatorKernel;break;case 'webgl-validator':_this._runner=new WebGLRunner(runnerSettings);_this._runner.Kernel=WebGLValidatorKernel;break;default:throw new Error('"'+mode+'" mode is not defined')}
return _this}
_createClass(GPU,[{key:'createKernel',value:function createKernel(fn,settings){if(typeof fn==='undefined'){throw 'Missing fn parameter'}
if(!utils.isFunction(fn)&&typeof fn!=='string'){throw 'fn parameter not a function'}
var kernel=this._runner.buildKernel(fn,settings||{});if(!this._canvas){this._canvas=kernel.getCanvas()}
if(!this._runner.canvas){this._runner.canvas=kernel.getCanvas()}
this.kernels.push(kernel);return kernel}},{key:'createKernelMap',value:function createKernelMap(){var fn=void 0;var settings=void 0;if(typeof arguments[arguments.length-2]==='function'){fn=arguments[arguments.length-2];settings=arguments[arguments.length-1]}else{fn=arguments[arguments.length-1]}
if(!utils.isWebGlDrawBuffersSupported()){this._runner=new CPURunner(settings)}
var kernel=this.createKernel(fn,settings);if(Array.isArray(arguments[0])){var functions=arguments[0];for(var i=0;i<functions.length;i++){kernel.addSubKernel(functions[i])}}else{var _functions=arguments[0];for(var p in _functions){if(!_functions.hasOwnProperty(p))continue;kernel.addSubKernelProperty(p,_functions[p])}}
return kernel}},{key:'combineKernels',value:function combineKernels(){var lastKernel=arguments[arguments.length-2];var combinedKernel=arguments[arguments.length-1];if(this.getMode()==='cpu')return combinedKernel;var canvas=arguments[0].getCanvas();var webGl=arguments[0].getWebGl();for(var i=0;i<arguments.length-1;i++){arguments[i].setCanvas(canvas).setWebGl(webGl).setOutputToTexture(!0)}
return function(){combinedKernel.apply(null,arguments);var texSize=lastKernel.texSize;var gl=lastKernel.getWebGl();var threadDim=lastKernel.threadDim;var result=void 0;if(lastKernel.floatOutput){result=new Float32Array(texSize[0]*texSize[1]*4);gl.readPixels(0,0,texSize[0],texSize[1],gl.RGBA,gl.FLOAT,result)}else{var bytes=new Uint8Array(texSize[0]*texSize[1]*4);gl.readPixels(0,0,texSize[0],texSize[1],gl.RGBA,gl.UNSIGNED_BYTE,bytes);result=new Float32Array(bytes.buffer)}
result=result.subarray(0,threadDim[0]*threadDim[1]*threadDim[2]);if(lastKernel.output.length===1){return result}else if(lastKernel.output.length===2){return utils.splitArray(result,lastKernel.output[0])}else if(lastKernel.output.length===3){var cube=utils.splitArray(result,lastKernel.output[0]*lastKernel.output[1]);return cube.map(function(x){return utils.splitArray(x,lastKernel.output[0])})}}}},{key:'getGPURunner',value:function getGPURunner(){if(typeof WebGL2RenderingContext!=='undefined')return WebGL2Runner;if(typeof WebGLRenderingContext!=='undefined')return WebGLRunner}},{key:'addFunction',value:function addFunction(fn,paramTypes,returnType){this._runner.functionBuilder.addFunction(null,fn,paramTypes,returnType);return this}},{key:'addNativeFunction',value:function addNativeFunction(name,nativeFunction){this._runner.functionBuilder.addNativeFunction(name,nativeFunction);return this}},{key:'getMode',value:function getMode(){return this._runner.getMode()}},{key:'isWebGlSupported',value:function isWebGlSupported(){return utils.isWebGlSupported()}},{key:'getCanvas',value:function getCanvas(){return this._canvas}},{key:'getWebGl',value:function getWebGl(){return this._webGl}}]);return GPU}(GPUCore);Object.assign(GPU,GPUCore);module.exports=GPU},{"../backend/cpu/runner":51,"../backend/web-gl/runner":61,"../backend/web-gl/validator-kernel":64,"../backend/web-gl2/runner":68,"../backend/web-gl2/validator-kernel":71,"./gpu-core":73,"./utils":78}],75:[function(require,module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
module.exports=function Input(value,size){_classCallCheck(this,Input);this.value=value;if(Array.isArray(size)){this.size=[];for(var i=0;i<size.length;i++){this.size[i]=size[i]}
while(this.size.length<3){this.size.push(1)}}else{if(size.z){this.size=[size.x,size.y,size.z]}else if(size.y){this.size=[size.x,size.y,1]}else{this.size=[size.x,1,1]}}}},{}],76:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var gpu=null;module.exports=function(){function Texture(texture,size,dimensions,output,webGl){_classCallCheck(this,Texture);this.texture=texture;this.size=size;this.dimensions=dimensions;this.output=output;this.webGl=webGl;this.kernel=null}
_createClass(Texture,[{key:'toArray',value:function toArray(gpu){if(!gpu)throw new Error('You need to pass the GPU object for toArray to work.');if(this.kernel)return this.kernel(this);this.kernel=gpu.createKernel(function(x){return x[this.thread.z][this.thread.y][this.thread.x]}).setOutput(this.output);return this.kernel(this)}},{key:'delete',value:function _delete(){return this.webGl.deleteTexture(this.texture)}}]);return Texture}()},{}],77:[function(require,module,exports){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var UtilsCore=function(){function UtilsCore(){_classCallCheck(this,UtilsCore)}
_createClass(UtilsCore,null,[{key:'isCanvas',value:function isCanvas(canvasObj){return canvasObj!==null&&canvasObj.nodeName&&canvasObj.getContext&&canvasObj.nodeName.toUpperCase()==='CANVAS'}},{key:'isCanvasSupported',value:function isCanvasSupported(){return _isCanvasSupported}},{key:'initCanvas',value:function initCanvas(){if(!_isCanvasSupported){return null}
var canvas=document.createElement('canvas');canvas.width=2;canvas.height=2;return canvas}},{key:'isWebGl',value:function isWebGl(webGlObj){return webGlObj&&typeof webGlObj.getExtension==='function'}},{key:'isWebGlSupported',value:function isWebGlSupported(){return _isWebGlSupported}},{key:'isWebGlDrawBuffersSupported',value:function isWebGlDrawBuffersSupported(){return _isWebGlDrawBuffersSupported}},{key:'initWebGlDefaultOptions',value:function initWebGlDefaultOptions(){return{alpha:!1,depth:!1,antialias:!1}}},{key:'initWebGl',value:function initWebGl(canvasObj){if(typeof _isCanvasSupported!=='undefined'||canvasObj===null){if(!_isCanvasSupported){return null}}
if(!UtilsCore.isCanvas(canvasObj)){throw new Error('Invalid canvas object - '+canvasObj)}
var webGl=canvasObj.getContext('experimental-webgl',UtilsCore.initWebGlDefaultOptions())||canvasObj.getContext('webgl',UtilsCore.initWebGlDefaultOptions());if(webGl){webGl.OES_texture_float=webGl.getExtension('OES_texture_float');webGl.OES_texture_float_linear=webGl.getExtension('OES_texture_float_linear');webGl.OES_element_index_uint=webGl.getExtension('OES_element_index_uint')}
return webGl}},{key:'initWebGl2',value:function initWebGl2(canvasObj){if(typeof _isCanvasSupported!=='undefined'||canvasObj===null){if(!_isCanvasSupported){return null}}
if(!UtilsCore.isCanvas(canvasObj)){throw new Error('Invalid canvas object - '+canvasObj)}
return canvasObj.getContext('webgl2',UtilsCore.initWebGlDefaultOptions())}}]);return UtilsCore}();var _isCanvasSupported=typeof document!=='undefined'?UtilsCore.isCanvas(document.createElement('canvas')):!1;var _testingWebGl=UtilsCore.initWebGl(UtilsCore.initCanvas());var _isWebGlSupported=UtilsCore.isWebGl(_testingWebGl);var _isWebGlDrawBuffersSupported=_isWebGlSupported&&Boolean(_testingWebGl.getExtension('WEBGL_draw_buffers'));if(_isWebGlSupported){UtilsCore.OES_texture_float=_testingWebGl.OES_texture_float;UtilsCore.OES_texture_float_linear=_testingWebGl.OES_texture_float_linear;UtilsCore.OES_element_index_uint=_testingWebGl.OES_element_index_uint}else{UtilsCore.OES_texture_float=!1;UtilsCore.OES_texture_float_linear=!1;UtilsCore.OES_element_index_uint=!1}
module.exports=UtilsCore},{}],78:[function(require,module,exports){'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var UtilsCore=require("./utils-core");var Input=require('./input');var Texture=require('./texture');var FUNCTION_NAME=/function([^(]*)/;var STRIP_COMMENTS=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;var ARGUMENT_NAMES=/([^\s,]+)/g;var _systemEndianness=function(){var b=new ArrayBuffer(4);var a=new Uint32Array(b);var c=new Uint8Array(b);a[0]=0xdeadbeef;if(c[0]===0xef)return'LE';if(c[0]===0xde)return'BE';throw new Error('unknown endianness')}();var _isFloatReadPixelsSupported=null;var _isFloatReadPixelsSupportedWebGL2=null;var _isMixedIdentifiersSupported=function(){try{new Function('let i = 1; const j = 1;')();return!0}catch(e){return!1}}();var Utils=function(_UtilsCore){_inherits(Utils,_UtilsCore);function Utils(){_classCallCheck(this,Utils);return _possibleConstructorReturn(this,(Utils.__proto__||Object.getPrototypeOf(Utils)).apply(this,arguments))}
_createClass(Utils,null,[{key:'systemEndianness',value:function systemEndianness(){return _systemEndianness}},{key:'isFunction',value:function isFunction(funcObj){return typeof funcObj==='function'}},{key:'isFunctionString',value:function isFunctionString(funcStr){if(funcStr!==null){return funcStr.toString().slice(0,'function'.length).toLowerCase()==='function'}
return!1}},{key:'getFunctionNameFromString',value:function getFunctionNameFromString(funcStr){return FUNCTION_NAME.exec(funcStr)[1]}},{key:'getFunctionBodyFromString',value:function getFunctionBodyFromString(funcStr){return funcStr.substring(funcStr.indexOf('{')+1,funcStr.lastIndexOf('}'))}},{key:'getParamNamesFromString',value:function getParamNamesFromString(func){var fnStr=func.toString().replace(STRIP_COMMENTS,'');var result=fnStr.slice(fnStr.indexOf('(')+1,fnStr.indexOf(')')).match(ARGUMENT_NAMES);if(result===null)result=[];return result}},{key:'clone',value:function clone(obj){if(obj===null||(typeof obj==='undefined'?'undefined':_typeof(obj))!=='object'||obj.hasOwnProperty('isActiveClone'))return obj;var temp=obj.constructor();for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){obj.isActiveClone=null;temp[key]=Utils.clone(obj[key]);delete obj.isActiveClone}}
return temp}},{key:'newPromise',value:function newPromise(executor){var simple=Promise||small_promise;if(simple===null){throw TypeError('Browser is missing Promise implementation. Consider adding small_promise.js polyfill')}
return new simple(executor)}},{key:'functionBinder',value:function functionBinder(inFunc,thisObj){if(inFunc.bind){return inFunc.bind(thisObj)}
return function(){var args=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);return inFunc.apply(thisObj,args)}}},{key:'isArray',value:function isArray(array){if(isNaN(array.length)){return!1}
return!0}},{key:'getArgumentType',value:function getArgumentType(arg){if(Utils.isArray(arg)){return'Array'}else if(typeof arg==='number'){return'Number'}else if(arg instanceof Texture){return'Texture'}else if(arg instanceof Input){return'Input'}else{return'Unknown'}}},{key:'isFloatReadPixelsSupported',value:function isFloatReadPixelsSupported(){if(_isFloatReadPixelsSupported!==null){return _isFloatReadPixelsSupported}
var GPU=require('../index');var x=new GPU({mode:'webgl-validator'}).createKernel(function(){return 1},{output:[2],floatTextures:!0,floatOutput:!0,floatOutputForce:!0})();_isFloatReadPixelsSupported=x[0]===1;return _isFloatReadPixelsSupported}},{key:'isFloatReadPixelsSupportedWebGL2',value:function isFloatReadPixelsSupportedWebGL2(){if(_isFloatReadPixelsSupportedWebGL2!==null){return _isFloatReadPixelsSupportedWebGL2}
var GPU=require('../index');var x=new GPU({mode:'webgl2-validator'}).createKernel(function(){return 1},{output:[2],floatTextures:!0,floatOutput:!0,floatOutputForce:!0})();_isFloatReadPixelsSupportedWebGL2=x[0]===1;return _isFloatReadPixelsSupportedWebGL2}},{key:'isMixedIdentifiersSupported',value:function isMixedIdentifiersSupported(){return _isMixedIdentifiersSupported}},{key:'dimToTexSize',value:function dimToTexSize(opt,dimensions,output){var numTexels=dimensions[0];for(var i=1;i<dimensions.length;i++){numTexels*=dimensions[i]}
if(opt.floatTextures&&(!output||opt.floatOutput)){numTexels=Math.ceil(numTexels/4)}
var w=Math.ceil(Math.sqrt(numTexels));return[w,w]}},{key:'getDimensions',value:function getDimensions(x,pad){var ret=void 0;if(Utils.isArray(x)){var dim=[];var temp=x;while(Utils.isArray(temp)){dim.push(temp.length);temp=temp[0]}
ret=dim.reverse()}else if(x instanceof Texture){ret=x.output}else if(x instanceof Input){ret=x.size}else{throw 'Unknown dimensions of '+x}
if(pad){ret=Utils.clone(ret);while(ret.length<3){ret.push(1)}}
return ret}},{key:'pad',value:function pad(arr,padding){function zeros(n){return Array.apply(null,new Array(n)).map(Number.prototype.valueOf,0)}
var len=arr.length+padding*2;var ret=arr.map(function(x){return[].concat(zeros(padding),x,zeros(padding))});for(var i=0;i<padding;i++){ret=[].concat([zeros(len)],ret,[zeros(len)])}
return ret}},{key:'flatten2dArrayTo',value:function flatten2dArrayTo(array,target){var offset=0;for(var y=0;y<array.length;y++){target.set(array[y],offset);offset+=array[y].length}}},{key:'flatten3dArrayTo',value:function flatten3dArrayTo(array,target){var offset=0;for(var z=0;z<array.length;z++){for(var y=0;y<array[z].length;y++){target.set(array[z][y],offset);offset+=array[z][y].length}}}},{key:'flattenTo',value:function flattenTo(array,target){if(Utils.isArray(array[0])){if(Utils.isArray(array[0][0])){Utils.flatten3dArrayTo(array,target)}else{Utils.flatten2dArrayTo(array,target)}}else{target.set(array)}}},{key:'splitArray',value:function splitArray(array,part){var result=[];for(var i=0;i<array.length;i+=part){result.push(Array.prototype.slice.call(array,i,i+part))}
return result}},{key:'getAstString',value:function getAstString(source,ast){var lines=Array.isArray(source)?source:source.split(/\r?\n/g);var start=ast.loc.start;var end=ast.loc.end;var result=[];result.push(lines[start.line-1].slice(start.column));for(var i=start.line;i<end.line-1;i++){result.push(lines[i])}
result.push(lines[end.line-1].slice(0,end.column));return result.join('\n')}},{key:'allPropertiesOf',value:function allPropertiesOf(obj){var props=[];do{props.push.apply(props,Object.getOwnPropertyNames(obj))}while(obj=Object.getPrototypeOf(obj));return props}}]);return Utils}(UtilsCore);Object.assign(Utils,UtilsCore);module.exports=Utils},{"../index":79,"./input":75,"./texture":76,"./utils-core":77}],79:[function(require,module,exports){'use strict';var GPU=require('./core/gpu');var alias=require('./core/alias');var utils=require('./core/utils');var Input=require('./core/input');var Texture=require('./core/texture');var CPUFunctionBuilder=require('./backend/cpu/function-builder');var CPUFunctionNode=require('./backend/cpu/function-node');var CPUKernel=require('./backend/cpu/kernel');var CPURunner=require('./backend/cpu/runner');var WebGLFunctionBuilder=require('./backend/web-gl/function-builder');var WebGLFunctionNode=require('./backend/web-gl/function-node');var WebGLKernel=require('./backend/web-gl/kernel');var WebGLRunner=require('./backend/web-gl/runner');var WebGL2FunctionBuilder=require('./backend/web-gl2/function-builder');var WebGL2FunctionNode=require('./backend/web-gl2/function-node');var WebGL2Kernel=require('./backend/web-gl2/kernel');var WebGL2Runner=require('./backend/web-gl2/runner');GPU.alias=alias;GPU.utils=utils;GPU.Texture=Texture;GPU.Input=Input;GPU.input=function(value,size){return new Input(value,size)};GPU.CPUFunctionBuilder=CPUFunctionBuilder;GPU.CPUFunctionNode=CPUFunctionNode;GPU.CPUKernel=CPUKernel;GPU.CPURunner=CPURunner;GPU.WebGLFunctionBuilder=WebGLFunctionBuilder;GPU.WebGLFunctionNode=WebGLFunctionNode;GPU.WebGLKernel=WebGLKernel;GPU.WebGLRunner=WebGLRunner;GPU.WebGL2FunctionBuilder=WebGL2FunctionBuilder;GPU.WebGL2FunctionNode=WebGL2FunctionNode;GPU.WebGL2Kernel=WebGL2Kernel;GPU.WebGL2Runner=WebGL2Runner;if(typeof module!=='undefined'){module.exports=GPU}
if(typeof window!=='undefined'){window.GPU=GPU}},{"./backend/cpu/function-builder":47,"./backend/cpu/function-node":48,"./backend/cpu/kernel":50,"./backend/cpu/runner":51,"./backend/web-gl/function-builder":57,"./backend/web-gl/function-node":58,"./backend/web-gl/kernel":60,"./backend/web-gl/runner":61,"./backend/web-gl2/function-builder":65,"./backend/web-gl2/function-node":66,"./backend/web-gl2/kernel":67,"./backend/web-gl2/runner":68,"./core/alias":72,"./core/gpu":74,"./core/input":75,"./core/texture":76,"./core/utils":78}],80:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _=require('./');var _2=_interopRequireDefault(_);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var Block=function(){function Block(options,count){_classCallCheck(this,Block);this.index=0;this.thaws=[];this.count=count||200;this.options=options}
_createClass(Block,[{key:'add',value:function add(item){var next=this._next();next.add(item);return this}},{key:'addArray',value:function addArray(items){var next=this._next();next.addArray(items);return this}},{key:'insert',value:function insert(item){var next=this._next();next.insert(item);return this}},{key:'insertArray',value:function insertArray(items){var next=this._next();next.insertArray(items);return this}},{key:'stop',value:function stop(){for(var i=0;i<this.thaws.length;i++){this.thaws[i].stop()}
return this}},{key:'_next',value:function _next(){var thaw=null;var thaws=this.thaws;if(thaws.length<this.count){thaws.push(thaw=new _2.default([],this.options))}else{thaw=thaws[this.index]}
this.index++;if(this.index>=this.count){this.index=0}
return thaw}}]);return Block}();exports.default=Block},{"./":81}],81:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});exports.Block=undefined;var _thaw=require('./thaw');var _thaw2=_interopRequireDefault(_thaw);var _block=require('./block');var _block2=_interopRequireDefault(_block);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
exports.default=_thaw2.default;exports.Block=_block2.default;if(typeof window!=='undefined'){window.Thaw=_thaw2.default;window.Thaw.Block=_block2.default}},{"./block":80,"./thaw":82}],82:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if("value" in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();exports.thaw=thaw;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var thawing=!1;var thaws=[];var Thaw=function(){_createClass(Thaw,null,[{key:"stopAll",value:function stopAll(){for(var i=0;i<thaws.length;i++){thaws[i].stop()}}},{key:"defaultSettings",get:function get(){return{each:null,done:null}}},{key:"isThawing",get:function get(){return thawing}}]);function Thaw(items){var _this=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,Thaw);var _constructor$defaultS=_extends({},this.constructor.defaultSettings,options),each=_constructor$defaultS.each,done=_constructor$defaultS.done;this.items=items;this.i=0;this.options=options;var tick=this.tick=function(){if(_this.i<0)return;_this.timeout=setTimeout(tick,0);if(thawing)return;var item=items[_this.i];if(_this.i>=items.length){if(done!==null){thawing=!0;done(item,_this.i);thawing=!1}
_this.i=-1;clearTimeout(_this.timeout);return}
if(each!==null){thawing=!0;each(item,_this.i);thawing=!1}else if(item!==undefined){item()}
_this.i++};thaws.push(this);if(!options.delay){tick()}}
_createClass(Thaw,[{key:"makeReady",value:function makeReady(){if(this.i<0){this.i=this.items.length;return!0}
return!1}},{key:"add",value:function add(item){var doTick=this.makeReady();this.items.push(item);if(doTick){this.tick()}
return this}},{key:"insert",value:function insert(item){var doTick=this.makeReady();this.items.splice(this.i,0,item);if(doTick){this.tick()}
return this}},{key:"addArray",value:function addArray(items){var doTick=this.makeReady();this.items=this.items.concat(items);if(doTick){this.tick()}
return this}},{key:"insertArray",value:function insertArray(items){var doTick=this.makeReady();var left=this.items;var middle=items;var right=this.items.splice(this.i,this.items.length-this.i+1);this.items=left.concat(middle,right);if(doTick){this.tick()}
return this}},{key:"stop",value:function stop(){this.i=-1;clearTimeout(this.timeout);if(this.options.done){this.options.done()}
return this}}]);return Thaw}();exports.default=Thaw;function thaw(items){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return new Thaw(items,options)}},{}],83:[function(require,module,exports){'use strict'
exports.byteLength=byteLength
exports.toByteArray=toByteArray
exports.fromByteArray=fromByteArray
var lookup=[]
var revLookup=[]
var Arr=typeof Uint8Array!=='undefined'?Uint8Array:Array
var code='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for(var i=0,len=code.length;i<len;++i){lookup[i]=code[i]
revLookup[code.charCodeAt(i)]=i}
revLookup['-'.charCodeAt(0)]=62
revLookup['_'.charCodeAt(0)]=63
function getLens(b64){var len=b64.length
if(len%4>0){throw new Error('Invalid string. Length must be a multiple of 4')}
var validLen=b64.indexOf('=')
if(validLen===-1)validLen=len
var placeHoldersLen=validLen===len?0:4-(validLen%4)
return[validLen,placeHoldersLen]}
function byteLength(b64){var lens=getLens(b64)
var validLen=lens[0]
var placeHoldersLen=lens[1]
return((validLen+placeHoldersLen)*3/4)-placeHoldersLen}
function _byteLength(b64,validLen,placeHoldersLen){return((validLen+placeHoldersLen)*3/4)-placeHoldersLen}
function toByteArray(b64){var tmp
var lens=getLens(b64)
var validLen=lens[0]
var placeHoldersLen=lens[1]
var arr=new Arr(_byteLength(b64,validLen,placeHoldersLen))
var curByte=0
var len=placeHoldersLen>0?validLen-4:validLen
for(var i=0;i<len;i+=4){tmp=(revLookup[b64.charCodeAt(i)]<<18)|(revLookup[b64.charCodeAt(i+1)]<<12)|(revLookup[b64.charCodeAt(i+2)]<<6)|revLookup[b64.charCodeAt(i+3)]
arr[curByte++]=(tmp>>16)&0xFF
arr[curByte++]=(tmp>>8)&0xFF
arr[curByte++]=tmp&0xFF}
if(placeHoldersLen===2){tmp=(revLookup[b64.charCodeAt(i)]<<2)|(revLookup[b64.charCodeAt(i+1)]>>4)
arr[curByte++]=tmp&0xFF}
if(placeHoldersLen===1){tmp=(revLookup[b64.charCodeAt(i)]<<10)|(revLookup[b64.charCodeAt(i+1)]<<4)|(revLookup[b64.charCodeAt(i+2)]>>2)
arr[curByte++]=(tmp>>8)&0xFF
arr[curByte++]=tmp&0xFF}
return arr}
function tripletToBase64(num){return lookup[num>>18&0x3F]+lookup[num>>12&0x3F]+lookup[num>>6&0x3F]+lookup[num&0x3F]}
function encodeChunk(uint8,start,end){var tmp
var output=[]
for(var i=start;i<end;i+=3){tmp=((uint8[i]<<16)&0xFF0000)+((uint8[i+1]<<8)&0xFF00)+(uint8[i+2]&0xFF)
output.push(tripletToBase64(tmp))}
return output.join('')}
function fromByteArray(uint8){var tmp
var len=uint8.length
var extraBytes=len%3
var parts=[]
var maxChunkLength=16383
for(var i=0,len2=len-extraBytes;i<len2;i+=maxChunkLength){parts.push(encodeChunk(uint8,i,(i+maxChunkLength)>len2?len2:(i+maxChunkLength)))}
if(extraBytes===1){tmp=uint8[len-1]
parts.push(lookup[tmp>>2]+lookup[(tmp<<4)&0x3F]+'==')}else if(extraBytes===2){tmp=(uint8[len-2]<<8)+uint8[len-1]
parts.push(lookup[tmp>>10]+lookup[(tmp>>4)&0x3F]+lookup[(tmp<<2)&0x3F]+'=')}
return parts.join('')}},{}],84:[function(require,module,exports){},{}],85:[function(require,module,exports){'use strict'
var base64=require('base64-js')
var ieee754=require('ieee754')
exports.Buffer=Buffer
exports.SlowBuffer=SlowBuffer
exports.INSPECT_MAX_BYTES=50
var K_MAX_LENGTH=0x7fffffff
exports.kMaxLength=K_MAX_LENGTH
Buffer.TYPED_ARRAY_SUPPORT=typedArraySupport()
if(!Buffer.TYPED_ARRAY_SUPPORT&&typeof console!=='undefined'&&typeof console.error==='function'){console.error('This browser lacks typed array (Uint8Array) support which is required by '+'`buffer` v5.x. Use `buffer` v4.x if you require old browser support.')}
function typedArraySupport(){try{var arr=new Uint8Array(1)
arr.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}}
return arr.foo()===42}catch(e){return!1}}
Object.defineProperty(Buffer.prototype,'parent',{enumerable:!0,get:function(){if(!Buffer.isBuffer(this))return undefined
return this.buffer}})
Object.defineProperty(Buffer.prototype,'offset',{enumerable:!0,get:function(){if(!Buffer.isBuffer(this))return undefined
return this.byteOffset}})
function createBuffer(length){if(length>K_MAX_LENGTH){throw new RangeError('The value "'+length+'" is invalid for option "size"')}
var buf=new Uint8Array(length)
buf.__proto__=Buffer.prototype
return buf}
function Buffer(arg,encodingOrOffset,length){if(typeof arg==='number'){if(typeof encodingOrOffset==='string'){throw new TypeError('The "string" argument must be of type string. Received type number')}
return allocUnsafe(arg)}
return from(arg,encodingOrOffset,length)}
if(typeof Symbol!=='undefined'&&Symbol.species!=null&&Buffer[Symbol.species]===Buffer){Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})}
Buffer.poolSize=8192
function from(value,encodingOrOffset,length){if(typeof value==='string'){return fromString(value,encodingOrOffset)}
if(ArrayBuffer.isView(value)){return fromArrayLike(value)}
if(value==null){throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, '+'or Array-like Object. Received type '+(typeof value))}
if(isInstance(value,ArrayBuffer)||(value&&isInstance(value.buffer,ArrayBuffer))){return fromArrayBuffer(value,encodingOrOffset,length)}
if(typeof value==='number'){throw new TypeError('The "value" argument must not be of type number. Received type number')}
var valueOf=value.valueOf&&value.valueOf()
if(valueOf!=null&&valueOf!==value){return Buffer.from(valueOf,encodingOrOffset,length)}
var b=fromObject(value)
if(b)return b
if(typeof Symbol!=='undefined'&&Symbol.toPrimitive!=null&&typeof value[Symbol.toPrimitive]==='function'){return Buffer.from(value[Symbol.toPrimitive]('string'),encodingOrOffset,length)}
throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, '+'or Array-like Object. Received type '+(typeof value))}
Buffer.from=function(value,encodingOrOffset,length){return from(value,encodingOrOffset,length)}
Buffer.prototype.__proto__=Uint8Array.prototype
Buffer.__proto__=Uint8Array
function assertSize(size){if(typeof size!=='number'){throw new TypeError('"size" argument must be of type number')}else if(size<0){throw new RangeError('The value "'+size+'" is invalid for option "size"')}}
function alloc(size,fill,encoding){assertSize(size)
if(size<=0){return createBuffer(size)}
if(fill!==undefined){return typeof encoding==='string'?createBuffer(size).fill(fill,encoding):createBuffer(size).fill(fill)}
return createBuffer(size)}
Buffer.alloc=function(size,fill,encoding){return alloc(size,fill,encoding)}
function allocUnsafe(size){assertSize(size)
return createBuffer(size<0?0:checked(size)|0)}
Buffer.allocUnsafe=function(size){return allocUnsafe(size)}
Buffer.allocUnsafeSlow=function(size){return allocUnsafe(size)}
function fromString(string,encoding){if(typeof encoding!=='string'||encoding===''){encoding='utf8'}
if(!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding)}
var length=byteLength(string,encoding)|0
var buf=createBuffer(length)
var actual=buf.write(string,encoding)
if(actual!==length){buf=buf.slice(0,actual)}
return buf}
function fromArrayLike(array){var length=array.length<0?0:checked(array.length)|0
var buf=createBuffer(length)
for(var i=0;i<length;i+=1){buf[i]=array[i]&255}
return buf}
function fromArrayBuffer(array,byteOffset,length){if(byteOffset<0||array.byteLength<byteOffset){throw new RangeError('"offset" is outside of buffer bounds')}
if(array.byteLength<byteOffset+(length||0)){throw new RangeError('"length" is outside of buffer bounds')}
var buf
if(byteOffset===undefined&&length===undefined){buf=new Uint8Array(array)}else if(length===undefined){buf=new Uint8Array(array,byteOffset)}else{buf=new Uint8Array(array,byteOffset,length)}
buf.__proto__=Buffer.prototype
return buf}
function fromObject(obj){if(Buffer.isBuffer(obj)){var len=checked(obj.length)|0
var buf=createBuffer(len)
if(buf.length===0){return buf}
obj.copy(buf,0,0,len)
return buf}
if(obj.length!==undefined){if(typeof obj.length!=='number'||numberIsNaN(obj.length)){return createBuffer(0)}
return fromArrayLike(obj)}
if(obj.type==='Buffer'&&Array.isArray(obj.data)){return fromArrayLike(obj.data)}}
function checked(length){if(length>=K_MAX_LENGTH){throw new RangeError('Attempt to allocate Buffer larger than maximum '+'size: 0x'+K_MAX_LENGTH.toString(16)+' bytes')}
return length|0}
function SlowBuffer(length){if(+length!=length){length=0}
return Buffer.alloc(+length)}
Buffer.isBuffer=function isBuffer(b){return b!=null&&b._isBuffer===!0&&b!==Buffer.prototype}
Buffer.compare=function compare(a,b){if(isInstance(a,Uint8Array))a=Buffer.from(a,a.offset,a.byteLength)
if(isInstance(b,Uint8Array))b=Buffer.from(b,b.offset,b.byteLength)
if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array')}
if(a===b)return 0
var x=a.length
var y=b.length
for(var i=0,len=Math.min(x,y);i<len;++i){if(a[i]!==b[i]){x=a[i]
y=b[i]
break}}
if(x<y)return-1
if(y<x)return 1
return 0}
Buffer.isEncoding=function isEncoding(encoding){switch(String(encoding).toLowerCase()){case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'latin1':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return!0
default:return!1}}
Buffer.concat=function concat(list,length){if(!Array.isArray(list)){throw new TypeError('"list" argument must be an Array of Buffers')}
if(list.length===0){return Buffer.alloc(0)}
var i
if(length===undefined){length=0
for(i=0;i<list.length;++i){length+=list[i].length}}
var buffer=Buffer.allocUnsafe(length)
var pos=0
for(i=0;i<list.length;++i){var buf=list[i]
if(isInstance(buf,Uint8Array)){buf=Buffer.from(buf)}
if(!Buffer.isBuffer(buf)){throw new TypeError('"list" argument must be an Array of Buffers')}
buf.copy(buffer,pos)
pos+=buf.length}
return buffer}
function byteLength(string,encoding){if(Buffer.isBuffer(string)){return string.length}
if(ArrayBuffer.isView(string)||isInstance(string,ArrayBuffer)){return string.byteLength}
if(typeof string!=='string'){throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. '+'Received type '+typeof string)}
var len=string.length
var mustMatch=(arguments.length>2&&arguments[2]===!0)
if(!mustMatch&&len===0)return 0
var loweredCase=!1
for(;;){switch(encoding){case 'ascii':case 'latin1':case 'binary':return len
case 'utf8':case 'utf-8':return utf8ToBytes(string).length
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return len*2
case 'hex':return len>>>1
case 'base64':return base64ToBytes(string).length
default:if(loweredCase){return mustMatch?-1:utf8ToBytes(string).length}
encoding=(''+encoding).toLowerCase()
loweredCase=!0}}}
Buffer.byteLength=byteLength
function slowToString(encoding,start,end){var loweredCase=!1
if(start===undefined||start<0){start=0}
if(start>this.length){return''}
if(end===undefined||end>this.length){end=this.length}
if(end<=0){return''}
end>>>=0
start>>>=0
if(end<=start){return''}
if(!encoding)encoding='utf8'
while(!0){switch(encoding){case 'hex':return hexSlice(this,start,end)
case 'utf8':case 'utf-8':return utf8Slice(this,start,end)
case 'ascii':return asciiSlice(this,start,end)
case 'latin1':case 'binary':return latin1Slice(this,start,end)
case 'base64':return base64Slice(this,start,end)
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return utf16leSlice(this,start,end)
default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding)
encoding=(encoding+'').toLowerCase()
loweredCase=!0}}}
Buffer.prototype._isBuffer=!0
function swap(b,n,m){var i=b[n]
b[n]=b[m]
b[m]=i}
Buffer.prototype.swap16=function swap16(){var len=this.length
if(len%2!==0){throw new RangeError('Buffer size must be a multiple of 16-bits')}
for(var i=0;i<len;i+=2){swap(this,i,i+1)}
return this}
Buffer.prototype.swap32=function swap32(){var len=this.length
if(len%4!==0){throw new RangeError('Buffer size must be a multiple of 32-bits')}
for(var i=0;i<len;i+=4){swap(this,i,i+3)
swap(this,i+1,i+2)}
return this}
Buffer.prototype.swap64=function swap64(){var len=this.length
if(len%8!==0){throw new RangeError('Buffer size must be a multiple of 64-bits')}
for(var i=0;i<len;i+=8){swap(this,i,i+7)
swap(this,i+1,i+6)
swap(this,i+2,i+5)
swap(this,i+3,i+4)}
return this}
Buffer.prototype.toString=function toString(){var length=this.length
if(length===0)return''
if(arguments.length===0)return utf8Slice(this,0,length)
return slowToString.apply(this,arguments)}
Buffer.prototype.toLocaleString=Buffer.prototype.toString
Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer')
if(this===b)return!0
return Buffer.compare(this,b)===0}
Buffer.prototype.inspect=function inspect(){var str=''
var max=exports.INSPECT_MAX_BYTES
str=this.toString('hex',0,max).replace(/(.{2})/g,'$1 ').trim()
if(this.length>max)str+=' ... '
return'<Buffer '+str+'>'}
Buffer.prototype.compare=function compare(target,start,end,thisStart,thisEnd){if(isInstance(target,Uint8Array)){target=Buffer.from(target,target.offset,target.byteLength)}
if(!Buffer.isBuffer(target)){throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. '+'Received type '+(typeof target))}
if(start===undefined){start=0}
if(end===undefined){end=target?target.length:0}
if(thisStart===undefined){thisStart=0}
if(thisEnd===undefined){thisEnd=this.length}
if(start<0||end>target.length||thisStart<0||thisEnd>this.length){throw new RangeError('out of range index')}
if(thisStart>=thisEnd&&start>=end){return 0}
if(thisStart>=thisEnd){return-1}
if(start>=end){return 1}
start>>>=0
end>>>=0
thisStart>>>=0
thisEnd>>>=0
if(this===target)return 0
var x=thisEnd-thisStart
var y=end-start
var len=Math.min(x,y)
var thisCopy=this.slice(thisStart,thisEnd)
var targetCopy=target.slice(start,end)
for(var i=0;i<len;++i){if(thisCopy[i]!==targetCopy[i]){x=thisCopy[i]
y=targetCopy[i]
break}}
if(x<y)return-1
if(y<x)return 1
return 0}
function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){if(buffer.length===0)return-1
if(typeof byteOffset==='string'){encoding=byteOffset
byteOffset=0}else if(byteOffset>0x7fffffff){byteOffset=0x7fffffff}else if(byteOffset<-0x80000000){byteOffset=-0x80000000}
byteOffset=+byteOffset
if(numberIsNaN(byteOffset)){byteOffset=dir?0:(buffer.length-1)}
if(byteOffset<0)byteOffset=buffer.length+byteOffset
if(byteOffset>=buffer.length){if(dir)return-1
else byteOffset=buffer.length-1}else if(byteOffset<0){if(dir)byteOffset=0
else return-1}
if(typeof val==='string'){val=Buffer.from(val,encoding)}
if(Buffer.isBuffer(val)){if(val.length===0){return-1}
return arrayIndexOf(buffer,val,byteOffset,encoding,dir)}else if(typeof val==='number'){val=val&0xFF
if(typeof Uint8Array.prototype.indexOf==='function'){if(dir){return Uint8Array.prototype.indexOf.call(buffer,val,byteOffset)}else{return Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset)}}
return arrayIndexOf(buffer,[val],byteOffset,encoding,dir)}
throw new TypeError('val must be string, number or Buffer')}
function arrayIndexOf(arr,val,byteOffset,encoding,dir){var indexSize=1
var arrLength=arr.length
var valLength=val.length
if(encoding!==undefined){encoding=String(encoding).toLowerCase()
if(encoding==='ucs2'||encoding==='ucs-2'||encoding==='utf16le'||encoding==='utf-16le'){if(arr.length<2||val.length<2){return-1}
indexSize=2
arrLength/=2
valLength/=2
byteOffset/=2}}
function read(buf,i){if(indexSize===1){return buf[i]}else{return buf.readUInt16BE(i*indexSize)}}
var i
if(dir){var foundIndex=-1
for(i=byteOffset;i<arrLength;i++){if(read(arr,i)===read(val,foundIndex===-1?0:i-foundIndex)){if(foundIndex===-1)foundIndex=i
if(i-foundIndex+1===valLength)return foundIndex*indexSize}else{if(foundIndex!==-1)i-=i-foundIndex
foundIndex=-1}}}else{if(byteOffset+valLength>arrLength)byteOffset=arrLength-valLength
for(i=byteOffset;i>=0;i--){var found=!0
for(var j=0;j<valLength;j++){if(read(arr,i+j)!==read(val,j)){found=!1
break}}
if(found)return i}}
return-1}
Buffer.prototype.includes=function includes(val,byteOffset,encoding){return this.indexOf(val,byteOffset,encoding)!==-1}
Buffer.prototype.indexOf=function indexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,!0)}
Buffer.prototype.lastIndexOf=function lastIndexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,!1)}
function hexWrite(buf,string,offset,length){offset=Number(offset)||0
var remaining=buf.length-offset
if(!length){length=remaining}else{length=Number(length)
if(length>remaining){length=remaining}}
var strLen=string.length
if(length>strLen/2){length=strLen/2}
for(var i=0;i<length;++i){var parsed=parseInt(string.substr(i*2,2),16)
if(numberIsNaN(parsed))return i
buf[offset+i]=parsed}
return i}
function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length)}
function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length)}
function latin1Write(buf,string,offset,length){return asciiWrite(buf,string,offset,length)}
function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length)}
function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length)}
Buffer.prototype.write=function write(string,offset,length,encoding){if(offset===undefined){encoding='utf8'
length=this.length
offset=0}else if(length===undefined&&typeof offset==='string'){encoding=offset
length=this.length
offset=0}else if(isFinite(offset)){offset=offset>>>0
if(isFinite(length)){length=length>>>0
if(encoding===undefined)encoding='utf8'}else{encoding=length
length=undefined}}else{throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported')}
var remaining=this.length-offset
if(length===undefined||length>remaining)length=remaining
if((string.length>0&&(length<0||offset<0))||offset>this.length){throw new RangeError('Attempt to write outside buffer bounds')}
if(!encoding)encoding='utf8'
var loweredCase=!1
for(;;){switch(encoding){case 'hex':return hexWrite(this,string,offset,length)
case 'utf8':case 'utf-8':return utf8Write(this,string,offset,length)
case 'ascii':return asciiWrite(this,string,offset,length)
case 'latin1':case 'binary':return latin1Write(this,string,offset,length)
case 'base64':return base64Write(this,string,offset,length)
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return ucs2Write(this,string,offset,length)
default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding)
encoding=(''+encoding).toLowerCase()
loweredCase=!0}}}
Buffer.prototype.toJSON=function toJSON(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)}}
function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf)}else{return base64.fromByteArray(buf.slice(start,end))}}
function utf8Slice(buf,start,end){end=Math.min(buf.length,end)
var res=[]
var i=start
while(i<end){var firstByte=buf[i]
var codePoint=null
var bytesPerSequence=(firstByte>0xEF)?4:(firstByte>0xDF)?3:(firstByte>0xBF)?2:1
if(i+bytesPerSequence<=end){var secondByte,thirdByte,fourthByte,tempCodePoint
switch(bytesPerSequence){case 1:if(firstByte<0x80){codePoint=firstByte}
break
case 2:secondByte=buf[i+1]
if((secondByte&0xC0)===0x80){tempCodePoint=(firstByte&0x1F)<<0x6|(secondByte&0x3F)
if(tempCodePoint>0x7F){codePoint=tempCodePoint}}
break
case 3:secondByte=buf[i+1]
thirdByte=buf[i+2]
if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0xC|(secondByte&0x3F)<<0x6|(thirdByte&0x3F)
if(tempCodePoint>0x7FF&&(tempCodePoint<0xD800||tempCodePoint>0xDFFF)){codePoint=tempCodePoint}}
break
case 4:secondByte=buf[i+1]
thirdByte=buf[i+2]
fourthByte=buf[i+3]
if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80&&(fourthByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0x12|(secondByte&0x3F)<<0xC|(thirdByte&0x3F)<<0x6|(fourthByte&0x3F)
if(tempCodePoint>0xFFFF&&tempCodePoint<0x110000){codePoint=tempCodePoint}}}}
if(codePoint===null){codePoint=0xFFFD
bytesPerSequence=1}else if(codePoint>0xFFFF){codePoint-=0x10000
res.push(codePoint>>>10&0x3FF|0xD800)
codePoint=0xDC00|codePoint&0x3FF}
res.push(codePoint)
i+=bytesPerSequence}
return decodeCodePointsArray(res)}
var MAX_ARGUMENTS_LENGTH=0x1000
function decodeCodePointsArray(codePoints){var len=codePoints.length
if(len<=MAX_ARGUMENTS_LENGTH){return String.fromCharCode.apply(String,codePoints)}
var res=''
var i=0
while(i<len){res+=String.fromCharCode.apply(String,codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH))}
return res}
function asciiSlice(buf,start,end){var ret=''
end=Math.min(buf.length,end)
for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]&0x7F)}
return ret}
function latin1Slice(buf,start,end){var ret=''
end=Math.min(buf.length,end)
for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i])}
return ret}
function hexSlice(buf,start,end){var len=buf.length
if(!start||start<0)start=0
if(!end||end<0||end>len)end=len
var out=''
for(var i=start;i<end;++i){out+=toHex(buf[i])}
return out}
function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end)
var res=''
for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+(bytes[i+1]*256))}
return res}
Buffer.prototype.slice=function slice(start,end){var len=this.length
start=~~start
end=end===undefined?len:~~end
if(start<0){start+=len
if(start<0)start=0}else if(start>len){start=len}
if(end<0){end+=len
if(end<0)end=0}else if(end>len){end=len}
if(end<start)end=start
var newBuf=this.subarray(start,end)
newBuf.__proto__=Buffer.prototype
return newBuf}
function checkOffset(offset,ext,length){if((offset%1)!==0||offset<0)throw new RangeError('offset is not uint')
if(offset+ext>length)throw new RangeError('Trying to access beyond buffer length')}
Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var val=this[offset]
var mul=1
var i=0
while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul}
return val}
Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert){checkOffset(offset,byteLength,this.length)}
var val=this[offset+ --byteLength]
var mul=1
while(byteLength>0&&(mul*=0x100)){val+=this[offset+ --byteLength]*mul}
return val}
Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,1,this.length)
return this[offset]}
Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,2,this.length)
return this[offset]|(this[offset+1]<<8)}
Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,2,this.length)
return(this[offset]<<8)|this[offset+1]}
Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return((this[offset])|(this[offset+1]<<8)|(this[offset+2]<<16))+(this[offset+3]*0x1000000)}
Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset]*0x1000000)+((this[offset+1]<<16)|(this[offset+2]<<8)|this[offset+3])}
Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var val=this[offset]
var mul=1
var i=0
while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul}
mul*=0x80
if(val>=mul)val-=Math.pow(2,8*byteLength)
return val}
Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var i=byteLength
var mul=1
var val=this[offset+ --i]
while(i>0&&(mul*=0x100)){val+=this[offset+ --i]*mul}
mul*=0x80
if(val>=mul)val-=Math.pow(2,8*byteLength)
return val}
Buffer.prototype.readInt8=function readInt8(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,1,this.length)
if(!(this[offset]&0x80))return(this[offset])
return((0xff-this[offset]+1)*-1)}
Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,2,this.length)
var val=this[offset]|(this[offset+1]<<8)
return(val&0x8000)?val|0xFFFF0000:val}
Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,2,this.length)
var val=this[offset+1]|(this[offset]<<8)
return(val&0x8000)?val|0xFFFF0000:val}
Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset])|(this[offset+1]<<8)|(this[offset+2]<<16)|(this[offset+3]<<24)}
Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset]<<24)|(this[offset+1]<<16)|(this[offset+2]<<8)|(this[offset+3])}
Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return ieee754.read(this,offset,!0,23,4)}
Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return ieee754.read(this,offset,!1,23,4)}
Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,8,this.length)
return ieee754.read(this,offset,!0,52,8)}
Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,8,this.length)
return ieee754.read(this,offset,!1,52,8)}
function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('"buffer" argument must be a Buffer instance')
if(value>max||value<min)throw new RangeError('"value" argument is out of bounds')
if(offset+ext>buf.length)throw new RangeError('Index out of range')}
Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value
offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1
checkInt(this,value,offset,byteLength,maxBytes,0)}
var mul=1
var i=0
this[offset]=value&0xFF
while(++i<byteLength&&(mul*=0x100)){this[offset+i]=(value/mul)&0xFF}
return offset+byteLength}
Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value
offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1
checkInt(this,value,offset,byteLength,maxBytes,0)}
var i=byteLength-1
var mul=1
this[offset+i]=value&0xFF
while(--i>=0&&(mul*=0x100)){this[offset+i]=(value/mul)&0xFF}
return offset+byteLength}
Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,1,0xff,0)
this[offset]=(value&0xff)
return offset+1}
Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,2,0xffff,0)
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
return offset+2}
Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,2,0xffff,0)
this[offset]=(value>>>8)
this[offset+1]=(value&0xff)
return offset+2}
Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0)
this[offset+3]=(value>>>24)
this[offset+2]=(value>>>16)
this[offset+1]=(value>>>8)
this[offset]=(value&0xff)
return offset+4}
Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0)
this[offset]=(value>>>24)
this[offset+1]=(value>>>16)
this[offset+2]=(value>>>8)
this[offset+3]=(value&0xff)
return offset+4}
Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value
offset=offset>>>0
if(!noAssert){var limit=Math.pow(2,(8*byteLength)-1)
checkInt(this,value,offset,byteLength,limit-1,-limit)}
var i=0
var mul=1
var sub=0
this[offset]=value&0xFF
while(++i<byteLength&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i-1]!==0){sub=1}
this[offset+i]=((value/mul)>>0)-sub&0xFF}
return offset+byteLength}
Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value
offset=offset>>>0
if(!noAssert){var limit=Math.pow(2,(8*byteLength)-1)
checkInt(this,value,offset,byteLength,limit-1,-limit)}
var i=byteLength-1
var mul=1
var sub=0
this[offset+i]=value&0xFF
while(--i>=0&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i+1]!==0){sub=1}
this[offset+i]=((value/mul)>>0)-sub&0xFF}
return offset+byteLength}
Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80)
if(value<0)value=0xff+value+1
this[offset]=(value&0xff)
return offset+1}
Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000)
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
return offset+2}
Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000)
this[offset]=(value>>>8)
this[offset+1]=(value&0xff)
return offset+2}
Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000)
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
this[offset+2]=(value>>>16)
this[offset+3]=(value>>>24)
return offset+4}
Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000)
if(value<0)value=0xffffffff+value+1
this[offset]=(value>>>24)
this[offset+1]=(value>>>16)
this[offset+2]=(value>>>8)
this[offset+3]=(value&0xff)
return offset+4}
function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length)throw new RangeError('Index out of range')
if(offset<0)throw new RangeError('Index out of range')}
function writeFloat(buf,value,offset,littleEndian,noAssert){value=+value
offset=offset>>>0
if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38)}
ieee754.write(buf,value,offset,littleEndian,23,4)
return offset+4}
Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,!0,noAssert)}
Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,!1,noAssert)}
function writeDouble(buf,value,offset,littleEndian,noAssert){value=+value
offset=offset>>>0
if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308)}
ieee754.write(buf,value,offset,littleEndian,52,8)
return offset+8}
Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,!0,noAssert)}
Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,!1,noAssert)}
Buffer.prototype.copy=function copy(target,targetStart,start,end){if(!Buffer.isBuffer(target))throw new TypeError('argument should be a Buffer')
if(!start)start=0
if(!end&&end!==0)end=this.length
if(targetStart>=target.length)targetStart=target.length
if(!targetStart)targetStart=0
if(end>0&&end<start)end=start
if(end===start)return 0
if(target.length===0||this.length===0)return 0
if(targetStart<0){throw new RangeError('targetStart out of bounds')}
if(start<0||start>=this.length)throw new RangeError('Index out of range')
if(end<0)throw new RangeError('sourceEnd out of bounds')
if(end>this.length)end=this.length
if(target.length-targetStart<end-start){end=target.length-targetStart+start}
var len=end-start
if(this===target&&typeof Uint8Array.prototype.copyWithin==='function'){this.copyWithin(targetStart,start,end)}else if(this===target&&start<targetStart&&targetStart<end){for(var i=len-1;i>=0;--i){target[i+targetStart]=this[i+start]}}else{Uint8Array.prototype.set.call(target,this.subarray(start,end),targetStart)}
return len}
Buffer.prototype.fill=function fill(val,start,end,encoding){if(typeof val==='string'){if(typeof start==='string'){encoding=start
start=0
end=this.length}else if(typeof end==='string'){encoding=end
end=this.length}
if(encoding!==undefined&&typeof encoding!=='string'){throw new TypeError('encoding must be a string')}
if(typeof encoding==='string'&&!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding)}
if(val.length===1){var code=val.charCodeAt(0)
if((encoding==='utf8'&&code<128)||encoding==='latin1'){val=code}}}else if(typeof val==='number'){val=val&255}
if(start<0||this.length<start||this.length<end){throw new RangeError('Out of range index')}
if(end<=start){return this}
start=start>>>0
end=end===undefined?this.length:end>>>0
if(!val)val=0
var i
if(typeof val==='number'){for(i=start;i<end;++i){this[i]=val}}else{var bytes=Buffer.isBuffer(val)?val:Buffer.from(val,encoding)
var len=bytes.length
if(len===0){throw new TypeError('The value "'+val+'" is invalid for argument "value"')}
for(i=0;i<end-start;++i){this[i+start]=bytes[i%len]}}
return this}
var INVALID_BASE64_RE=/[^+/0-9A-Za-z-_]/g
function base64clean(str){str=str.split('=')[0]
str=str.trim().replace(INVALID_BASE64_RE,'')
if(str.length<2)return''
while(str.length%4!==0){str=str+'='}
return str}
function toHex(n){if(n<16)return'0'+n.toString(16)
return n.toString(16)}
function utf8ToBytes(string,units){units=units||Infinity
var codePoint
var length=string.length
var leadSurrogate=null
var bytes=[]
for(var i=0;i<length;++i){codePoint=string.charCodeAt(i)
if(codePoint>0xD7FF&&codePoint<0xE000){if(!leadSurrogate){if(codePoint>0xDBFF){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
continue}else if(i+1===length){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
continue}
leadSurrogate=codePoint
continue}
if(codePoint<0xDC00){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
leadSurrogate=codePoint
continue}
codePoint=(leadSurrogate-0xD800<<10|codePoint-0xDC00)+0x10000}else if(leadSurrogate){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)}
leadSurrogate=null
if(codePoint<0x80){if((units-=1)<0)break
bytes.push(codePoint)}else if(codePoint<0x800){if((units-=2)<0)break
bytes.push(codePoint>>0x6|0xC0,codePoint&0x3F|0x80)}else if(codePoint<0x10000){if((units-=3)<0)break
bytes.push(codePoint>>0xC|0xE0,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80)}else if(codePoint<0x110000){if((units-=4)<0)break
bytes.push(codePoint>>0x12|0xF0,codePoint>>0xC&0x3F|0x80,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80)}else{throw new Error('Invalid code point')}}
return bytes}
function asciiToBytes(str){var byteArray=[]
for(var i=0;i<str.length;++i){byteArray.push(str.charCodeAt(i)&0xFF)}
return byteArray}
function utf16leToBytes(str,units){var c,hi,lo
var byteArray=[]
for(var i=0;i<str.length;++i){if((units-=2)<0)break
c=str.charCodeAt(i)
hi=c>>8
lo=c%256
byteArray.push(lo)
byteArray.push(hi)}
return byteArray}
function base64ToBytes(str){return base64.toByteArray(base64clean(str))}
function blitBuffer(src,dst,offset,length){for(var i=0;i<length;++i){if((i+offset>=dst.length)||(i>=src.length))break
dst[i+offset]=src[i]}
return i}
function isInstance(obj,type){return obj instanceof type||(obj!=null&&obj.constructor!=null&&obj.constructor.name!=null&&obj.constructor.name===type.name)}
function numberIsNaN(obj){return obj!==obj}},{"base64-js":83,"ieee754":88}],86:[function(require,module,exports){(function(Buffer){function isArray(arg){if(Array.isArray){return Array.isArray(arg)}
return objectToString(arg)==='[object Array]'}
exports.isArray=isArray;function isBoolean(arg){return typeof arg==='boolean'}
exports.isBoolean=isBoolean;function isNull(arg){return arg===null}
exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null}
exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==='number'}
exports.isNumber=isNumber;function isString(arg){return typeof arg==='string'}
exports.isString=isString;function isSymbol(arg){return typeof arg==='symbol'}
exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0}
exports.isUndefined=isUndefined;function isRegExp(re){return objectToString(re)==='[object RegExp]'}
exports.isRegExp=isRegExp;function isObject(arg){return typeof arg==='object'&&arg!==null}
exports.isObject=isObject;function isDate(d){return objectToString(d)==='[object Date]'}
exports.isDate=isDate;function isError(e){return(objectToString(e)==='[object Error]'||e instanceof Error)}
exports.isError=isError;function isFunction(arg){return typeof arg==='function'}
exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==='boolean'||typeof arg==='number'||typeof arg==='string'||typeof arg==='symbol'||typeof arg==='undefined'}
exports.isPrimitive=isPrimitive;exports.isBuffer=Buffer.isBuffer;function objectToString(o){return Object.prototype.toString.call(o)}}).call(this,{"isBuffer":require("../../is-buffer/index.js")})},{"../../is-buffer/index.js":90}],87:[function(require,module,exports){var objectCreate=Object.create||objectCreatePolyfill
var objectKeys=Object.keys||objectKeysPolyfill
var bind=Function.prototype.bind||functionBindPolyfill
function EventEmitter(){if(!this._events||!Object.prototype.hasOwnProperty.call(this,'_events')){this._events=objectCreate(null);this._eventsCount=0}
this._maxListeners=this._maxListeners||undefined}
module.exports=EventEmitter;EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;var defaultMaxListeners=10;var hasDefineProperty;try{var o={};if(Object.defineProperty)Object.defineProperty(o,'x',{value:0});hasDefineProperty=o.x===0}catch(err){hasDefineProperty=!1}
if(hasDefineProperty){Object.defineProperty(EventEmitter,'defaultMaxListeners',{enumerable:!0,get:function(){return defaultMaxListeners},set:function(arg){if(typeof arg!=='number'||arg<0||arg!==arg)
throw new TypeError('"defaultMaxListeners" must be a positive number');defaultMaxListeners=arg}})}else{EventEmitter.defaultMaxListeners=defaultMaxListeners}
EventEmitter.prototype.setMaxListeners=function setMaxListeners(n){if(typeof n!=='number'||n<0||isNaN(n))
throw new TypeError('"n" argument must be a positive number');this._maxListeners=n;return this};function $getMaxListeners(that){if(that._maxListeners===undefined)
return EventEmitter.defaultMaxListeners;return that._maxListeners}
EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return $getMaxListeners(this)};function emitNone(handler,isFn,self){if(isFn)
handler.call(self);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].call(self);}}
function emitOne(handler,isFn,self,arg1){if(isFn)
handler.call(self,arg1);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].call(self,arg1);}}
function emitTwo(handler,isFn,self,arg1,arg2){if(isFn)
handler.call(self,arg1,arg2);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].call(self,arg1,arg2);}}
function emitThree(handler,isFn,self,arg1,arg2,arg3){if(isFn)
handler.call(self,arg1,arg2,arg3);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].call(self,arg1,arg2,arg3);}}
function emitMany(handler,isFn,self,args){if(isFn)
handler.apply(self,args);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].apply(self,args);}}
EventEmitter.prototype.emit=function emit(type){var er,handler,len,args,i,events;var doError=(type==='error');events=this._events;if(events)
doError=(doError&&events.error==null);else if(!doError)
return!1;if(doError){if(arguments.length>1)
er=arguments[1];if(er instanceof Error){throw er}else{var err=new Error('Unhandled "error" event. ('+er+')');err.context=er;throw err}
return!1}
handler=events[type];if(!handler)
return!1;var isFn=typeof handler==='function';len=arguments.length;switch(len){case 1:emitNone(handler,isFn,this);break;case 2:emitOne(handler,isFn,this,arguments[1]);break;case 3:emitTwo(handler,isFn,this,arguments[1],arguments[2]);break;case 4:emitThree(handler,isFn,this,arguments[1],arguments[2],arguments[3]);break;default:args=new Array(len-1);for(i=1;i<len;i++)
args[i-1]=arguments[i];emitMany(handler,isFn,this,args)}
return!0};function _addListener(target,type,listener,prepend){var m;var events;var existing;if(typeof listener!=='function')
throw new TypeError('"listener" argument must be a function');events=target._events;if(!events){events=target._events=objectCreate(null);target._eventsCount=0}else{if(events.newListener){target.emit('newListener',type,listener.listener?listener.listener:listener);events=target._events}
existing=events[type]}
if(!existing){existing=events[type]=listener;++target._eventsCount}else{if(typeof existing==='function'){existing=events[type]=prepend?[listener,existing]:[existing,listener]}else{if(prepend){existing.unshift(listener)}else{existing.push(listener)}}
if(!existing.warned){m=$getMaxListeners(target);if(m&&m>0&&existing.length>m){existing.warned=!0;var w=new Error('Possible EventEmitter memory leak detected. '+existing.length+' "'+String(type)+'" listeners '+'added. Use emitter.setMaxListeners() to '+'increase limit.');w.name='MaxListenersExceededWarning';w.emitter=target;w.type=type;w.count=existing.length;if(typeof console==='object'&&console.warn){console.warn('%s: %s',w.name,w.message)}}}}
return target}
EventEmitter.prototype.addListener=function addListener(type,listener){return _addListener(this,type,listener,!1)};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.prependListener=function prependListener(type,listener){return _addListener(this,type,listener,!0)};function onceWrapper(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=!0;switch(arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:var args=new Array(arguments.length);for(var i=0;i<args.length;++i)
args[i]=arguments[i];this.listener.apply(this.target,args)}}}
function _onceWrap(target,type,listener){var state={fired:!1,wrapFn:undefined,target:target,type:type,listener:listener};var wrapped=bind.call(onceWrapper,state);wrapped.listener=listener;state.wrapFn=wrapped;return wrapped}
EventEmitter.prototype.once=function once(type,listener){if(typeof listener!=='function')
throw new TypeError('"listener" argument must be a function');this.on(type,_onceWrap(this,type,listener));return this};EventEmitter.prototype.prependOnceListener=function prependOnceListener(type,listener){if(typeof listener!=='function')
throw new TypeError('"listener" argument must be a function');this.prependListener(type,_onceWrap(this,type,listener));return this};EventEmitter.prototype.removeListener=function removeListener(type,listener){var list,events,position,i,originalListener;if(typeof listener!=='function')
throw new TypeError('"listener" argument must be a function');events=this._events;if(!events)
return this;list=events[type];if(!list)
return this;if(list===listener||list.listener===listener){if(--this._eventsCount===0)
this._events=objectCreate(null);else{delete events[type];if(events.removeListener)
this.emit('removeListener',type,list.listener||listener)}}else if(typeof list!=='function'){position=-1;for(i=list.length-1;i>=0;i--){if(list[i]===listener||list[i].listener===listener){originalListener=list[i].listener;position=i;break}}
if(position<0)
return this;if(position===0)
list.shift();else spliceOne(list,position);if(list.length===1)
events[type]=list[0];if(events.removeListener)
this.emit('removeListener',type,originalListener||listener)}
return this};EventEmitter.prototype.removeAllListeners=function removeAllListeners(type){var listeners,events,i;events=this._events;if(!events)
return this;if(!events.removeListener){if(arguments.length===0){this._events=objectCreate(null);this._eventsCount=0}else if(events[type]){if(--this._eventsCount===0)
this._events=objectCreate(null);else delete events[type]}
return this}
if(arguments.length===0){var keys=objectKeys(events);var key;for(i=0;i<keys.length;++i){key=keys[i];if(key==='removeListener')continue;this.removeAllListeners(key)}
this.removeAllListeners('removeListener');this._events=objectCreate(null);this._eventsCount=0;return this}
listeners=events[type];if(typeof listeners==='function'){this.removeListener(type,listeners)}else if(listeners){for(i=listeners.length-1;i>=0;i--){this.removeListener(type,listeners[i])}}
return this};function _listeners(target,type,unwrap){var events=target._events;if(!events)
return[];var evlistener=events[type];if(!evlistener)
return[];if(typeof evlistener==='function')
return unwrap?[evlistener.listener||evlistener]:[evlistener];return unwrap?unwrapListeners(evlistener):arrayClone(evlistener,evlistener.length)}
EventEmitter.prototype.listeners=function listeners(type){return _listeners(this,type,!0)};EventEmitter.prototype.rawListeners=function rawListeners(type){return _listeners(this,type,!1)};EventEmitter.listenerCount=function(emitter,type){if(typeof emitter.listenerCount==='function'){return emitter.listenerCount(type)}else{return listenerCount.call(emitter,type)}};EventEmitter.prototype.listenerCount=listenerCount;function listenerCount(type){var events=this._events;if(events){var evlistener=events[type];if(typeof evlistener==='function'){return 1}else if(evlistener){return evlistener.length}}
return 0}
EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1)
list[i]=list[k];list.pop()}
function arrayClone(arr,n){var copy=new Array(n);for(var i=0;i<n;++i)
copy[i]=arr[i];return copy}
function unwrapListeners(arr){var ret=new Array(arr.length);for(var i=0;i<ret.length;++i){ret[i]=arr[i].listener||arr[i]}
return ret}
function objectCreatePolyfill(proto){var F=function(){};F.prototype=proto;return new F}
function objectKeysPolyfill(obj){var keys=[];for(var k in obj)if(Object.prototype.hasOwnProperty.call(obj,k)){keys.push(k)}
return k}
function functionBindPolyfill(context){var fn=this;return function(){return fn.apply(context,arguments)}}},{}],88:[function(require,module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m
var eLen=(nBytes*8)-mLen-1
var eMax=(1<<eLen)-1
var eBias=eMax>>1
var nBits=-7
var i=isLE?(nBytes-1):0
var d=isLE?-1:1
var s=buffer[offset+i]
i+=d
e=s&((1<<(-nBits))-1)
s>>=(-nBits)
nBits+=eLen
for(;nBits>0;e=(e*256)+buffer[offset+i],i+=d,nBits-=8){}
m=e&((1<<(-nBits))-1)
e>>=(-nBits)
nBits+=mLen
for(;nBits>0;m=(m*256)+buffer[offset+i],i+=d,nBits-=8){}
if(e===0){e=1-eBias}else if(e===eMax){return m?NaN:((s?-1:1)*Infinity)}else{m=m+Math.pow(2,mLen)
e=e-eBias}
return(s?-1:1)*m*Math.pow(2,e-mLen)}
exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c
var eLen=(nBytes*8)-mLen-1
var eMax=(1<<eLen)-1
var eBias=eMax>>1
var rt=(mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0)
var i=isLE?0:(nBytes-1)
var d=isLE?1:-1
var s=value<0||(value===0&&1/value<0)?1:0
value=Math.abs(value)
if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0
e=eMax}else{e=Math.floor(Math.log(value)/Math.LN2)
if(value*(c=Math.pow(2,-e))<1){e--
c*=2}
if(e+eBias>=1){value+=rt/c}else{value+=rt*Math.pow(2,1-eBias)}
if(value*c>=2){e++
c/=2}
if(e+eBias>=eMax){m=0
e=eMax}else if(e+eBias>=1){m=((value*c)-1)*Math.pow(2,mLen)
e=e+eBias}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen)
e=0}}
for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}
e=(e<<mLen)|m
eLen+=mLen
for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}
buffer[offset+i-d]|=s*128}},{}],89:[function(require,module,exports){if(typeof Object.create==='function'){module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor
ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})}}else{module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor
var TempCtor=function(){}
TempCtor.prototype=superCtor.prototype
ctor.prototype=new TempCtor()
ctor.prototype.constructor=ctor}}},{}],90:[function(require,module,exports){module.exports=function(obj){return obj!=null&&(isBuffer(obj)||isSlowBuffer(obj)||!!obj._isBuffer)}
function isBuffer(obj){return!!obj.constructor&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj)}
function isSlowBuffer(obj){return typeof obj.readFloatLE==='function'&&typeof obj.slice==='function'&&isBuffer(obj.slice(0,0))}},{}],91:[function(require,module,exports){var toString={}.toString;module.exports=Array.isArray||function(arr){return toString.call(arr)=='[object Array]'}},{}],92:[function(require,module,exports){(function(process){'use strict';if(!process.version||process.version.indexOf('v0.')===0||process.version.indexOf('v1.')===0&&process.version.indexOf('v1.8.')!==0){module.exports={nextTick:nextTick}}else{module.exports=process}
function nextTick(fn,arg1,arg2,arg3){if(typeof fn!=='function'){throw new TypeError('"callback" argument must be a function')}
var len=arguments.length;var args,i;switch(len){case 0:case 1:return process.nextTick(fn);case 2:return process.nextTick(function afterTickOne(){fn.call(null,arg1)});case 3:return process.nextTick(function afterTickTwo(){fn.call(null,arg1,arg2)});case 4:return process.nextTick(function afterTickThree(){fn.call(null,arg1,arg2,arg3)});default:args=new Array(len-1);i=0;while(i<args.length){args[i++]=arguments[i]}
return process.nextTick(function afterTick(){fn.apply(null,args)})}}}).call(this,require('_process'))},{"_process":93}],93:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined')}
function defaultClearTimeout(){throw new Error('clearTimeout has not been defined')}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}
try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}}())
function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}
try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}
function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}
try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}
var queue=[];var draining=!1;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}
draining=!1;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}
if(queue.length){drainQueue()}}
function drainQueue(){if(draining){return}
var timeout=runTimeout(cleanUpNextTick);draining=!0;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}
queueIndex=-1;len=queue.length}
currentQueue=null;draining=!1;runClearTimeout(timeout)}
process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}
queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}
Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title='browser';process.browser=!0;process.env={};process.argv=[];process.version='';process.versions={};function noop(){}
process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]}
process.binding=function(name){throw new Error('process.binding is not supported')};process.cwd=function(){return'/'};process.chdir=function(dir){throw new Error('process.chdir is not supported')};process.umask=function(){return 0}},{}],94:[function(require,module,exports){module.exports=require('./lib/_stream_duplex.js')},{"./lib/_stream_duplex.js":95}],95:[function(require,module,exports){'use strict';var pna=require('process-nextick-args');var objectKeys=Object.keys||function(obj){var keys=[];for(var key in obj){keys.push(key)}return keys};module.exports=Duplex;var util=require('core-util-is');util.inherits=require('inherits');var Readable=require('./_stream_readable');var Writable=require('./_stream_writable');util.inherits(Duplex,Readable);{var keys=objectKeys(Writable.prototype);for(var v=0;v<keys.length;v++){var method=keys[v];if(!Duplex.prototype[method])Duplex.prototype[method]=Writable.prototype[method]}}
function Duplex(options){if(!(this instanceof Duplex))return new Duplex(options);Readable.call(this,options);Writable.call(this,options);if(options&&options.readable===!1)this.readable=!1;if(options&&options.writable===!1)this.writable=!1;this.allowHalfOpen=!0;if(options&&options.allowHalfOpen===!1)this.allowHalfOpen=!1;this.once('end',onend)}
Object.defineProperty(Duplex.prototype,'writableHighWaterMark',{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function onend(){if(this.allowHalfOpen||this._writableState.ended)return;pna.nextTick(onEndNT,this)}
function onEndNT(self){self.end()}
Object.defineProperty(Duplex.prototype,'destroyed',{get:function(){if(this._readableState===undefined||this._writableState===undefined){return!1}
return this._readableState.destroyed&&this._writableState.destroyed},set:function(value){if(this._readableState===undefined||this._writableState===undefined){return}
this._readableState.destroyed=value;this._writableState.destroyed=value}});Duplex.prototype._destroy=function(err,cb){this.push(null);this.end();pna.nextTick(cb,err)}},{"./_stream_readable":97,"./_stream_writable":99,"core-util-is":86,"inherits":89,"process-nextick-args":92}],96:[function(require,module,exports){'use strict';module.exports=PassThrough;var Transform=require('./_stream_transform');var util=require('core-util-is');util.inherits=require('inherits');util.inherits(PassThrough,Transform);function PassThrough(options){if(!(this instanceof PassThrough))return new PassThrough(options);Transform.call(this,options)}
PassThrough.prototype._transform=function(chunk,encoding,cb){cb(null,chunk)}},{"./_stream_transform":98,"core-util-is":86,"inherits":89}],97:[function(require,module,exports){(function(process,global){'use strict';var pna=require('process-nextick-args');module.exports=Readable;var isArray=require('isarray');var Duplex;Readable.ReadableState=ReadableState;var EE=require('events').EventEmitter;var EElistenerCount=function(emitter,type){return emitter.listeners(type).length};var Stream=require('./internal/streams/stream');var Buffer=require('safe-buffer').Buffer;var OurUint8Array=global.Uint8Array||function(){};function _uint8ArrayToBuffer(chunk){return Buffer.from(chunk)}
function _isUint8Array(obj){return Buffer.isBuffer(obj)||obj instanceof OurUint8Array}
var util=require('core-util-is');util.inherits=require('inherits');var debugUtil=require('util');var debug=void 0;if(debugUtil&&debugUtil.debuglog){debug=debugUtil.debuglog('stream')}else{debug=function(){}}
var BufferList=require('./internal/streams/BufferList');var destroyImpl=require('./internal/streams/destroy');var StringDecoder;util.inherits(Readable,Stream);var kProxyEvents=['error','close','destroy','pause','resume'];function prependListener(emitter,event,fn){if(typeof emitter.prependListener==='function')return emitter.prependListener(event,fn);if(!emitter._events||!emitter._events[event])emitter.on(event,fn);else if(isArray(emitter._events[event]))emitter._events[event].unshift(fn);else emitter._events[event]=[fn,emitter._events[event]]}
function ReadableState(options,stream){Duplex=Duplex||require('./_stream_duplex');options=options||{};var isDuplex=stream instanceof Duplex;this.objectMode=!!options.objectMode;if(isDuplex)this.objectMode=this.objectMode||!!options.readableObjectMode;var hwm=options.highWaterMark;var readableHwm=options.readableHighWaterMark;var defaultHwm=this.objectMode?16:16*1024;if(hwm||hwm===0)this.highWaterMark=hwm;else if(isDuplex&&(readableHwm||readableHwm===0))this.highWaterMark=readableHwm;else this.highWaterMark=defaultHwm;this.highWaterMark=Math.floor(this.highWaterMark);this.buffer=new BufferList();this.length=0;this.pipes=null;this.pipesCount=0;this.flowing=null;this.ended=!1;this.endEmitted=!1;this.reading=!1;this.sync=!0;this.needReadable=!1;this.emittedReadable=!1;this.readableListening=!1;this.resumeScheduled=!1;this.destroyed=!1;this.defaultEncoding=options.defaultEncoding||'utf8';this.awaitDrain=0;this.readingMore=!1;this.decoder=null;this.encoding=null;if(options.encoding){if(!StringDecoder)StringDecoder=require('string_decoder/').StringDecoder;this.decoder=new StringDecoder(options.encoding);this.encoding=options.encoding}}
function Readable(options){Duplex=Duplex||require('./_stream_duplex');if(!(this instanceof Readable))return new Readable(options);this._readableState=new ReadableState(options,this);this.readable=!0;if(options){if(typeof options.read==='function')this._read=options.read;if(typeof options.destroy==='function')this._destroy=options.destroy}
Stream.call(this)}
Object.defineProperty(Readable.prototype,'destroyed',{get:function(){if(this._readableState===undefined){return!1}
return this._readableState.destroyed},set:function(value){if(!this._readableState){return}
this._readableState.destroyed=value}});Readable.prototype.destroy=destroyImpl.destroy;Readable.prototype._undestroy=destroyImpl.undestroy;Readable.prototype._destroy=function(err,cb){this.push(null);cb(err)};Readable.prototype.push=function(chunk,encoding){var state=this._readableState;var skipChunkCheck;if(!state.objectMode){if(typeof chunk==='string'){encoding=encoding||state.defaultEncoding;if(encoding!==state.encoding){chunk=Buffer.from(chunk,encoding);encoding=''}
skipChunkCheck=!0}}else{skipChunkCheck=!0}
return readableAddChunk(this,chunk,encoding,!1,skipChunkCheck)};Readable.prototype.unshift=function(chunk){return readableAddChunk(this,chunk,null,!0,!1)};function readableAddChunk(stream,chunk,encoding,addToFront,skipChunkCheck){var state=stream._readableState;if(chunk===null){state.reading=!1;onEofChunk(stream,state)}else{var er;if(!skipChunkCheck)er=chunkInvalid(state,chunk);if(er){stream.emit('error',er)}else if(state.objectMode||chunk&&chunk.length>0){if(typeof chunk!=='string'&&!state.objectMode&&Object.getPrototypeOf(chunk)!==Buffer.prototype){chunk=_uint8ArrayToBuffer(chunk)}
if(addToFront){if(state.endEmitted)stream.emit('error',new Error('stream.unshift() after end event'));else addChunk(stream,state,chunk,!0)}else if(state.ended){stream.emit('error',new Error('stream.push() after EOF'))}else{state.reading=!1;if(state.decoder&&!encoding){chunk=state.decoder.write(chunk);if(state.objectMode||chunk.length!==0)addChunk(stream,state,chunk,!1);else maybeReadMore(stream,state)}else{addChunk(stream,state,chunk,!1)}}}else if(!addToFront){state.reading=!1}}
return needMoreData(state)}
function addChunk(stream,state,chunk,addToFront){if(state.flowing&&state.length===0&&!state.sync){stream.emit('data',chunk);stream.read(0)}else{state.length+=state.objectMode?1:chunk.length;if(addToFront)state.buffer.unshift(chunk);else state.buffer.push(chunk);if(state.needReadable)emitReadable(stream)}
maybeReadMore(stream,state)}
function chunkInvalid(state,chunk){var er;if(!_isUint8Array(chunk)&&typeof chunk!=='string'&&chunk!==undefined&&!state.objectMode){er=new TypeError('Invalid non-string/buffer chunk')}
return er}
function needMoreData(state){return!state.ended&&(state.needReadable||state.length<state.highWaterMark||state.length===0)}
Readable.prototype.isPaused=function(){return this._readableState.flowing===!1};Readable.prototype.setEncoding=function(enc){if(!StringDecoder)StringDecoder=require('string_decoder/').StringDecoder;this._readableState.decoder=new StringDecoder(enc);this._readableState.encoding=enc;return this};var MAX_HWM=0x800000;function computeNewHighWaterMark(n){if(n>=MAX_HWM){n=MAX_HWM}else{n--;n|=n>>>1;n|=n>>>2;n|=n>>>4;n|=n>>>8;n|=n>>>16;n++}
return n}
function howMuchToRead(n,state){if(n<=0||state.length===0&&state.ended)return 0;if(state.objectMode)return 1;if(n!==n){if(state.flowing&&state.length)return state.buffer.head.data.length;else return state.length}
if(n>state.highWaterMark)state.highWaterMark=computeNewHighWaterMark(n);if(n<=state.length)return n;if(!state.ended){state.needReadable=!0;return 0}
return state.length}
Readable.prototype.read=function(n){debug('read',n);n=parseInt(n,10);var state=this._readableState;var nOrig=n;if(n!==0)state.emittedReadable=!1;if(n===0&&state.needReadable&&(state.length>=state.highWaterMark||state.ended)){debug('read: emitReadable',state.length,state.ended);if(state.length===0&&state.ended)endReadable(this);else emitReadable(this);return null}
n=howMuchToRead(n,state);if(n===0&&state.ended){if(state.length===0)endReadable(this);return null}
var doRead=state.needReadable;debug('need readable',doRead);if(state.length===0||state.length-n<state.highWaterMark){doRead=!0;debug('length less than watermark',doRead)}
if(state.ended||state.reading){doRead=!1;debug('reading or ended',doRead)}else if(doRead){debug('do read');state.reading=!0;state.sync=!0;if(state.length===0)state.needReadable=!0;this._read(state.highWaterMark);state.sync=!1;if(!state.reading)n=howMuchToRead(nOrig,state)}
var ret;if(n>0)ret=fromList(n,state);else ret=null;if(ret===null){state.needReadable=!0;n=0}else{state.length-=n}
if(state.length===0){if(!state.ended)state.needReadable=!0;if(nOrig!==n&&state.ended)endReadable(this)}
if(ret!==null)this.emit('data',ret);return ret};function onEofChunk(stream,state){if(state.ended)return;if(state.decoder){var chunk=state.decoder.end();if(chunk&&chunk.length){state.buffer.push(chunk);state.length+=state.objectMode?1:chunk.length}}
state.ended=!0;emitReadable(stream)}
function emitReadable(stream){var state=stream._readableState;state.needReadable=!1;if(!state.emittedReadable){debug('emitReadable',state.flowing);state.emittedReadable=!0;if(state.sync)pna.nextTick(emitReadable_,stream);else emitReadable_(stream)}}
function emitReadable_(stream){debug('emit readable');stream.emit('readable');flow(stream)}
function maybeReadMore(stream,state){if(!state.readingMore){state.readingMore=!0;pna.nextTick(maybeReadMore_,stream,state)}}
function maybeReadMore_(stream,state){var len=state.length;while(!state.reading&&!state.flowing&&!state.ended&&state.length<state.highWaterMark){debug('maybeReadMore read 0');stream.read(0);if(len===state.length)
break;else len=state.length}
state.readingMore=!1}
Readable.prototype._read=function(n){this.emit('error',new Error('_read() is not implemented'))};Readable.prototype.pipe=function(dest,pipeOpts){var src=this;var state=this._readableState;switch(state.pipesCount){case 0:state.pipes=dest;break;case 1:state.pipes=[state.pipes,dest];break;default:state.pipes.push(dest);break}
state.pipesCount+=1;debug('pipe count=%d opts=%j',state.pipesCount,pipeOpts);var doEnd=(!pipeOpts||pipeOpts.end!==!1)&&dest!==process.stdout&&dest!==process.stderr;var endFn=doEnd?onend:unpipe;if(state.endEmitted)pna.nextTick(endFn);else src.once('end',endFn);dest.on('unpipe',onunpipe);function onunpipe(readable,unpipeInfo){debug('onunpipe');if(readable===src){if(unpipeInfo&&unpipeInfo.hasUnpiped===!1){unpipeInfo.hasUnpiped=!0;cleanup()}}}
function onend(){debug('onend');dest.end()}
var ondrain=pipeOnDrain(src);dest.on('drain',ondrain);var cleanedUp=!1;function cleanup(){debug('cleanup');dest.removeListener('close',onclose);dest.removeListener('finish',onfinish);dest.removeListener('drain',ondrain);dest.removeListener('error',onerror);dest.removeListener('unpipe',onunpipe);src.removeListener('end',onend);src.removeListener('end',unpipe);src.removeListener('data',ondata);cleanedUp=!0;if(state.awaitDrain&&(!dest._writableState||dest._writableState.needDrain))ondrain()}
var increasedAwaitDrain=!1;src.on('data',ondata);function ondata(chunk){debug('ondata');increasedAwaitDrain=!1;var ret=dest.write(chunk);if(!1===ret&&!increasedAwaitDrain){if((state.pipesCount===1&&state.pipes===dest||state.pipesCount>1&&indexOf(state.pipes,dest)!==-1)&&!cleanedUp){debug('false write response, pause',src._readableState.awaitDrain);src._readableState.awaitDrain++;increasedAwaitDrain=!0}
src.pause()}}
function onerror(er){debug('onerror',er);unpipe();dest.removeListener('error',onerror);if(EElistenerCount(dest,'error')===0)dest.emit('error',er)}
prependListener(dest,'error',onerror);function onclose(){dest.removeListener('finish',onfinish);unpipe()}
dest.once('close',onclose);function onfinish(){debug('onfinish');dest.removeListener('close',onclose);unpipe()}
dest.once('finish',onfinish);function unpipe(){debug('unpipe');src.unpipe(dest)}
dest.emit('pipe',src);if(!state.flowing){debug('pipe resume');src.resume()}
return dest};function pipeOnDrain(src){return function(){var state=src._readableState;debug('pipeOnDrain',state.awaitDrain);if(state.awaitDrain)state.awaitDrain--;if(state.awaitDrain===0&&EElistenerCount(src,'data')){state.flowing=!0;flow(src)}}}
Readable.prototype.unpipe=function(dest){var state=this._readableState;var unpipeInfo={hasUnpiped:!1};if(state.pipesCount===0)return this;if(state.pipesCount===1){if(dest&&dest!==state.pipes)return this;if(!dest)dest=state.pipes;state.pipes=null;state.pipesCount=0;state.flowing=!1;if(dest)dest.emit('unpipe',this,unpipeInfo);return this}
if(!dest){var dests=state.pipes;var len=state.pipesCount;state.pipes=null;state.pipesCount=0;state.flowing=!1;for(var i=0;i<len;i++){dests[i].emit('unpipe',this,unpipeInfo)}return this}
var index=indexOf(state.pipes,dest);if(index===-1)return this;state.pipes.splice(index,1);state.pipesCount-=1;if(state.pipesCount===1)state.pipes=state.pipes[0];dest.emit('unpipe',this,unpipeInfo);return this};Readable.prototype.on=function(ev,fn){var res=Stream.prototype.on.call(this,ev,fn);if(ev==='data'){if(this._readableState.flowing!==!1)this.resume()}else if(ev==='readable'){var state=this._readableState;if(!state.endEmitted&&!state.readableListening){state.readableListening=state.needReadable=!0;state.emittedReadable=!1;if(!state.reading){pna.nextTick(nReadingNextTick,this)}else if(state.length){emitReadable(this)}}}
return res};Readable.prototype.addListener=Readable.prototype.on;function nReadingNextTick(self){debug('readable nexttick read 0');self.read(0)}
Readable.prototype.resume=function(){var state=this._readableState;if(!state.flowing){debug('resume');state.flowing=!0;resume(this,state)}
return this};function resume(stream,state){if(!state.resumeScheduled){state.resumeScheduled=!0;pna.nextTick(resume_,stream,state)}}
function resume_(stream,state){if(!state.reading){debug('resume read 0');stream.read(0)}
state.resumeScheduled=!1;state.awaitDrain=0;stream.emit('resume');flow(stream);if(state.flowing&&!state.reading)stream.read(0)}
Readable.prototype.pause=function(){debug('call pause flowing=%j',this._readableState.flowing);if(!1!==this._readableState.flowing){debug('pause');this._readableState.flowing=!1;this.emit('pause')}
return this};function flow(stream){var state=stream._readableState;debug('flow',state.flowing);while(state.flowing&&stream.read()!==null){}}
Readable.prototype.wrap=function(stream){var _this=this;var state=this._readableState;var paused=!1;stream.on('end',function(){debug('wrapped end');if(state.decoder&&!state.ended){var chunk=state.decoder.end();if(chunk&&chunk.length)_this.push(chunk)}
_this.push(null)});stream.on('data',function(chunk){debug('wrapped data');if(state.decoder)chunk=state.decoder.write(chunk);if(state.objectMode&&(chunk===null||chunk===undefined))return;else if(!state.objectMode&&(!chunk||!chunk.length))return;var ret=_this.push(chunk);if(!ret){paused=!0;stream.pause()}});for(var i in stream){if(this[i]===undefined&&typeof stream[i]==='function'){this[i]=function(method){return function(){return stream[method].apply(stream,arguments)}}(i)}}
for(var n=0;n<kProxyEvents.length;n++){stream.on(kProxyEvents[n],this.emit.bind(this,kProxyEvents[n]))}
this._read=function(n){debug('wrapped _read',n);if(paused){paused=!1;stream.resume()}};return this};Object.defineProperty(Readable.prototype,'readableHighWaterMark',{enumerable:!1,get:function(){return this._readableState.highWaterMark}});Readable._fromList=fromList;function fromList(n,state){if(state.length===0)return null;var ret;if(state.objectMode)ret=state.buffer.shift();else if(!n||n>=state.length){if(state.decoder)ret=state.buffer.join('');else if(state.buffer.length===1)ret=state.buffer.head.data;else ret=state.buffer.concat(state.length);state.buffer.clear()}else{ret=fromListPartial(n,state.buffer,state.decoder)}
return ret}
function fromListPartial(n,list,hasStrings){var ret;if(n<list.head.data.length){ret=list.head.data.slice(0,n);list.head.data=list.head.data.slice(n)}else if(n===list.head.data.length){ret=list.shift()}else{ret=hasStrings?copyFromBufferString(n,list):copyFromBuffer(n,list)}
return ret}
function copyFromBufferString(n,list){var p=list.head;var c=1;var ret=p.data;n-=ret.length;while(p=p.next){var str=p.data;var nb=n>str.length?str.length:n;if(nb===str.length)ret+=str;else ret+=str.slice(0,n);n-=nb;if(n===0){if(nb===str.length){++c;if(p.next)list.head=p.next;else list.head=list.tail=null}else{list.head=p;p.data=str.slice(nb)}
break}
++c}
list.length-=c;return ret}
function copyFromBuffer(n,list){var ret=Buffer.allocUnsafe(n);var p=list.head;var c=1;p.data.copy(ret);n-=p.data.length;while(p=p.next){var buf=p.data;var nb=n>buf.length?buf.length:n;buf.copy(ret,ret.length-n,0,nb);n-=nb;if(n===0){if(nb===buf.length){++c;if(p.next)list.head=p.next;else list.head=list.tail=null}else{list.head=p;p.data=buf.slice(nb)}
break}
++c}
list.length-=c;return ret}
function endReadable(stream){var state=stream._readableState;if(state.length>0)throw new Error('"endReadable()" called on non-empty stream');if(!state.endEmitted){state.ended=!0;pna.nextTick(endReadableNT,state,stream)}}
function endReadableNT(state,stream){if(!state.endEmitted&&state.length===0){state.endEmitted=!0;stream.readable=!1;stream.emit('end')}}
function indexOf(xs,x){for(var i=0,l=xs.length;i<l;i++){if(xs[i]===x)return i}
return-1}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./_stream_duplex":95,"./internal/streams/BufferList":100,"./internal/streams/destroy":101,"./internal/streams/stream":102,"_process":93,"core-util-is":86,"events":87,"inherits":89,"isarray":91,"process-nextick-args":92,"safe-buffer":108,"string_decoder/":103,"util":84}],98:[function(require,module,exports){'use strict';module.exports=Transform;var Duplex=require('./_stream_duplex');var util=require('core-util-is');util.inherits=require('inherits');util.inherits(Transform,Duplex);function afterTransform(er,data){var ts=this._transformState;ts.transforming=!1;var cb=ts.writecb;if(!cb){return this.emit('error',new Error('write callback called multiple times'))}
ts.writechunk=null;ts.writecb=null;if(data!=null)
this.push(data);cb(er);var rs=this._readableState;rs.reading=!1;if(rs.needReadable||rs.length<rs.highWaterMark){this._read(rs.highWaterMark)}}
function Transform(options){if(!(this instanceof Transform))return new Transform(options);Duplex.call(this,options);this._transformState={afterTransform:afterTransform.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null};this._readableState.needReadable=!0;this._readableState.sync=!1;if(options){if(typeof options.transform==='function')this._transform=options.transform;if(typeof options.flush==='function')this._flush=options.flush}
this.on('prefinish',prefinish)}
function prefinish(){var _this=this;if(typeof this._flush==='function'){this._flush(function(er,data){done(_this,er,data)})}else{done(this,null,null)}}
Transform.prototype.push=function(chunk,encoding){this._transformState.needTransform=!1;return Duplex.prototype.push.call(this,chunk,encoding)};Transform.prototype._transform=function(chunk,encoding,cb){throw new Error('_transform() is not implemented')};Transform.prototype._write=function(chunk,encoding,cb){var ts=this._transformState;ts.writecb=cb;ts.writechunk=chunk;ts.writeencoding=encoding;if(!ts.transforming){var rs=this._readableState;if(ts.needTransform||rs.needReadable||rs.length<rs.highWaterMark)this._read(rs.highWaterMark)}};Transform.prototype._read=function(n){var ts=this._transformState;if(ts.writechunk!==null&&ts.writecb&&!ts.transforming){ts.transforming=!0;this._transform(ts.writechunk,ts.writeencoding,ts.afterTransform)}else{ts.needTransform=!0}};Transform.prototype._destroy=function(err,cb){var _this2=this;Duplex.prototype._destroy.call(this,err,function(err2){cb(err2);_this2.emit('close')})};function done(stream,er,data){if(er)return stream.emit('error',er);if(data!=null)
stream.push(data);if(stream._writableState.length)throw new Error('Calling transform done when ws.length != 0');if(stream._transformState.transforming)throw new Error('Calling transform done when still transforming');return stream.push(null)}},{"./_stream_duplex":95,"core-util-is":86,"inherits":89}],99:[function(require,module,exports){(function(process,global,setImmediate){'use strict';var pna=require('process-nextick-args');module.exports=Writable;function WriteReq(chunk,encoding,cb){this.chunk=chunk;this.encoding=encoding;this.callback=cb;this.next=null}
function CorkedRequest(state){var _this=this;this.next=null;this.entry=null;this.finish=function(){onCorkedFinish(_this,state)}}
var asyncWrite=!process.browser&&['v0.10','v0.9.'].indexOf(process.version.slice(0,5))>-1?setImmediate:pna.nextTick;var Duplex;Writable.WritableState=WritableState;var util=require('core-util-is');util.inherits=require('inherits');var internalUtil={deprecate:require('util-deprecate')};var Stream=require('./internal/streams/stream');var Buffer=require('safe-buffer').Buffer;var OurUint8Array=global.Uint8Array||function(){};function _uint8ArrayToBuffer(chunk){return Buffer.from(chunk)}
function _isUint8Array(obj){return Buffer.isBuffer(obj)||obj instanceof OurUint8Array}
var destroyImpl=require('./internal/streams/destroy');util.inherits(Writable,Stream);function nop(){}
function WritableState(options,stream){Duplex=Duplex||require('./_stream_duplex');options=options||{};var isDuplex=stream instanceof Duplex;this.objectMode=!!options.objectMode;if(isDuplex)this.objectMode=this.objectMode||!!options.writableObjectMode;var hwm=options.highWaterMark;var writableHwm=options.writableHighWaterMark;var defaultHwm=this.objectMode?16:16*1024;if(hwm||hwm===0)this.highWaterMark=hwm;else if(isDuplex&&(writableHwm||writableHwm===0))this.highWaterMark=writableHwm;else this.highWaterMark=defaultHwm;this.highWaterMark=Math.floor(this.highWaterMark);this.finalCalled=!1;this.needDrain=!1;this.ending=!1;this.ended=!1;this.finished=!1;this.destroyed=!1;var noDecode=options.decodeStrings===!1;this.decodeStrings=!noDecode;this.defaultEncoding=options.defaultEncoding||'utf8';this.length=0;this.writing=!1;this.corked=0;this.sync=!0;this.bufferProcessing=!1;this.onwrite=function(er){onwrite(stream,er)};this.writecb=null;this.writelen=0;this.bufferedRequest=null;this.lastBufferedRequest=null;this.pendingcb=0;this.prefinished=!1;this.errorEmitted=!1;this.bufferedRequestCount=0;this.corkedRequestsFree=new CorkedRequest(this)}
WritableState.prototype.getBuffer=function getBuffer(){var current=this.bufferedRequest;var out=[];while(current){out.push(current);current=current.next}
return out};(function(){try{Object.defineProperty(WritableState.prototype,'buffer',{get:internalUtil.deprecate(function(){return this.getBuffer()},'_writableState.buffer is deprecated. Use _writableState.getBuffer '+'instead.','DEP0003')})}catch(_){}})();var realHasInstance;if(typeof Symbol==='function'&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]==='function'){realHasInstance=Function.prototype[Symbol.hasInstance];Object.defineProperty(Writable,Symbol.hasInstance,{value:function(object){if(realHasInstance.call(this,object))return!0;if(this!==Writable)return!1;return object&&object._writableState instanceof WritableState}})}else{realHasInstance=function(object){return object instanceof this}}
function Writable(options){Duplex=Duplex||require('./_stream_duplex');if(!realHasInstance.call(Writable,this)&&!(this instanceof Duplex)){return new Writable(options)}
this._writableState=new WritableState(options,this);this.writable=!0;if(options){if(typeof options.write==='function')this._write=options.write;if(typeof options.writev==='function')this._writev=options.writev;if(typeof options.destroy==='function')this._destroy=options.destroy;if(typeof options.final==='function')this._final=options.final}
Stream.call(this)}
Writable.prototype.pipe=function(){this.emit('error',new Error('Cannot pipe, not readable'))};function writeAfterEnd(stream,cb){var er=new Error('write after end');stream.emit('error',er);pna.nextTick(cb,er)}
function validChunk(stream,state,chunk,cb){var valid=!0;var er=!1;if(chunk===null){er=new TypeError('May not write null values to stream')}else if(typeof chunk!=='string'&&chunk!==undefined&&!state.objectMode){er=new TypeError('Invalid non-string/buffer chunk')}
if(er){stream.emit('error',er);pna.nextTick(cb,er);valid=!1}
return valid}
Writable.prototype.write=function(chunk,encoding,cb){var state=this._writableState;var ret=!1;var isBuf=!state.objectMode&&_isUint8Array(chunk);if(isBuf&&!Buffer.isBuffer(chunk)){chunk=_uint8ArrayToBuffer(chunk)}
if(typeof encoding==='function'){cb=encoding;encoding=null}
if(isBuf)encoding='buffer';else if(!encoding)encoding=state.defaultEncoding;if(typeof cb!=='function')cb=nop;if(state.ended)writeAfterEnd(this,cb);else if(isBuf||validChunk(this,state,chunk,cb)){state.pendingcb++;ret=writeOrBuffer(this,state,isBuf,chunk,encoding,cb)}
return ret};Writable.prototype.cork=function(){var state=this._writableState;state.corked++};Writable.prototype.uncork=function(){var state=this._writableState;if(state.corked){state.corked--;if(!state.writing&&!state.corked&&!state.finished&&!state.bufferProcessing&&state.bufferedRequest)clearBuffer(this,state)}};Writable.prototype.setDefaultEncoding=function setDefaultEncoding(encoding){if(typeof encoding==='string')encoding=encoding.toLowerCase();if(!(['hex','utf8','utf-8','ascii','binary','base64','ucs2','ucs-2','utf16le','utf-16le','raw'].indexOf((encoding+'').toLowerCase())>-1))throw new TypeError('Unknown encoding: '+encoding);this._writableState.defaultEncoding=encoding;return this};function decodeChunk(state,chunk,encoding){if(!state.objectMode&&state.decodeStrings!==!1&&typeof chunk==='string'){chunk=Buffer.from(chunk,encoding)}
return chunk}
Object.defineProperty(Writable.prototype,'writableHighWaterMark',{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function writeOrBuffer(stream,state,isBuf,chunk,encoding,cb){if(!isBuf){var newChunk=decodeChunk(state,chunk,encoding);if(chunk!==newChunk){isBuf=!0;encoding='buffer';chunk=newChunk}}
var len=state.objectMode?1:chunk.length;state.length+=len;var ret=state.length<state.highWaterMark;if(!ret)state.needDrain=!0;if(state.writing||state.corked){var last=state.lastBufferedRequest;state.lastBufferedRequest={chunk:chunk,encoding:encoding,isBuf:isBuf,callback:cb,next:null};if(last){last.next=state.lastBufferedRequest}else{state.bufferedRequest=state.lastBufferedRequest}
state.bufferedRequestCount+=1}else{doWrite(stream,state,!1,len,chunk,encoding,cb)}
return ret}
function doWrite(stream,state,writev,len,chunk,encoding,cb){state.writelen=len;state.writecb=cb;state.writing=!0;state.sync=!0;if(writev)stream._writev(chunk,state.onwrite);else stream._write(chunk,encoding,state.onwrite);state.sync=!1}
function onwriteError(stream,state,sync,er,cb){--state.pendingcb;if(sync){pna.nextTick(cb,er);pna.nextTick(finishMaybe,stream,state);stream._writableState.errorEmitted=!0;stream.emit('error',er)}else{cb(er);stream._writableState.errorEmitted=!0;stream.emit('error',er);finishMaybe(stream,state)}}
function onwriteStateUpdate(state){state.writing=!1;state.writecb=null;state.length-=state.writelen;state.writelen=0}
function onwrite(stream,er){var state=stream._writableState;var sync=state.sync;var cb=state.writecb;onwriteStateUpdate(state);if(er)onwriteError(stream,state,sync,er,cb);else{var finished=needFinish(state);if(!finished&&!state.corked&&!state.bufferProcessing&&state.bufferedRequest){clearBuffer(stream,state)}
if(sync){asyncWrite(afterWrite,stream,state,finished,cb)}else{afterWrite(stream,state,finished,cb)}}}
function afterWrite(stream,state,finished,cb){if(!finished)onwriteDrain(stream,state);state.pendingcb--;cb();finishMaybe(stream,state)}
function onwriteDrain(stream,state){if(state.length===0&&state.needDrain){state.needDrain=!1;stream.emit('drain')}}
function clearBuffer(stream,state){state.bufferProcessing=!0;var entry=state.bufferedRequest;if(stream._writev&&entry&&entry.next){var l=state.bufferedRequestCount;var buffer=new Array(l);var holder=state.corkedRequestsFree;holder.entry=entry;var count=0;var allBuffers=!0;while(entry){buffer[count]=entry;if(!entry.isBuf)allBuffers=!1;entry=entry.next;count+=1}
buffer.allBuffers=allBuffers;doWrite(stream,state,!0,state.length,buffer,'',holder.finish);state.pendingcb++;state.lastBufferedRequest=null;if(holder.next){state.corkedRequestsFree=holder.next;holder.next=null}else{state.corkedRequestsFree=new CorkedRequest(state)}
state.bufferedRequestCount=0}else{while(entry){var chunk=entry.chunk;var encoding=entry.encoding;var cb=entry.callback;var len=state.objectMode?1:chunk.length;doWrite(stream,state,!1,len,chunk,encoding,cb);entry=entry.next;state.bufferedRequestCount--;if(state.writing){break}}
if(entry===null)state.lastBufferedRequest=null}
state.bufferedRequest=entry;state.bufferProcessing=!1}
Writable.prototype._write=function(chunk,encoding,cb){cb(new Error('_write() is not implemented'))};Writable.prototype._writev=null;Writable.prototype.end=function(chunk,encoding,cb){var state=this._writableState;if(typeof chunk==='function'){cb=chunk;chunk=null;encoding=null}else if(typeof encoding==='function'){cb=encoding;encoding=null}
if(chunk!==null&&chunk!==undefined)this.write(chunk,encoding);if(state.corked){state.corked=1;this.uncork()}
if(!state.ending&&!state.finished)endWritable(this,state,cb)};function needFinish(state){return state.ending&&state.length===0&&state.bufferedRequest===null&&!state.finished&&!state.writing}
function callFinal(stream,state){stream._final(function(err){state.pendingcb--;if(err){stream.emit('error',err)}
state.prefinished=!0;stream.emit('prefinish');finishMaybe(stream,state)})}
function prefinish(stream,state){if(!state.prefinished&&!state.finalCalled){if(typeof stream._final==='function'){state.pendingcb++;state.finalCalled=!0;pna.nextTick(callFinal,stream,state)}else{state.prefinished=!0;stream.emit('prefinish')}}}
function finishMaybe(stream,state){var need=needFinish(state);if(need){prefinish(stream,state);if(state.pendingcb===0){state.finished=!0;stream.emit('finish')}}
return need}
function endWritable(stream,state,cb){state.ending=!0;finishMaybe(stream,state);if(cb){if(state.finished)pna.nextTick(cb);else stream.once('finish',cb)}
state.ended=!0;stream.writable=!1}
function onCorkedFinish(corkReq,state,err){var entry=corkReq.entry;corkReq.entry=null;while(entry){var cb=entry.callback;state.pendingcb--;cb(err);entry=entry.next}
if(state.corkedRequestsFree){state.corkedRequestsFree.next=corkReq}else{state.corkedRequestsFree=corkReq}}
Object.defineProperty(Writable.prototype,'destroyed',{get:function(){if(this._writableState===undefined){return!1}
return this._writableState.destroyed},set:function(value){if(!this._writableState){return}
this._writableState.destroyed=value}});Writable.prototype.destroy=destroyImpl.destroy;Writable.prototype._undestroy=destroyImpl.undestroy;Writable.prototype._destroy=function(err,cb){this.end();cb(err)}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("timers").setImmediate)},{"./_stream_duplex":95,"./internal/streams/destroy":101,"./internal/streams/stream":102,"_process":93,"core-util-is":86,"inherits":89,"process-nextick-args":92,"safe-buffer":108,"timers":110,"util-deprecate":111}],100:[function(require,module,exports){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}
var Buffer=require('safe-buffer').Buffer;var util=require('util');function copyBuffer(src,target,offset){src.copy(target,offset)}
module.exports=function(){function BufferList(){_classCallCheck(this,BufferList);this.head=null;this.tail=null;this.length=0}
BufferList.prototype.push=function push(v){var entry={data:v,next:null};if(this.length>0)this.tail.next=entry;else this.head=entry;this.tail=entry;++this.length};BufferList.prototype.unshift=function unshift(v){var entry={data:v,next:this.head};if(this.length===0)this.tail=entry;this.head=entry;++this.length};BufferList.prototype.shift=function shift(){if(this.length===0)return;var ret=this.head.data;if(this.length===1)this.head=this.tail=null;else this.head=this.head.next;--this.length;return ret};BufferList.prototype.clear=function clear(){this.head=this.tail=null;this.length=0};BufferList.prototype.join=function join(s){if(this.length===0)return'';var p=this.head;var ret=''+p.data;while(p=p.next){ret+=s+p.data}return ret};BufferList.prototype.concat=function concat(n){if(this.length===0)return Buffer.alloc(0);if(this.length===1)return this.head.data;var ret=Buffer.allocUnsafe(n>>>0);var p=this.head;var i=0;while(p){copyBuffer(p.data,ret,i);i+=p.data.length;p=p.next}
return ret};return BufferList}();if(util&&util.inspect&&util.inspect.custom){module.exports.prototype[util.inspect.custom]=function(){var obj=util.inspect({length:this.length});return this.constructor.name+' '+obj}}},{"safe-buffer":108,"util":84}],101:[function(require,module,exports){'use strict';var pna=require('process-nextick-args');function destroy(err,cb){var _this=this;var readableDestroyed=this._readableState&&this._readableState.destroyed;var writableDestroyed=this._writableState&&this._writableState.destroyed;if(readableDestroyed||writableDestroyed){if(cb){cb(err)}else if(err&&(!this._writableState||!this._writableState.errorEmitted)){pna.nextTick(emitErrorNT,this,err)}
return this}
if(this._readableState){this._readableState.destroyed=!0}
if(this._writableState){this._writableState.destroyed=!0}
this._destroy(err||null,function(err){if(!cb&&err){pna.nextTick(emitErrorNT,_this,err);if(_this._writableState){_this._writableState.errorEmitted=!0}}else if(cb){cb(err)}});return this}
function undestroy(){if(this._readableState){this._readableState.destroyed=!1;this._readableState.reading=!1;this._readableState.ended=!1;this._readableState.endEmitted=!1}
if(this._writableState){this._writableState.destroyed=!1;this._writableState.ended=!1;this._writableState.ending=!1;this._writableState.finished=!1;this._writableState.errorEmitted=!1}}
function emitErrorNT(self,err){self.emit('error',err)}
module.exports={destroy:destroy,undestroy:undestroy}},{"process-nextick-args":92}],102:[function(require,module,exports){module.exports=require('events').EventEmitter},{"events":87}],103:[function(require,module,exports){'use strict';var Buffer=require('safe-buffer').Buffer;var isEncoding=Buffer.isEncoding||function(encoding){encoding=''+encoding;switch(encoding&&encoding.toLowerCase()){case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':return!0;default:return!1}};function _normalizeEncoding(enc){if(!enc)return'utf8';var retried;while(!0){switch(enc){case 'utf8':case 'utf-8':return'utf8';case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return'utf16le';case 'latin1':case 'binary':return'latin1';case 'base64':case 'ascii':case 'hex':return enc;default:if(retried)return;enc=(''+enc).toLowerCase();retried=!0}}};function normalizeEncoding(enc){var nenc=_normalizeEncoding(enc);if(typeof nenc!=='string'&&(Buffer.isEncoding===isEncoding||!isEncoding(enc)))throw new Error('Unknown encoding: '+enc);return nenc||enc}
exports.StringDecoder=StringDecoder;function StringDecoder(encoding){this.encoding=normalizeEncoding(encoding);var nb;switch(this.encoding){case 'utf16le':this.text=utf16Text;this.end=utf16End;nb=4;break;case 'utf8':this.fillLast=utf8FillLast;nb=4;break;case 'base64':this.text=base64Text;this.end=base64End;nb=3;break;default:this.write=simpleWrite;this.end=simpleEnd;return}
this.lastNeed=0;this.lastTotal=0;this.lastChar=Buffer.allocUnsafe(nb)}
StringDecoder.prototype.write=function(buf){if(buf.length===0)return'';var r;var i;if(this.lastNeed){r=this.fillLast(buf);if(r===undefined)return'';i=this.lastNeed;this.lastNeed=0}else{i=0}
if(i<buf.length)return r?r+this.text(buf,i):this.text(buf,i);return r||''};StringDecoder.prototype.end=utf8End;StringDecoder.prototype.text=utf8Text;StringDecoder.prototype.fillLast=function(buf){if(this.lastNeed<=buf.length){buf.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}
buf.copy(this.lastChar,this.lastTotal-this.lastNeed,0,buf.length);this.lastNeed-=buf.length};function utf8CheckByte(byte){if(byte<=0x7F)return 0;else if(byte>>5===0x06)return 2;else if(byte>>4===0x0E)return 3;else if(byte>>3===0x1E)return 4;return byte>>6===0x02?-1:-2}
function utf8CheckIncomplete(self,buf,i){var j=buf.length-1;if(j<i)return 0;var nb=utf8CheckByte(buf[j]);if(nb>=0){if(nb>0)self.lastNeed=nb-1;return nb}
if(--j<i||nb===-2)return 0;nb=utf8CheckByte(buf[j]);if(nb>=0){if(nb>0)self.lastNeed=nb-2;return nb}
if(--j<i||nb===-2)return 0;nb=utf8CheckByte(buf[j]);if(nb>=0){if(nb>0){if(nb===2)nb=0;else self.lastNeed=nb-3}
return nb}
return 0}
function utf8CheckExtraBytes(self,buf,p){if((buf[0]&0xC0)!==0x80){self.lastNeed=0;return'\ufffd'}
if(self.lastNeed>1&&buf.length>1){if((buf[1]&0xC0)!==0x80){self.lastNeed=1;return'\ufffd'}
if(self.lastNeed>2&&buf.length>2){if((buf[2]&0xC0)!==0x80){self.lastNeed=2;return'\ufffd'}}}}
function utf8FillLast(buf){var p=this.lastTotal-this.lastNeed;var r=utf8CheckExtraBytes(this,buf,p);if(r!==undefined)return r;if(this.lastNeed<=buf.length){buf.copy(this.lastChar,p,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}
buf.copy(this.lastChar,p,0,buf.length);this.lastNeed-=buf.length}
function utf8Text(buf,i){var total=utf8CheckIncomplete(this,buf,i);if(!this.lastNeed)return buf.toString('utf8',i);this.lastTotal=total;var end=buf.length-(total-this.lastNeed);buf.copy(this.lastChar,0,end);return buf.toString('utf8',i,end)}
function utf8End(buf){var r=buf&&buf.length?this.write(buf):'';if(this.lastNeed)return r+'\ufffd';return r}
function utf16Text(buf,i){if((buf.length-i)%2===0){var r=buf.toString('utf16le',i);if(r){var c=r.charCodeAt(r.length-1);if(c>=0xD800&&c<=0xDBFF){this.lastNeed=2;this.lastTotal=4;this.lastChar[0]=buf[buf.length-2];this.lastChar[1]=buf[buf.length-1];return r.slice(0,-1)}}
return r}
this.lastNeed=1;this.lastTotal=2;this.lastChar[0]=buf[buf.length-1];return buf.toString('utf16le',i,buf.length-1)}
function utf16End(buf){var r=buf&&buf.length?this.write(buf):'';if(this.lastNeed){var end=this.lastTotal-this.lastNeed;return r+this.lastChar.toString('utf16le',0,end)}
return r}
function base64Text(buf,i){var n=(buf.length-i)%3;if(n===0)return buf.toString('base64',i);this.lastNeed=3-n;this.lastTotal=3;if(n===1){this.lastChar[0]=buf[buf.length-1]}else{this.lastChar[0]=buf[buf.length-2];this.lastChar[1]=buf[buf.length-1]}
return buf.toString('base64',i,buf.length-n)}
function base64End(buf){var r=buf&&buf.length?this.write(buf):'';if(this.lastNeed)return r+this.lastChar.toString('base64',0,3-this.lastNeed);return r}
function simpleWrite(buf){return buf.toString(this.encoding)}
function simpleEnd(buf){return buf&&buf.length?this.write(buf):''}},{"safe-buffer":108}],104:[function(require,module,exports){module.exports=require('./readable').PassThrough},{"./readable":105}],105:[function(require,module,exports){exports=module.exports=require('./lib/_stream_readable.js');exports.Stream=exports;exports.Readable=exports;exports.Writable=require('./lib/_stream_writable.js');exports.Duplex=require('./lib/_stream_duplex.js');exports.Transform=require('./lib/_stream_transform.js');exports.PassThrough=require('./lib/_stream_passthrough.js')},{"./lib/_stream_duplex.js":95,"./lib/_stream_passthrough.js":96,"./lib/_stream_readable.js":97,"./lib/_stream_transform.js":98,"./lib/_stream_writable.js":99}],106:[function(require,module,exports){module.exports=require('./readable').Transform},{"./readable":105}],107:[function(require,module,exports){module.exports=require('./lib/_stream_writable.js')},{"./lib/_stream_writable.js":99}],108:[function(require,module,exports){var buffer=require('buffer')
var Buffer=buffer.Buffer
function copyProps(src,dst){for(var key in src){dst[key]=src[key]}}
if(Buffer.from&&Buffer.alloc&&Buffer.allocUnsafe&&Buffer.allocUnsafeSlow){module.exports=buffer}else{copyProps(buffer,exports)
exports.Buffer=SafeBuffer}
function SafeBuffer(arg,encodingOrOffset,length){return Buffer(arg,encodingOrOffset,length)}
copyProps(Buffer,SafeBuffer)
SafeBuffer.from=function(arg,encodingOrOffset,length){if(typeof arg==='number'){throw new TypeError('Argument must not be a number')}
return Buffer(arg,encodingOrOffset,length)}
SafeBuffer.alloc=function(size,fill,encoding){if(typeof size!=='number'){throw new TypeError('Argument must be a number')}
var buf=Buffer(size)
if(fill!==undefined){if(typeof encoding==='string'){buf.fill(fill,encoding)}else{buf.fill(fill)}}else{buf.fill(0)}
return buf}
SafeBuffer.allocUnsafe=function(size){if(typeof size!=='number'){throw new TypeError('Argument must be a number')}
return Buffer(size)}
SafeBuffer.allocUnsafeSlow=function(size){if(typeof size!=='number'){throw new TypeError('Argument must be a number')}
return buffer.SlowBuffer(size)}},{"buffer":85}],109:[function(require,module,exports){module.exports=Stream;var EE=require('events').EventEmitter;var inherits=require('inherits');inherits(Stream,EE);Stream.Readable=require('readable-stream/readable.js');Stream.Writable=require('readable-stream/writable.js');Stream.Duplex=require('readable-stream/duplex.js');Stream.Transform=require('readable-stream/transform.js');Stream.PassThrough=require('readable-stream/passthrough.js');Stream.Stream=Stream;function Stream(){EE.call(this)}
Stream.prototype.pipe=function(dest,options){var source=this;function ondata(chunk){if(dest.writable){if(!1===dest.write(chunk)&&source.pause){source.pause()}}}
source.on('data',ondata);function ondrain(){if(source.readable&&source.resume){source.resume()}}
dest.on('drain',ondrain);if(!dest._isStdio&&(!options||options.end!==!1)){source.on('end',onend);source.on('close',onclose)}
var didOnEnd=!1;function onend(){if(didOnEnd)return;didOnEnd=!0;dest.end()}
function onclose(){if(didOnEnd)return;didOnEnd=!0;if(typeof dest.destroy==='function')dest.destroy()}
function onerror(er){cleanup();if(EE.listenerCount(this,'error')===0){throw er}}
source.on('error',onerror);dest.on('error',onerror);function cleanup(){source.removeListener('data',ondata);dest.removeListener('drain',ondrain);source.removeListener('end',onend);source.removeListener('close',onclose);source.removeListener('error',onerror);dest.removeListener('error',onerror);source.removeListener('end',cleanup);source.removeListener('close',cleanup);dest.removeListener('close',cleanup)}
source.on('end',cleanup);source.on('close',cleanup);dest.on('close',cleanup);dest.emit('pipe',source);return dest}},{"events":87,"inherits":89,"readable-stream/duplex.js":94,"readable-stream/passthrough.js":104,"readable-stream/readable.js":105,"readable-stream/transform.js":106,"readable-stream/writable.js":107}],110:[function(require,module,exports){(function(setImmediate,clearImmediate){var nextTick=require('process/browser.js').nextTick;var apply=Function.prototype.apply;var slice=Array.prototype.slice;var immediateIds={};var nextImmediateId=0;exports.setTimeout=function(){return new Timeout(apply.call(setTimeout,window,arguments),clearTimeout)};exports.setInterval=function(){return new Timeout(apply.call(setInterval,window,arguments),clearInterval)};exports.clearTimeout=exports.clearInterval=function(timeout){timeout.close()};function Timeout(id,clearFn){this._id=id;this._clearFn=clearFn}
Timeout.prototype.unref=Timeout.prototype.ref=function(){};Timeout.prototype.close=function(){this._clearFn.call(window,this._id)};exports.enroll=function(item,msecs){clearTimeout(item._idleTimeoutId);item._idleTimeout=msecs};exports.unenroll=function(item){clearTimeout(item._idleTimeoutId);item._idleTimeout=-1};exports._unrefActive=exports.active=function(item){clearTimeout(item._idleTimeoutId);var msecs=item._idleTimeout;if(msecs>=0){item._idleTimeoutId=setTimeout(function onTimeout(){if(item._onTimeout)
item._onTimeout()},msecs)}};exports.setImmediate=typeof setImmediate==="function"?setImmediate:function(fn){var id=nextImmediateId++;var args=arguments.length<2?!1:slice.call(arguments,1);immediateIds[id]=!0;nextTick(function onNextTick(){if(immediateIds[id]){if(args){fn.apply(null,args)}else{fn.call(null)}
exports.clearImmediate(id)}});return id};exports.clearImmediate=typeof clearImmediate==="function"?clearImmediate:function(id){delete immediateIds[id]}}).call(this,require("timers").setImmediate,require("timers").clearImmediate)},{"process/browser.js":93,"timers":110}],111:[function(require,module,exports){(function(global){module.exports=deprecate;function deprecate(fn,msg){if(config('noDeprecation')){return fn}
var warned=!1;function deprecated(){if(!warned){if(config('throwDeprecation')){throw new Error(msg)}else if(config('traceDeprecation')){console.trace(msg)}else{console.warn(msg)}
warned=!0}
return fn.apply(this,arguments)}
return deprecated}
function config(name){try{if(!global.localStorage)return!1}catch(_){return!1}
var val=global.localStorage[name];if(null==val)return!1;return String(val).toLowerCase()==='true'}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1])(1)})