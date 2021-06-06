<h1 align="center">
    <a href="http://mathex2java.com">MaTheX2Java</a>
</h1> 

<p align="center">
    <a href="#"><u>User's Guide</u></a>
</p>

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
- [Development Guidelines](#Development-Guidelines)
  - [Technologies Used](#Technologies-used)
  - [Local Setup](#Local-setup)
  - [Contribution](#Contribution)
- [License](#License)

-------------

## Introduction

### What is it?

MaTheX2Java is a web application which converts mathematic LaTeX code to Java code in real-time. Is is capable of translating
many of the well-known mathematic LaTeX formulas and covert them to fully operational, well-structured Java code. It provides
great flexibility due to its _annotation_ capacity which leverages even more the power of translation by permitting its users to customize translation details on how the code should be generated.

###### Note: MatheX2Java currently compiles and generates code according to [version 2.1](https://www.latex-project.org/help/documentation/amsldoc.pdf) of the amsmath package.

### Who is it for?

Anyone. Well, anyone who likes mathematics. Mathematicians, physicists, programmers, scientists, etc, can all benefit from MaTheX2Java capabilities.
The possibility of converting mathematic formulas into real, executable code given simple to write LaTeX equations is of a great advantage, allowing users to easily test and execute such equations with different values.

The fact that to be able to generate complex Java code is only necessary to have little LaTeX knowledge, makes it widely <i>usable</i> from anyone who 
can correctly apply the supported LaTeX rules.

### What does it offer?

- **Quality**: the generated code is well-structured and correctly formatted.
- **Easy-to-use**: intuitive interaction within the application.
- **Flexibility**: allows a high degree of specification targeted on how the user wants the Java code to be generated, due to the _annotations features_.
- **No Prior Java Knowledge**: it is not required that an user has knowledge on how Java works in order to generate the formulas' code.
- **Continuous Development**: MaTheX2Java aims to be regularly updated with bug fixes, new and extended features, as well as continuous support for the development of the application.

### What does it not offer?

- **case**: default
- **case**: default
- **case**: default

## Translation Examples

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

## Development Guidelines

### Technologies Used

<table align="center">
	<tr>
		<td align="center"><a href="https://developer.mozilla.org/en-EN/docs/Web/JavaScript">JavaScript</a></td>
		<td align="center"><a href="https://github.com/antlr/antlr4">Antlr4</a></td>
		<td align="center"><a href="https://jestjs.io">Jest</a></td>
		<td align="center"><a href="https://eslint.org">ESLint</a></td>
	</tr>
	<tr>
		<td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" width="80" height="80" /></td>
		<td align="center"><img src="https://raw.githubusercontent.com/mike-lischke/vscode-antlr4/master/misc/antlr-logo.png" width="90" height="90" /></td>
		<td align="center"><img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="100" height="100" /></td>
		<td align="center"><img src="https://jestjs.io/pt-BR/img/opengraph.png" width="100" /></td>
	</tr>
</table>

### Local Setup

##### Prerequisites

1. Antlr4

``

If you'd like to contribute to the project or just want to test MaTheX2Java locally, please follow the below steps:

1. Pull necessary dependencies:

`$ npm install`

#### Branches

There are two main branches in this repository:

- `master`: used for promotion of changes to the live environment (to our users).
- `development`: used for aggregating changes to be pushed to `master` for deployment of a new version of the application (beta stage). Note that before pushing to master all the action items/features for a specific version must be first implemented. This however is overriden when a hotfix is to be deployed.

When developing new features, bug fixes or any other change a new branch forked from `development` must be created. Ideally this should be one per issue.
These shall follow a naming format:

- `fix/<succint-name>`: used for fixing bugs or unwanted issues.
- `dev/<succint-name>`: used for refactors and development-related issues (e.g. testing).
- `feature/<succint-name>`: used for the implementation of features.

### Contribution

Please refer to the [CONTRIBUTION](./CONTRIBUTION.md) for simple guidelines on how to contribute to this project.

## License

This project is licensed under the GPLv2 license. Check [LICENSE](./LICENSE) for details.
