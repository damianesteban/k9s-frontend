import { Table } from 'react-bootstrap';
import * as React from 'react';
import * as uuid from 'uuid';
import { CreateProjectDto, projectsService } from './services/api.service';

interface State {
  data: CreateProjectDto[];
}

// tslint:disable-next-line:variable-name
export class ProjectList extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    projectsService.fetchProjects()
      .then((response) => {
        console.log('response', response.data);
        this.setState({ data: response.data });
      })
      .catch(err => console.log(err));
    console.log('State is:', this.state);
  }

  componentDidUpdate() {
    console.log('Component updated, state is: ', this.state);
  }

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Project ID</th>
          <th>Project Name</th>
          <th>Articles</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(d =>
          <tr>
            <td>{uuid.v4()}</td>
            <td>{d.title}</td>
            <td>{d.articles.toString()}</td>
            <td>{d.tags.toString()}</td>
          </tr>)}
      </tbody>
    </Table>);
  }
}
