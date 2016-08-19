Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

var GeneticAlgorithm = function () {};

GeneticAlgorithm.prototype.generate = function(length) {
  // TODO: Implement the generate method
  let res = "";
  for (let i = 0; i < length; i++)
    res += Math.floor((Math.random() * 2));
  return res;
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  // TODO: Implement the select method
  let prob = [];
  let totalfit = 0;
  for (let i = 0; i < fitnesses.length; i++)
    totalfit += fitnesses[i];
  prob.push(fitnesses[0]/ totalfit);
  for (let i = 1; i < fitnesses.length; i++)
    prob.push(fitnesses[i]/ totalfit + prob[i-1]);
  prob[0] = 0;
  prob[prob.length-1] = 1;
  let res = [];
  for (let j = 0; j < 2; j++)
  {
    let temp = Math.random();
    for (let i = 0; i < population.length-1; i++)
    {
      if (temp >= prob[i] && temp < prob[i+1])
      {
        res.push(population[i]);
        break;
      }
    }
  }
  return res;
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
  // TODO: Implement the mutate method
  chromosome = chromosome.split('');
  for (let i = 0; i < chromosome.length; i++)
  {
    if (Math.random() <= p)
      chromosome[i] = chromosome[i] == '0' ? '1' : '0';
  }
  return chromosome.join('');
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
  // TODO: Implement the crossover method
  let i = Math.random() * chromosome1.length;
  let f1 = chromosome1.substring(0, i);
  let f2 = chromosome2.substring(0, i);
  let l1 = chromosome1.substring(i, chromosome1.length);
  let l2 = chromosome2.substring(i, chromosome1.length);
  chromosome1 = f1 + l2;
  chromosome2 = f2 + l1;
  return chromosome1;
};

GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations) {
  // TODO: Implement the run method
  iterations = 500;
  let population = [], fit = [];
  for (let i = 0; i < 100; i++)
  {
    let c = this.generate(length);
    let f = fitness(c);
    population.push(c);
    fit.push(f);
  }
  for (let i = 0; i < iterations; i++)
  {
    let newpop = [];
    let newfit = [];
    while (newpop.length < population.length)
    {
      let pair = this.select(population, fit);
      let c1 = pair[0], c2 = pair[1];
      if (Math.random() <= p_c)
        c1 = this.crossover(c1, c2);
      if (Math.random() <= p_c)
        c2 = this.crossover(c1, c2);
      c1 = this.mutate(c1, p_m);
      c2 = this.mutate(c2, p_m);
      newpop.push(c1);
      newpop.push(c2);
      newfit.push(fitness(c1));
      newfit.push(fitness(c2));
    }
    population = newpop.slice();
    fit = newfit.slice();
  }
  let maxfit = Math.max.apply(null, fit);
  let maxind = fit.indexOf(maxfit);
  console.log(maxfit);
  return population[maxind];
};
