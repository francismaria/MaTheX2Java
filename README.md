<h1 align="center">
    <a href="#">MaTheX2Java</a>
</h1> 

<p align="center">
    <a href="#"><u>Web Application</u></a>
    <span> | </span>
    <a href="#"><u>User's Guide</u></a>

</p>

[![License: MIT](https://img.shields.io/badge/license-GPL%20(%3E%3D%202)-blue)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
[![Build Status](https://travis-ci.org/francismaria/MaTheX2Java.svg?branch=master)](https://travis-ci.org/francismaria/MaTheX2Java)

## What is it?

MaTheX2Java is a web application which converts mathematic LaTeX code to Java code, in real-time, capable of accepting
many of the well-known mathematic LaTeX formulas and covert them to fully operational, well-structured Java code. It provides
a great flexibility due to its _annotation_ capacity, that allows to specify customizable details about how the code is generated.

###### Note: MatheX2Java currently compiles and generates code according to version 2.1 of the amsmath package.

## What does it offer?

MaTheX2Java is a web application which translates in real-time LaTeX mathematic expressions to fully operational and well-structured Java code. This tool offers great functionalities by providing code flexibility due to its _annotation_ feature which leverages even more the power of translation by permitting its users to customize translation details on how the Java code should be generated. 

Currently, this application is available at http://mathex2java.com where users can easily interact and experiment with it.

###### Note: MatheX2Java currently compiles and generates code according to [version 2.1](https://www.latex-project.org/help/documentation/amsldoc.pdf) of the amsmath package.

## Who is it for?

Anyone. Well, anyone who likes mathematics. Mathematicians, physicists, programmers, scientists, etc, can all benefit from MaTheX2Java capabilities.
The possibility of converting mathematic formulas into real, executable code is of a great advantage, allowing to test and execute them with real values.

The fact that to be able to generate complex Java code is only necessary to have little LaTeX knowledge, makes it widely <i>usable</i> from anyone who 
can correctly apply the LaTeX rules.

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

### The simple one

Here is shown the basic functionality of **MaTheX2Java**. A simple equation which uses a factorial operation plus few other operations, including a cubic root function.

It is also observed that due to the *annotation features* you can specify the type of the variables of the equation as you wish as well as the method's name and its return type.

###### Note: *annotation features* are **optional**. If none is specified, then default values will be assumed during the code generation.

- ##### LaTeX code:

```
% name : example
% return : int
\begin{equation}
result = (3+y)! + 7 \times 3 + z - \sqrt[3]{27}
\end{equation}
```

- ##### Java code:

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

### The complex one

In this example, perhaps it is shown the most complex feature of **MaTheX2Java**: the use of summations.
Here you can see that it accepts nested summations, and it automatically casts variables when it needs to (for instance,
in the summation index variables).

Note that, due to the method name changing feature of the *annotations*, the method which represents the equation is now names as `myExampleEquation`
.

- ##### LaTeX code 

```
% name : myExampleEquation
\begin{equation}
a = \sum_{i = 0}^{1000}{ \sum_{j = 0}^{N}{  \sum_{k = 2}^{1000}{ j + i + k + c } } }
\end{equation}
```

- ##### Java code

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

## Technologies Used

The following technologies were used in this project:

* [antlr4](https://github.com/antlr/antlr4)

* [JEST](https://jestjs.io)

* [ESLint](https://eslint.org)

## Usage

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

## Development

If you'd like to contribute to the project or just want to test MaTheX2Java locally, you should follow these steps:

1. Pull necessary dependencies:

`$ npm install`

## License

This project is licensed under the GPLv2 license. Check [LICENSE](./LICENSE.md) for details.
