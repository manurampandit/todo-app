export default function() {
  this.get("todos", schema => {
    return schema.todos.all();
  });

  this.post("todos", (schema, { requestBody }) => {
    requestBody = JSON.parse(requestBody);
    let obj = schema.db.todos.insert(requestBody);
    obj.data.id = obj.id;
    return obj;
  });
}
