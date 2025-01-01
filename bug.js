```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /*some filter*/ }},
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //missing $ operator before value
  {$sort: {sum: -1}},
  {$limit: 10}
])
```