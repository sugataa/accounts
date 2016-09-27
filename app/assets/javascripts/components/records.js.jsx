var Records = React.createClass({
  getInitialState: function() {
    return { records: this.props.data };
  },

  getDefaultProps: function() {
    return { records: [] };
  },

  addRecord: function(record) {
    var record = this.records.slice();
    records.push(record);
    this.setState({ records: records });
  },

  render: function() {
    return (
     <div className='records'>
      <h2 className='title'>
        Records
      </h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.state.records.map(function(record) {
            return <Record key={record.id} record={record}/>
          })}
        </tbody>
      </table>
     </div>
    )
  }

})