// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// 支持的语言类型
// const LANGUAGES = ['typescript', 'javascript', 'javascriptreact', 'typescriptreact'];

// const dictionary = ['hello', 'nihao', 'dajiahao', 'leihaoa'];


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	//触发推荐的字符列表 代码补全
	// 可应用于补全接口API
	// const triggers = [' '];
	// const completionPrivoder = vscode.languages.registerCompletionItemProvider(LANGUAGES,{
	// 	async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
	// 		const completionItems: vscode.CompletionItem = {
	// 			label: 'Hello VScode, Complete code',
	// 		};
	// 		return [completionItems];
	// 	},
	// }, ...triggers);

	// context.subscriptions.push(completionPrivoder);


	// const triggers = [' '];
	// const completionPrivoder = vscode.languages.registerCompletionItemProvider(LANGUAGES,{
	// 	async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
	// 		const range = new vscode.Range(new vscode.Position(position.line, 0), position);
	// 		const text = document.getText(range);
	// 		const completionItemList: vscode.CompletionItem[] = dictionary.filter(item =>item.startsWith(text)).map((item, idx) => ({
	// 			label: item,
	// 			preselect: idx === 0,
	// 			documentation: 'This is a dictionary word',
	// 			sortText: `my_completion_${idx}`,

	// 		}));
			
	// 		return completionItemList;
	// 	},
	// }, ...triggers);

	// context.subscriptions.push(completionPrivoder);


	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "chatbotdemo" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('chatbotdemo', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from CHATBOTDEMO!');
	});

	context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
export function deactivate() {}
