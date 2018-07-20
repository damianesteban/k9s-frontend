import * as axios from 'axios';
import * as localforage from 'localforage';

const mockData: CreateProjectDto[] = [
  // tslint:disable:max-line-length
  {  title: 'Bob Project', articles: ['1', '33', '5', '66'], tags: ['space', 'weiners', 'babies'] },
  {  title: 'Man Project', articles: ['77', '2', '7', '66'], tags: ['jerks', 'weiners', 'babies'] },
  {  title: 'Go Go Project', articles: ['87', '222', '117', '656'], tags: ['balls', 'teegs'] },
];

export interface CreateProjectDto {
  title: string;
  articles: string[];
  tags: string[];
}

localforage.config({
  driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
  name       : 'myApp',
  version     : 1.0,
  size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
  description : 'some description',
});

export class ApiService {

  adapter: axios.AxiosInstance;

  constructor() {
    this.adapter = axios.default.create({
      url: 'http://auth-svc.default.svc.cluster.local',
    });
  }

  signup = (email: string, password: string) =>
    this.adapter.post('/signup', {
      email, password,
    }).then(res => 'NewUser')

  login = (email: string, password: string) =>
    this.adapter.post('/auth', {
      email, password,
    }).then(res => localforage.setItem('TOKEN', res.data.token))

  currentSession = (): Promise<boolean> =>
    localforage.getItem('TOKEN')
      .then(value => true)
      .catch(err => false)

  signout = () =>
    localforage.removeItem('TOKEN')

  fetchProjects = () =>
    new Promise<CreateProjectDto[]>((resolve, reject) => resolve(mockData))
}

Object.freeze(ApiService);

export const apiService = new ApiService();

export class ProjectsService {

  adapter: axios.AxiosInstance;

  constructor() {
    this.adapter = axios.default.create({
      url: 'http://projects-svc.default.svc.cluster.local',
    });
  }

  createProject = (createProjectDto: CreateProjectDto) =>
    this.adapter.post('/api/projects', {
      project: createProjectDto,
    })

  fetchProjects = () =>
    this.adapter.get('/api/projects')
}

Object.freeze(ProjectsService);

export const projectsService = new ProjectsService();
