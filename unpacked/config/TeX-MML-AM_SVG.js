/*************************************************************
 *
 *  /MathJax/unpacked/config/TeX-MML-AM_SVG.js
 *  
 *  Copyright (c) 2010-2018 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Config({
  extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathEvents.js","MathZoom.js","MathMenu.js","toMathML.js","TeX/noErrors.js","TeX/noUndefined.js","TeX/AMSmath.js","TeX/AMSsymbols.js","fast-preview.js","AssistiveMML.js"],
  jax: ["input/TeX","input/MathML","input/AsciiMath","output/SVG","output/PreviewHTML"]
});

MathJax.Ajax.loadComplete("[MathJax]/config/TeX-MML-AM_SVG.js");
