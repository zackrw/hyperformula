(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{599:function(t,e,a){"use strict";a.r(e);var s=a(44),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cell-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cell-references"}},[t._v("#")]),t._v(" Cell references")]),t._v(" "),a("p",[t._v("A formula can refer to one or more cells and automatically update its\ncontents whenever any of the referenced cells change. The values from\nother cells can be obtained using A1 notation which is a flexible\nway of pointing at different sources of data for the formulas.")]),t._v(" "),a("p",[t._v("The table below summarizes the most popular methods of referring to\ndifferent cells in the workbook.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Current sheet")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Different sheet")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Relative")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=A1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet2!A1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Absolute")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=$A$1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet2!$A$1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Mixed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=$A1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet2!$A1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Circular (example)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",[t._v("A1=B1")]),t._v(" "),a("p",[a("em",[t._v("whereas")])]),t._v(" "),a("p",[t._v("B1=A1")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",[t._v("Sheet1!A1=Sheet2!A1")]),t._v(" "),a("p",[a("em",[t._v("whereas")])]),t._v(" "),a("p",[t._v("Sheet2!A1=Sheet1!A1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Range")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=A1:C10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=Sheet2!A1:C10")])])])]),t._v(" "),a("h3",{attrs:{id:"referring-to-named-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referring-to-named-expressions"}},[t._v("#")]),t._v(" Referring to named expressions")]),t._v(" "),a("p",[t._v("This is a special case in HyperFormula. Upon creation you define the\nscope of the expression:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define for a global scope")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sheet id not passed")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyGlobal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=SUM(100+10)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define for a local scope")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sheet id passed")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyLocal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=Sheet2!$A$1+100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("And now you can use 'MyGlobal' and 'MyLocal' names.")]),t._v(" "),a("p",[t._v("HyperFormula is more limited than\ntypical spreadsheet software when it comes to referring to named ranges.\nFor more information about how\nHyperFormula handles named ranges,\nsee "),a("RouterLink",{attrs:{to:"/guide/named-ranges.html"}},[t._v("this section")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"relative-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relative-references"}},[t._v("#")]),t._v(" Relative references")]),t._v(" "),a("p",[t._v("Relative and absolute references play a huge role in\n"),a("RouterLink",{attrs:{to:"/guide/clipboard-operations.html"}},[t._v("copy and paste")]),t._v(", autofill, and CRUD\noperations like moving cells or columns.")],1),t._v(" "),a("p",[t._v("By default, all references are relative which means that when you\ncopy them to other cells, the references are updated based on the\nnew coordinates. There are two main exceptions though: the move operation and named expressions, both of which use absolute references. HyperFormula provides\n"),a("code",[t._v("copy")]),t._v(" , "),a("code",[t._v("cut")]),t._v(" and "),a("code",[t._v("paste")]),t._v(" methods that allow for handling clipboard operations.")]),t._v(" "),a("p",[a("strong",[t._v("Cut and paste")]),t._v(" behaves a bit differently. If '=A1' is copied from cell B1 into B2 it will stay after being placed into B2.")]),t._v(" "),a("p",[a("strong",[t._v("Copy and paste")]),t._v(" will behave a bit different in a relative mean")]),t._v(" "),a("ul",[a("li",[t._v("if '=A1' will be copied from B1 into B2 cell it will be '=A2'.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Formula in A1")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Result in A2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("=B1+1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",[t._v("Copy A1")]),t._v(" "),a("p",[t._v("Paste to A2")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=B2+1")])])])]),t._v(" "),a("p",[t._v("This example shows the change after the move operation was done:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build with a simple dataset")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildFromArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=B2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=A1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// these are the coordinates for a move operation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sheet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" destination "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sheet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// move B1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveCells")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can see the changes inside the console")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("changes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"absolute-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#absolute-reference"}},[t._v("#")]),t._v(" Absolute reference")]),t._v(" "),a("p",[t._v("A reference to a column (a letter) or a row (a number) may be\npreceded with a dollar sign "),a("code",[t._v("$")]),t._v(" to remain intact when the cell is\ncopied between different places.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Formula in A1")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Result in A2 and A3")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("=$B$1+1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",[t._v("Copy A1")]),t._v(" "),a("p",[t._v("Paste to A2")]),t._v(" "),a("p",[t._v("Paste to A3")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=$B$1+1")])])])]),t._v(" "),a("h2",{attrs:{id:"circular-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#circular-reference"}},[t._v("#")]),t._v(" Circular reference")]),t._v(" "),a("p",[t._v("Since HyperFormula does not embed any UI, it allows for the input of a circular reference into a cell. Compared to popular spreadsheets,\nHyperFormula does not force any specific interaction with the user\n(i.e. displaying a warning ) when circular reference happens.")]),t._v(" "),a("p",[t._v("When circular reference happens, HyperFormula returns #CYCLE as\nthe value of the cell where the circular reference occurred. After\nsome CRUD operation is performed, the error might disappear when it is no longer\na cyclic dependency. No matter the outcome, other cells are\ncalculated normally and the dependency graph is updated. It\nis "),a("strong",[t._v("non-blocking")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"the-ref-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-ref-error"}},[t._v("#")]),t._v(" The #REF! error")]),t._v(" "),a("p",[t._v("By deleting the cell that is referenced in a formula you make the\nentire formula no longer valid. As a result, you will get the\n#REF! error which indicates that there is an invalid address\nused in a cell.")]),t._v(" "),a("p",[t._v("Consider the following example:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Formula in C1")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Result in B1")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("=A1+B1+20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Delete column A")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("#REF!")])])])]),t._v(" "),a("p",[t._v("The #REF! error may also occur in other specific situations:")]),t._v(" "),a("ul",[a("li",[t._v("When you copy and paste formulas containing relative references,\nor example:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Formula in B1")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Action")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Result in A1")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("=A1+1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",[t._v("Cut from B1")]),t._v(" "),a("p",[t._v("Paste to A1")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("#REF!")])])])]),t._v(" "),a("ul",[a("li",[t._v("When the VLOOKUP is told to look up values in a column whose\nindex is out of the scope.")]),t._v(" "),a("li",[t._v("When the INDEX function is told to return values from rows or\ncolumns that are out of the scope.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);