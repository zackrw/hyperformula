(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{307:function(a,t,e){"use strict";e.r(t);var r=e(14),i=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"array-formulas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-formulas"}},[a._v("#")]),a._v(" Array formulas")]),a._v(" "),t("p",[a._v("Use array formulas to perform an operation (or call a function) on multiple cells at a time.")]),a._v(" "),t("h2",{attrs:{id:"about-arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-arrays"}},[a._v("#")]),a._v(" About arrays")]),a._v(" "),t("p",[a._v("In HyperFormula, an array can be:")]),a._v(" "),t("ul",[t("li",[a._v("A range of cell addresses (e.g. "),t("code",[a._v("A1:A10")]),a._v(")")]),a._v(" "),t("li",[a._v("A result of an arithmetic operation (e.g. "),t("code",[a._v("5*A1:B5")]),a._v(")")]),a._v(" "),t("li",[a._v("A result of a function (e.g. "),t("code",[a._v("=ARRAYFORMULA(ARRAY_CONSTRAIN(A2:E5, 2, 2))")]),a._v(")")]),a._v(" "),t("li",[a._v("An "),t("strong",[a._v("inline array")]),a._v(": an ad-hoc array that doesn't refer to any range of cells (e.g. "),t("code",[a._v("{1, 3, 5}")]),a._v(")")])]),a._v(" "),t("p",[a._v("An array is inherently a two-dimensional object.")]),a._v(" "),t("p",[t("code",[a._v("1")]),a._v("x"),t("code",[a._v("1")]),a._v(" arrays are treated as single, zero-dimensional values ("),t("strong",[a._v("scalars")]),a._v(").")]),a._v(" "),t("h3",{attrs:{id:"inline-arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inline-arrays"}},[a._v("#")]),a._v(" Inline arrays")]),a._v(" "),t("p",[a._v("An inline array is defined by curly braces: "),t("code",[a._v("{ }")]),a._v(". It can contain one or more rows, separated by:")]),a._v(" "),t("ul",[t("li",[a._v("The "),t("RouterLink",{attrs:{to:"/api/classes/config.html#arraycolumnseparator"}},[t("code",[a._v("arrayColumnSeparator")])]),a._v(" (default: "),t("code",[a._v(",")]),a._v(")")],1),a._v(" "),t("li",[a._v("The "),t("RouterLink",{attrs:{to:"/api/classes/config.html#arrayrowseparator"}},[t("code",[a._v("arrayRowSeparator")])]),a._v(" (default: "),t("code",[a._v(";")]),a._v(")")],1)]),a._v(" "),t("p",[a._v("Every row must be of equal length.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[t("strong",[a._v("Inline arrays are not recomputed after initialization.")])]),a._v(" "),t("p",[a._v("If an inline array contains a cell reference, and the cell's value changes, the array is not updated.")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("= {1, 2, 3} // an inline array with a single row\n= {1, 2 ; 3, 4} // an inline array with two rows\n= SUM({1, 2, 3}) // an inline array as an argument of a function\n= {A1, A2} // when the values of A1 or A2 change, this inline array is not updated\n\n= {1, 2 ; 3} // an invalid inline array: two rows of different lengths\n")])])]),t("h2",{attrs:{id:"array-arithmetic-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-arithmetic-mode"}},[a._v("#")]),a._v(" Array arithmetic mode")]),a._v(" "),t("p",[a._v("To use array formulas in HyperFormula, you need to enable the "),t("strong",[a._v("array arithmetic mode")]),a._v(".")]),a._v(" "),t("p",[a._v("You can enable the array arithmetic mode:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#enabling-the-array-arithmetic-mode-locally"}},[a._v("Locally")]),a._v(" (for an individual function or operation)")]),a._v(" "),t("li",[t("a",{attrs:{href:"#enabling-the-array-arithmetic-mode-globally"}},[a._v("Globally")]),a._v(" (for your HyperFormula instance)")])]),a._v(" "),t("h3",{attrs:{id:"enabling-the-array-arithmetic-mode-locally"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-the-array-arithmetic-mode-locally"}},[a._v("#")]),a._v(" Enabling the array arithmetic mode locally")]),a._v(" "),t("p",[a._v("To enable the array arithmetic mode once, within a particular function or formula, use the "),t("code",[a._v("ARRAYFORMULA")]),a._v(" function:")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[a._v("Syntax")]),a._v(" "),t("th",{staticStyle:{"text-align":"left"}},[a._v("Example")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("ARRAYFORMULA(your_array_formula)")])]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("=ARRAYFORMULA(A2:A5*B2:B5)")])])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("ARRAYFORMULA(YOUR_FUNCTION(your_array_formula))")])]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("=ARRAYFORMULA(ISEVEN(A2:A5*10))")])])])])]),a._v(" "),t("h3",{attrs:{id:"enabling-the-array-arithmetic-mode-globally"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-the-array-arithmetic-mode-globally"}},[a._v("#")]),a._v(" Enabling the array arithmetic mode globally")]),a._v(" "),t("p",[a._v("To enable the array arithmetic mode by default, everywhere in your HyperFormula instance:")]),a._v(" "),t("ul",[t("li",[a._v("In your HyperFormula "),t("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#usearrayarithmetic"}},[a._v("configuration")]),a._v(", set the "),t("code",[a._v("useArrayArithmetic")]),a._v(" option to "),t("code",[a._v("true")]),a._v(".")],1)]),a._v(" "),t("p",[a._v("With the array arithmetic mode enabled globally, you can operate on arrays without using the "),t("code",[a._v("ARRAYFORMULA")]),a._v(" function:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("=A2:A5*B2:B5\n\nISEVEN(A2:A5*10)\n")])])]),t("h2",{attrs:{id:"array-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-features"}},[a._v("#")]),a._v(" Array features")]),a._v(" "),t("p",[a._v("Thanks to HyperFormula's built-in array features, you can:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#operating-on-arrays"}},[a._v("Operate on arrays")]),a._v(" just like on "),t("a",{attrs:{href:"#about-arrays"}},[a._v("scalars")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#passing-arrays-to-scalar-functions-vectorization"}},[a._v("Pass arrays to functions")]),a._v(" that accept "),t("a",{attrs:{href:"#about-arrays"}},[a._v("scalars")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#broadcasting"}},[a._v("Broadcast")]),a._v(" smaller input arrays across larger output areas")])]),a._v(" "),t("p",[a._v("You can also:")]),a._v(" "),t("ul",[t("li",[a._v("Use the "),t("code",[a._v("FILTER")]),a._v(" function to "),t("a",{attrs:{href:"#filtering-an-array"}},[a._v("filter an array")]),a._v(", based on boolean arrays")]),a._v(" "),t("li",[a._v("Use the "),t("code",[a._v("ARRAY_CONSTRAIN")]),a._v(" function to "),t("a",{attrs:{href:"#constraining-an-array-s-size"}},[a._v("constrain an array's size")])])]),a._v(" "),t("h3",{attrs:{id:"operating-on-arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operating-on-arrays"}},[a._v("#")]),a._v(" Operating on arrays")]),a._v(" "),t("p",[a._v("You can operate on arrays just like on single values.")]),a._v(" "),t("p",[a._v("When the "),t("a",{attrs:{href:"#array-arithmetic-mode"}},[a._v("array arithmetic mode")]),a._v(" is enabled, each output array value is the result of your operation on the corresponding input array value.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("=ARRAYFORMULA(A2:A5*B2:B5)\n\n// calculates:\n// =A2*B2\n// =A3*B3\n// =A4*B4\n// =A5*B5\n")])])]),t("h3",{attrs:{id:"passing-arrays-to-scalar-functions-vectorization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#passing-arrays-to-scalar-functions-vectorization"}},[a._v("#")]),a._v(" Passing arrays to scalar functions (vectorization)")]),a._v(" "),t("p",[a._v("When the "),t("a",{attrs:{href:"#array-arithmetic-mode"}},[a._v("array arithmetic mode")]),a._v(" is enabled, HyperFormula automatically "),t("em",[a._v("vectorizes")]),a._v(" most functions.")]),a._v(" "),t("p",[a._v("As a consequence of that, you can pass arrays to functions that would normally accept "),t("a",{attrs:{href:"#about-arrays"}},[a._v("scalars")]),a._v(". The result would also be an array.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("=ARRAYFORMULA(ISEVEN(A2:A5))\n\n// calculates:\n// =ISEVEN(A2)\n// =ISEVEN(A3)\n// =ISEVEN(A4)\n// =ISEVEN(A5)\n")])])]),t("h3",{attrs:{id:"broadcasting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting"}},[a._v("#")]),a._v(" Broadcasting")]),a._v(" "),t("p",[a._v("If an input array has a dimension of "),t("code",[a._v("1")]),a._v(', it\'s automatically repeated ("broadcast") on that dimension to match the size of the output.')]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("=ARRAYFORMULA(ISEVEN(A2:A5*B2))\n\n// calculates:\n// =ISEVEN(A2*B2)\n// =ISEVEN(A3*B2)\n// =ISEVEN(A4*B2)\n// =ISEVEN(A5*B2)\n")])])]),t("h3",{attrs:{id:"filtering-an-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filtering-an-array"}},[a._v("#")]),a._v(" Filtering an array")]),a._v(" "),t("p",[a._v("When the "),t("a",{attrs:{href:"#array-arithmetic-mode"}},[a._v("array arithmetic mode")]),a._v(" is enabled, you can filter an array, based on boolean arrays, using the "),t("code",[a._v("FILTER")]),a._v(" function:")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[a._v("Syntax")]),a._v(" "),t("th",{staticStyle:{"text-align":"left"}},[a._v("Example")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("FILTER(your_array, BoolArray1[, BoolArray2[, ...]]")])]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("=ARRAYFORMULA(FILTER(A2:A5*10), {1, 0, 0, 1})")])])])])]),a._v(" "),t("h3",{attrs:{id:"constraining-an-array-s-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constraining-an-array-s-size"}},[a._v("#")]),a._v(" Constraining an array's size")]),a._v(" "),t("p",[a._v("When the "),t("a",{attrs:{href:"#array-arithmetic-mode"}},[a._v("array arithmetic mode")]),a._v(" is enabled, you can constrain the size of the output array, using the "),t("code",[a._v("ARRAY_CONSTRAIN")]),a._v(" function:")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[a._v("Syntax")]),a._v(" "),t("th",{staticStyle:{"text-align":"left"}},[a._v("Example")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("ARRAY_CONSTRAIN(your_array,height,width)")])]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("=ARRAYFORMULA(ARRAY_CONSTRAIN(A2:E5, 2, 2))")])])])])]),a._v(" "),t("p",[a._v("If your specified output array size is smaller than the input array size, only the corresponding top-left cells of the input array are taken into account.")]),a._v(" "),t("p",[a._v("If your specified output array size is larger or equal to the input array size, no change is made.")]),a._v(" "),t("h2",{attrs:{id:"array-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-rules"}},[a._v("#")]),a._v(" Array rules")]),a._v(" "),t("h3",{attrs:{id:"with-the-array-arithmetic-mode-enabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-the-array-arithmetic-mode-enabled"}},[a._v("#")]),a._v(" With the array arithmetic mode enabled")]),a._v(" "),t("p",[a._v("When the "),t("a",{attrs:{href:"#array-arithmetic-mode"}},[a._v("array arithmetic mode")]),a._v(" is enabled, and you pass an array to a "),t("a",{attrs:{href:"#about-arrays"}},[a._v("scalar")]),a._v(" function, the following rules apply:")]),a._v(" "),t("ul",[t("li",[a._v("Array dimensions need to be consistent (e.g. every row needs to be of the same length).")]),a._v(" "),t("li",[a._v("If an input array value is missing (due to a difference in dimensions), the corresponding output array value is "),t("code",[a._v("#N/A")]),a._v(".")]),a._v(" "),t("li",[a._v("If a cell evaluates to an array, the array values are spilled into neighboring cells (unless the neighboring cells are already filled)."),t("br"),a._v("This behavior doesn't apply to ranges, which return the "),t("code",[a._v("#VALUE!")]),a._v(" error in this case.")]),a._v(" "),t("li",[a._v("If one of input array dimensions is "),t("code",[a._v("1")]),a._v(" ("),t("code",[a._v("1")]),a._v("x"),t("code",[a._v("n")]),a._v(" or "),t("code",[a._v("n")]),a._v("x"),t("code",[a._v("1")]),a._v("), the array is repeated, to match the output array dimensions.")])]),a._v(" "),t("h3",{attrs:{id:"with-the-array-arithmetic-mode-disabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-the-array-arithmetic-mode-disabled"}},[a._v("#")]),a._v(" With the array arithmetic mode disabled")]),a._v(" "),t("p",[a._v("When the "),t("a",{attrs:{href:"#array-arithmetic-mode"}},[a._v("array arithmetic mode")]),a._v(" is disabled, and you pass an array to a "),t("a",{attrs:{href:"#about-arrays"}},[a._v("scalar")]),a._v(" function, the array is reduced to 1 element (usually the array's top-left value).")]),a._v(" "),t("p",[a._v("When the "),t("a",{attrs:{href:"#array-arithmetic-mode"}},[a._v("array arithmetic mode")]),a._v(" is disabled, and you operate on a range of width/height equal to "),t("code",[a._v("1")]),a._v(", the behavior depends on your array formula's location:")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[a._v("Your array formula's location")]),a._v(" "),t("th",{staticStyle:{"text-align":"left"}},[a._v("Behavior")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("In the same row as as one of the range's elements")]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("Only that particular element is taken.")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("Any other cell")]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[a._v("#VALUE!")]),a._v(" error")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);