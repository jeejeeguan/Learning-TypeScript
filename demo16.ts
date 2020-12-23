// tsconfig.json

// "noImplicitAny": true,
/* Raise error on expressions and declarations with an implied 'any' type. */
// 当类型注解为 any 时，必须标明该类型注解，否则会报错

// "strictNullChecks": true,
/* Enable strict null checks. */
// 严格执行 null 值检查，如果有 null 值出现则会报错

// "outDir": "./",
/* Redirect output structure to the directory. */
// 编译输出的 .js 文件存储在根目录下

// "rootDir": "./",
/* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
// 要编译的 .ts 文件存储在根目录下

// "sourceMap": true,
/* Generates corresponding '.map' file. */
// js 与 ts 文件间的映射关系，方便生产环境与开发环境代码之间 debug 时候有用，一般开发时候不打开，build 的时候打开

// "noUnusedLocals": true,
/* Report errors on unused locals. */
// 如果存在有未使用的变量，则会报错

// "noUnusedParameters": true,
/* Report errors on unused parameters. */
// 如果存在有未使用的方法，则会报错
