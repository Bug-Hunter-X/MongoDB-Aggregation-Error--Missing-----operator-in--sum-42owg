```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /*some filter*/ }},
  {$group: {_id: "$field", sum: {$sum: $value}}}, //added $ before value
  {$sort: {sum: -1}},
  {$limit: 10}
])
```