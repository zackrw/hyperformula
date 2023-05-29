(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{334:function(e,t,n){"use strict";n.r(t);var o=n(14),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"known-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations"}},[e._v("#")]),e._v(" Known limitations")]),e._v(" "),t("p",[e._v("This page lists the known limitations of HyperFormula at its current development stage:")]),e._v(" "),t("ul",[t("li",[e._v("Node.js versions older than 13 don't properly compare\nculture-insensitive strings. HyperFormula requires the full\nInternational Components for Unicode (ICU) to be supported.\n"),t("a",{attrs:{href:"https://nodejs.org/api/intl.html#intl_embed_the_entire_icu_full_icu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Multiple workbooks are not supported. One instance of HyperFormula\ncan handle only one workbook with multiple worksheets at a time.")]),e._v(" "),t("li",[e._v('For cycle detection, all possible dependencies between cells are\ntaken into account, even if some of them could be omitted after\nthe full evaluation of expressions and condition statements. The\nmost prominent example of this behavior is the "IF" function which\nreturns a cycle error regardless of whether TRUE or FALSE causes\na circular reference.')]),e._v(" "),t("li",[e._v("There is no data validation against named ranges. For example,\nyou can't compare the arguments in a formula like this:\n=IF(firstRange>secondRange, TRUE, FALSE).")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/guide/custom-functions.html"}},[e._v("Custom functions")]),e._v(" don't automatically recalculate the size of their "),t("RouterLink",{attrs:{to:"/guide/custom-functions.html#return-an-array-of-data"}},[e._v("result arrays")]),e._v(" when the formula dependencies change.")],1),e._v(" "),t("li",[e._v("There is no relative referencing in named ranges.")]),e._v(" "),t("li",[e._v("The library doesn't offer (at least not yet) the following features:\n"),t("ul",[t("li",[e._v("3D references")]),e._v(" "),t("li",[e._v("Constant arrays")]),e._v(" "),t("li",[e._v("Dynamic arrays")]),e._v(" "),t("li",[e._v("Asynchronous functions")]),e._v(" "),t("li",[e._v('Structured references ("Tables")')]),e._v(" "),t("li",[e._v("Relative named expressions")]),e._v(" "),t("li",[e._v("Functions cannot use UI metadata (e.g., hidden rows for SUBTOTAL).")])])])]),e._v(" "),t("h2",{attrs:{id:"nuances-of-the-implemented-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nuances-of-the-implemented-functions"}},[e._v("#")]),e._v(" Nuances of the implemented functions")]),e._v(" "),t("ul",[t("li",[e._v("HyperFormula immediately instantiates references to single cells to their values, instead of treating them as 1-length ranges, which slightly changes the behavior of some functions (e.g., NPV).")]),e._v(" "),t("li",[e._v("SUBTOTAL function does not ignore nested subtotals.")]),e._v(" "),t("li",[e._v("CHISQ.INV, CHISQ.INV.RT, CHISQ.DIST.RT, CHIDIST, CHIINV and CHISQ.DIST (CHISQ.DIST in CDF mode): Running time grows linearly with the value of the second parameter, degrees_of_freedom (slow for values>1e7).")]),e._v(" "),t("li",[e._v("GAMMA.DIST, GAMMA.INV, GAMMADIST, GAMMAINV (GAMMA.DIST and GAMMADIST in CDF mode): Running time grows linearly with the value of the second parameter, alpha (slow for values>1e7).")]),e._v(" "),t("li",[e._v("For certain inputs, the RATE function might have no solutions, or have multiple solutions. Our implementation uses an iterative algorithm (Newton's method) to find an approximation for one of the solutions to within 1e-7. If the approximation is not found after 50 iterations, the RATE function returns the "),t("code",[e._v("#NUM!")]),e._v(" error.")]),e._v(" "),t("li",[e._v("The INDEX function doesn't support returning whole rows or columns of the source range – it always returns the contents of a single cell.")]),e._v(" "),t("li",[e._v("The FILTER function accepts either single rows of equal width or single columns of equal height. In other words, all arrays passed to the FILTER function must have equal dimensions, and at least one of those dimensions must be 1.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);