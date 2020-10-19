module.exports = {
    "extends": [
        "plugin:vue/vue3-recommended"
    ],
    "rules": {
        "vue/component-tags-order": ["error", {
            "order": ["template", "script", "style"]
        }],
        // 必须有分号
        "semi": "error",
        // 缩进4个空格,这里忽略三元操作符,三元操作符需要自己的对齐方式
        "indent": ["error", 4, { "ignoredNodes": ["ConditionalExpression"] }],
        // 引号必须是双引号
        "quotes": ["error", "double"],
        // 如果语法块可有可无,必须要语法块
        "curly": "error",
        // 使用3个等号
        "eqeqeq": "error",
        // 在对象字面量的冒号后面必须有空格
        "key-spacing": ["error", { "afterColon": true }],
        // javascript语法关键字前后必须要空格
        "keyword-spacing": ["error", { "before": true,"after": true }],
        // 匿名函数的括号前面必须有空格,具名函数的括号前面不要空格,箭头函数前面必须要空格
        "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
        // 注释后面必须要空格
        "spaced-comment": ["error", "always"],
        // 逗号后面必须要一个空格
        "comma-spacing": ["error", { "before": false, "after": true }],
        // 语法块前面必须有空格
        "space-before-blocks": "error",
        // 空行不要超过2行
        "no-multiple-empty-lines": "error",
        // 操作符周围必须有空格
        "no-multiple-empty-lines": "error",
        // 箭头函数的箭头前后有空格
        "arrow-spacing": "error",
        // 操作符周围必须要空格
        "space-infix-ops": "error",
        // 不能有多余的空格
        "no-multi-spaces": "error",
        // 条件语句必须要块
        "curly": "error",
        // 大括号的风格统一
        "brace-style": "error",
        // 大括号里面不应该有空格,不跟三元表达式冲突
        "space-in-parens": ["error", "never"]
    }
};