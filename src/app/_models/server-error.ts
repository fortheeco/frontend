/**
 * @description Errors sent back from the server
 */
export interface IServerError {
    error: string;
    environment: string;
    errors: {};
    stackTrace: string[];
  }
