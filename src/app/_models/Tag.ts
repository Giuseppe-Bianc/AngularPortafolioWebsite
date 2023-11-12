export class Tag {
	static readonly ANGULAR = new Tag('Angular', 'red');
	static readonly REACT = new Tag('React', 'blue');
	static readonly VUE = new Tag('Vue', 'green');
	static readonly TYPESCRIPT = new Tag('TypeScript', 'orange');
	static readonly NODEJS = new Tag('Node.js', 'purple');
	static readonly PYTHON = new Tag('Python', 'yellow');
	static readonly JAVA = new Tag('Java', 'brown');
	static readonly CSHARP = new Tag('C#', 'pink');
	static readonly PHP = new Tag('PHP', 'indigo');
	static readonly RUBY = new Tag('Ruby', 'violet');
	static readonly HTML = new Tag('HTML', 'gold');
	static readonly CSS = new Tag('CSS', 'teal');
	static readonly JAVASCRIPT = new Tag('JavaScript', 'cyan');
	static readonly GO = new Tag('Go', 'lime');
	static readonly SWIFT = new Tag('Swift', 'lightblue');
	static readonly KOTLIN = new Tag('Kotlin', 'deeporange');
	static readonly RUST = new Tag('Rust', 'maroon');
	static readonly SCALA = new Tag('Scala', 'lavender');
	static readonly SQL = new Tag('SQL', 'skyblue');
	static readonly R = new Tag('R', 'pink');
	static readonly MATLAB = new Tag('MATLAB', 'darkgray');
	static readonly C = new Tag('C', 'darkblue');
	static readonly CPLUSPLUS = new Tag('C++', 'lightgreen');
	static readonly PERL = new Tag('Perl', 'darkcyan');
	static readonly SHELL = new Tag('Shell', 'olive');
	static readonly SWIFTUI = new Tag('SwiftUI', 'lightgray');
	static readonly OBJECTIVEC = new Tag('Objective-C', 'darkgreen');
	static readonly FLUTTER = new Tag('Flutter', 'pink');
	static readonly DART = new Tag('Dart', 'deepskyblue');
	static readonly COBOL = new Tag('COBOL', 'darkred');
	static readonly FORTRAN = new Tag('Fortran', 'lightcoral');
	static readonly ADA = new Tag('Ada', 'mediumorchid');
	static readonly LUA = new Tag('Lua', 'darkslateblue');
	static readonly PERL6 = new Tag('Perl 6', 'mediumseagreen');
	static readonly GROOVY = new Tag('Groovy', 'orangered');
	static readonly HACK = new Tag('Hack', 'dodgerblue');
	static readonly JULIA = new Tag('Julia', 'indianred');
	static readonly VHDL = new Tag('VHDL', 'firebrick');
	static readonly COFFEESCRIPT = new Tag('CoffeeScript', 'saddlebrown');
	static readonly BATCHSCRIPT = new Tag('Batch Script', 'darkkhaki');
	static readonly POWERSHELL = new Tag('PowerShell', 'darkorange');
	static readonly COQ = new Tag('Coq', 'mediumslateblue');
	static readonly FSHARP = new Tag('F#', 'darkviolet');
	static readonly HASKELL = new Tag('Haskell', 'plum');
	static readonly CRYSTAL = new Tag('Crystal', 'mediumturquoise');
	static readonly ELIXIR = new Tag('Elixir', 'goldenrod');
	static readonly OCAML = new Tag('OCaml', 'darkseagreen');
	static readonly PURESCRIPT = new Tag('PureScript', 'mediumblue');
	static readonly RACKET = new Tag('Racket', 'darkgoldenrod');
	static readonly RED = new Tag('Red', 'orangered');
	static readonly ZIG = new Tag('Zig', 'darkslategray');
	static readonly ASPNET = new Tag('AspNet', 'darkgrey');

	private constructor(private readonly key: string, public readonly color: string) {

	}

	toString(): string {
		return this.key;
	}
}