<h1 align="center">
    <a href="http://mathex2java.com">MaTheX2Java</a>
</h1> 

<p align="center">
    <a href="http://mathex2java.com"><u>Web Application</u></a>
    <span> | </span>
    <a href="http://mathex2java.com/rules"><u>User's Guide</u></a>

</p>

[![Node.js CI](https://github.com/francismaria/mathex2java-translator/actions/workflows/nodejs.ci.yml/badge.svg?branch=main)](https://github.com/francismaria/mathex2java-translator/actions/workflows/nodejs.ci.yml)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/francismaria/mathex2java-translator/graphs/commit-activity)
[![License: MIT](https://img.shields.io/badge/license-GPL%20(%3E%3D%202)-blue)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

## Table of Contents

- [Introduction](#Introduction)
  - [What is it?](#What-is-it)
  - [Who is it for?](#Who-is-it-for)
  - [What does it offer?](#What-does-it-offer)
  - [What does it not offer?](#What-does-it-not-offer)
- [Translation Examples](#Translation-Examples)
  - [A simple one](#a-simple-one)
  - [A complex one](#a-complex-one)
- [Technologies Used](#Technologies-used)
- [Contribution](#Contribution)
- [License](#License)

-------------

# Introduction

### What is it?

MaTheX2Java is a web application which translates in real-time LaTeX mathematic expressions to fully operational and well-structured Java code. This tool offers great functionalities by providing code flexibility due to its _annotation_ feature which leverages even more the power of translation by permitting its users to customize translation details on how the Java code should be generated.

###### Note: MatheX2Java currently compiles and generates code according to [version 2.1](https://www.latex-project.org/help/documentation/amsldoc.pdf) of the amsmath package.

### Who is it for?

Anyone. Well, anyone who likes mathematics. Mathematicians, physicists, programmers, scientists, etc, can all benefit from MaTheX2Java capabilities.
The possibility of converting mathematic formulas written in LaTeX into real, executable code is of a great advantage, allowing non-experienced programming users to easily test and execute different formulas in real-time and without the effort of requiring any prior Java knowledge making it a widely usable tool for anyone interested in running commputations of LaTeX-defined math formmulas.

### What does it offer?

- **Quality**: the generated code is well-structured and correctly formatted due to the detailed translation process.
- **Easy-to-use**: intuitive interaction within the application.
- **No Prior Java Knowledge**: it is not required that an user has knowledge on how Java works in order to generate the executable code.
- **Dedicated Grammars**: the tool is built on two dedicated grammars targeting the different use-cases an user may follow. This provides flexibility and scalability on maintaining and adding features to it. 
- **Flexibility**: allows a high degree of customization targeted on how the user wants the Java code to be generated, due to the _annotations features_.
- **Continuous Development**: MaTheX2Java aims to be regularly updated with bug fixes, new and extended features, as well as continuous support for the development of the application.

### What does it not offer?

- **Complete Support for LaTeX Symbols**: only a subset of the supported LaTeX symbols are currently supported ([list of supported symbols](http://mathex2java.com/rules)).
- **Real-Time Code Execution**: this application focuses on code translation only. There is no support for running automatically the generated Java code.
- **Reverse Translation**: at the moment there are no plans to support the reverse translation workflow (Java code to LaTeX formulas).

- **Complete Support for LaTeX Symbols**: only a subset of the supported LaTeX symbols are currently supported ([list of supported symbols](http://mathex2java.com/rules)).
- **Reverse Translation**: at the moment there are no plans to support the reverse translation workflow (Java code to LaTeX formulas).

# Translation Examples

Below you can find two examples (both a simple and a complex one) to showcase some of the vast features this application offers and how the final translation looks like. Please address to the [examples](http://mathex2java.com/rules) page of the application for more of these.

### A simple one

This example presents basic functionalities of **MaTheX2Java**. In this case, it is requested the translation of a simple LaTeX equation which uses a factorial plus few other operations, including a cubic root function.

##### LaTeX code

```
% name : example
% return : int
\begin{equation}
result = (3+y)! + 7 \times 3 + z - \sqrt[3]{27}
\end{equation}
```

##### Java code

```java
import java.lang.Math;
import java.util.Arrays;

public class GeneratedAmsmath_30_9_2019_13_33_30 {

	public static int example(double y, double z){
		int result;
		
		result = (int) (factorial_MX2J((int)(3 + y)) + 7 * 3 + z - Math.pow(27, 1/3));
		
		return result;
	}

	public static int factorial_MX2J(int n){
		if(n < 0)
			return 0;
		else if(n == 0)
			return 1;
		else
			return (n * factorial_MX2J(n-1));
	}
	
	public static void main(String[] args){
		
		// --- example ---
		
		double y = 1.0;
		double z = 1.0;
		
		example(y,z);
	}
}
```

It can be observed that due to the *annotation features* of this application the user is free to specify the type of the equation's variables as well as the method's name or its return type.

###### Note: *annotation features* are **optional**. If none is specified, then default values will be assumed during the code generation.

### A complex one

In this example, more complex features of **MaTheX2Java** are presented: the use of summations.
It is shown that summations as well as nested summations are supported, and it automatically casts variables when it needs to (for instance,
in the summation index variables).

##### LaTeX code 

```
% name : myExampleEquation
\begin{equation}
a = \sum_{i = 0}^{1000}{ \sum_{j = 0}^{N}{  \sum_{k = 2}^{1000}{ j + i + k + c } } }
\end{equation}
```

##### Java code

```java
import java.lang.Math;
import java.util.Arrays;

public class GeneratedAmsmath_29_9_2019_20_47_19 {

	public static double myExampleEquation(int N, double c){
		double a;
		
		a = (double) (summation_MX2J_0(0, 1000, (int)N, c));
		
		return a;
	}

	public static double summation_MX2J_0(int lowerBound, int upperBound, int N, double c){
		double sum = 0;
		int i = lowerBound;
		
		for(; i < upperBound; i++){
			sum += summation_MX2J_1(0, N, i, c);
		}
		
		return sum;
	}
	
	public static double summation_MX2J_1(int lowerBound, int N, int i, double c){
		double sum = 0;
		int j = lowerBound;
		
		for(; j < N; j++){
			sum += summation_MX2J_2(2, 1000, j, i, c);
		}
		
		return sum;
	}
	
	public static double summation_MX2J_2(int lowerBound, int upperBound, int j, int i, double c){
		double sum = 0;
		int k = lowerBound;
		
		for(; k < upperBound; k++){
			sum += j + i + k + c;
		}
		
		return sum;
	}
	
	public static void main(String[] args){
		
		// --- myExampleEquation ---
		
		int N = 1;
		double c = 1.0;
		
		myExampleEquation(N,c);
	}
}
```

Note the use of the *annotation* feature to rename the default method to be generated to `myExampleEquation`.

# Usage

MaTheX2Java allows clients to use it in differents ways.

### Web Application

A publicly available website is available for use at: http://mathex2java.com.

### JavaScript Target

This application can also be integrated in a web application by importing the minified bundle from the script.

```html
<!-- Import Script -->
<script src="/dist/mathex2java.js"></script>
```
```javascript
// Run instance of mathex2java
function runTranslation(inputCode) {
    return MaThex2Java.CompilerExecutor.runner(inputCode);
}
```

# Technologies Used

<table align="center">
	<tr>
		<td align="center"><a href="https://developer.mozilla.org/en-EN/docs/Web/JavaScript">JavaScript</a></td>
		<td align="center"><a href="https://github.com/antlr/antlr4">Antlr4</a></td>
		<td align="center"><a href="https://eslint.org">ESLint</a></td>
		<td align="center"><a href="https://jestjs.io">Jest</a></td>
	</tr>
	<tr>
		<td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" width="80" height="80" /></td>
		<td align="center"><img src="https://raw.githubusercontent.com/mike-lischke/vscode-antlr4/master/misc/antlr-logo.png" width="90" height="90" /></td>
		<td align="center"><img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="100" height="100" /></td>
		<td align="center"><img src="https://jestjs.io/pt-BR/img/opengraph.png" width="100" /></td>
	</tr>
</table>

# Contribution

Please refer to the [CONTRIBUTION](./CONTRIBUTION.md) guide to start contributing to this project.

# License

This project is licensed under the GPLv2 license. Check [LICENSE](./LICENSE) for details.
