// @see: https://www.prettier.cn
module.exports = {
	// 超过最大值换行
	printWidth: 120,
	// 缩进字节数
	tabWidth: 2,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	// 结尾不用分号(true有，false没有)
	semi: true,
	// 使用单引号(true单双引号，false双引号)
	singleQuote: false,
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: true,
	// 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	quoteProps: "as-needed",
	// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	trailingComma: "all",
	// 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	bracketSpacing: true,
	//  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
	arrowParens: "always",
	// range是format执行的范围，可用于格式化以给定字符偏移量,可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: <int>  rangeEnd: <int>）
	rangeStart: 0,
	rangeEnd: Infinity,
	// 指定要使用的解析器，不需要写文件开头的 @prettier
	requirePragma: false,
	// 如果文件顶部已经有一个 doclock，这个选项将新建一行注释，并打上@format标记。
	insertPragma: false,
	// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	proseWrap: "preserve",
	// 在html中空格是否是敏感的 "css" - 遵守CSS显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
	htmlWhitespaceSensitivity: "css",
	// 换行符结尾是 可选值"<auto | lf | crlf | cr>"
	endOfLine: "crlf",
	// Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: false,
	// 在jsx中把'>' 是否单独放一行
	jsxBracketSameLine: false,
};
