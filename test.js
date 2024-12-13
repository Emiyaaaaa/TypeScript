const filename = "./index.ts";

const ts = require('./built/local/typescript.js')

const program = ts.createProgram([filename], {
  allowJs: false
});
const sourceFile = program.getSourceFile(filename);
const typeChecker = program.getTypeChecker();

function visitNode(node) {
  console.log(node)
    // if (node.kind === ts.SyntaxKind.TypeReference)  {
    //     const type = typeChecker.getTypeFromTypeNode(node);

    //     debugger;
    // }

    node.forEachChild(child =>
        visitNode(child)
    );
}

visitNode(sourceFile);

// https://github.com/microsoft/TypeScript/pull/46599/files
// https://github.com/microsoft/TypeScript/issues/60453