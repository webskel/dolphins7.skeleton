export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

/** Autogenerated return type of CompleteTask. */
export type CompleteTaskPayload = {
  __typename?: 'CompleteTaskPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

/** Autogenerated return type of CreateTask. */
export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  errors: Array<Scalars['String']['output']>;
};

/** Autogenerated return type of DestroyTask. */
export type DestroyTaskPayload = {
  __typename?: 'DestroyTaskPayload';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  completeTask?: Maybe<CompleteTaskPayload>;
  createTask?: Maybe<CreateTaskPayload>;
  destroyTask?: Maybe<DestroyTaskPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
};


export type MutationCompleteTaskArgs = {
  taskId: Scalars['Int']['input'];
};


export type MutationCreateTaskArgs = {
  input: TaskInput;
};


export type MutationDestroyTaskArgs = {
  taskId: Scalars['Int']['input'];
};


export type MutationUpdateTaskArgs = {
  input: TaskInput;
  taskId: Scalars['Int']['input'];
};

export type Project = {
  __typename?: 'Project';
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  tasks: Array<Task>;
};

export type Query = {
  __typename?: 'Query';
  findTask?: Maybe<Task>;
  projects: Array<Project>;
  tasks: Array<Task>;
};


export type QueryFindTaskArgs = {
  taskId: Scalars['Int']['input'];
};


export type QueryTasksArgs = {
  status: TaskStatus;
};

export type QueryTasksArgs = {
  status: TaskStatus;
};

export type Task = {
  __typename?: "Task";
  content: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  inProgress: Scalars["Boolean"]["output"];
  isBacklogged: Scalars["Boolean"]["output"];
  isComplete: Scalars["Boolean"]["output"];
  isReady: Scalars["Boolean"]["output"];
  project: Project;
  status: TaskStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type TaskInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  projectId?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<TaskStatus>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TaskStatus {
  Backlog = "backlog",
  Complete = "complete",
  InProgress = "in_progress",
  Ready = "ready",
}

/** Autogenerated return type of UpdateTask. */
export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  errors: Array<Scalars['String']['output']>;
};
