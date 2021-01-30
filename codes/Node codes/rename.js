const fs = require('fs');
const path = require("path");
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const folder = prompt(chalk.red("Enter Path : "));
// const keyword = prompt(chalk.red("Enter Starting_Keyword : "));
const series = ["Artificial Intelligence Syllabus Discussion and Analysis for NTA UGC NET", "What is Artificial Intelligence | Learn AI with Real Life Examples | Can Machine Think??", "What is State Space Search | Introduction to Problem Solving in Artificial Intelligence", "Uninformed Vs Informed Search in Artificial Intelligence with Example", "Breadth First Search with example | Uninformed Search | Artificial Intelligence", "Depth First Search (DFS) with example | Uninformed Search | Artificial Intelligence", "Bidirectional Search Algorithm in Artificiali Intelligence in Hindi with Real Life Examples", "8-Puzzle Problem in Artificial Intelligence without Heuristic | All Imp Points | Must Watch", "What is Heuristic in AI | Why we use Heuristic | How to Calculate Heuristic | Must Watch", "How to Solve 8-Puzzle Problem with Heuristic(Informed Search) in Artificial Intelligence", "Generate and Test Search in Artificial Intelligence with Real life Examples | Heuristic Search", "Best First Search Algorithm in Artificial Intelligence | How it Works | All Imp Points(Pros & Cons)", "Beam Search Algorithm in Artificial Intelligence | All Imp Points | Heuristic Search Techniques", "Hill Climbing Algorithm in Artificial Intelligence with Real Life Examples| Heuristic Search", "A* algorithm in AI (artificial intelligence) in HINDI | A* algorithm with example", "How to Proof A* Admissible| Underestimation & Overestimation of A* in Hindi |Artificial Intelligence", "AO* algorithm in AI (artificial intelligence) in HINDI | AO* algorithm with example", "Introduction to Game Playing in Artificial Intelligence | Learn Game Playing Algorithms with Example", "Minimax Algorithm in Game Playing | Artificial Intelligence", "Alpha Beta Pruning in Hindi with Example | Artificial Intelligence", "Knowledge Representation and Reasoning in Artificial Intelligence | Logic, Semantic Net, Frames etc", "Propositional Logic in Artificial Intelligence in Hindi | Knowledge Represenatation| All Imp Points", "Introduction to Intelligent Agents and their types with Example in Artificial Intelligence", "Simple Reflex Agent in Artificial Intelligence with Example | Artificial Intelligence", "Model Based Reflex Agent in Artificial Intelligence in HINDI with Real Life Examples", "Goal Based Agents in Artificial Intelligence with real life examples in HINDI", "Utility Based Agents in Artificial Intelligence in Hindi with real life examples", "Fuzzy Logic in Artificial Intelligence with Example | Artificial Intelligence", "Various Operations in Fuzzy Logic with Example | Union, Intersection, Complement etc.", "Introduction to Neural Networks with Example in HINDI | Artificial Intelligence", "Natural Language Processing in Artificial Intelligence in Hindi | NLP with Demo and Examples", "Supervised, Unsupervised and Reinforcement Learning in Artificial Intelligence in Hindi", "Genetic Algorithm in Artificial Intelligence in Hindi | Simplest Explanation with real life examples", "What is Constraint Satisfaction | Constraint Satisfaction Problem(CSP) in AI with Example", "How Constraint Satisfaction Algorithm Works | Explained with Interesting Example | AI"];

fs.readdir(folder,(err,files)=>{
    if(err){
		console.log(chalk.red("Location Not found!!!"));
		return; 
    }else{
		console.log(chalk.green("Location found!!!"));
		let i = 10;
		let count = 1;
		files.forEach((alien)=>{
			let info = path.parse(`${folder}\\${alien}`);
			try{
				series.forEach((name)=>{
					if(info.name.replace('(360p)',"").replace('(480P)',"")==name.replace(/[|]/g,"_")){
						console.log(info.name,'\n'+name.replace(/[ ]/g,"_").replace(/[|]/g,"_") , count++)	
						fs.renameSync(`${folder}\\${alien}`,`${folder}\\#${series.indexOf(name)}${alien}`)						
					}
				});
				console.log(info.name.replace('(360p)',"").replace('(480P)',""));
			}catch(err){
				
			}
			// fs.renameSync(`${folder}\\${alien}`,`${folder}\\${keyword}${i}.jpg`);
			i--;
		});
		// console.log(files.length);
		console.log(chalk.green("Renaming is Completed"));
		console.log(series);
    }
});

