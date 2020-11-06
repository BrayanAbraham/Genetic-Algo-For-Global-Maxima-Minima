# Genetic Algorithm For Global Maxima Minima

Check out the Application [https://genetic-algorithm-for-global-maxima-minima.netlify.app/](https://genetic-algorithm-for-global-maxima-minima.netlify.app/)

<div style="text-align:center">
    <img src="./screenshots/Pic 3.png" width="50%"/>
</div>

This Application is made to find the Global Maxima or Minima for a
given equation using a Genetic Algorithm. This Algorithm takes certain
parameters for input and based on them finds the Global Maxima or
Minima. The Performance Graph shows the Best Current
Fitness and the best fitness found yet. The Y-Axis is the fitness
while X-Axis is the Generation number. Learn More at [https://genetic-algorithm-for-global-maxima-minima.netlify.app/](https://genetic-algorithm-for-global-maxima-minima.netlify.app/)

### Instructions to Use the Site

1. The variables in equation must be named as x1,x2,x3 and so on.
2. The population size must be greater that 10 individuals.
3. The Cross Probability and Mutate Probability must be between 0 and 1.
4. Ignore Range is to find the Global Maxima. If Ignore Range is off, the algorithm finds the Local Maxima or Minima.

### For Best Results:

Population Size = 100
Cross Probability = 0.3
Mutate Probability = 0.15.

### To use the Site on Local Host:

1. Download & Install Node.js
2. Clone or download Git repository
3. `cd ./Genetic-Algo-For-Global-Maxima-Minima`
4. `npm install`
5. `npm start`
6. In Browser Open `localhost:3000`

## The Algorithm

The Algorithm is in src/genAlgoClasses/

Individual.js contains the Fitness Function and Mutation function.<br/>
Population.js contains calculation of next generation and crossover.
