# MongoDB Aggregation Error: Missing '$' operator in $sum
This repository demonstrates a common error in MongoDB aggregation pipelines:  forgetting to prefix a field with the '$' operator within the $sum accumulator.
The `bug.js` file contains code with this error. The incorrect aggregation pipeline leads to unexpected results because MongoDB interprets the field name literally instead of as a field reference.
The `bugSolution.js` file provides a corrected version of the aggregation pipeline.