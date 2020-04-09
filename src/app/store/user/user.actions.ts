import { Action } from '@ngrx/store';
import { User, EmailPasswordCredentials } from './user.models';

export enum Types {
    INIT = '[User] Init: Start',
    INIT_AUTHORIZED = '[User] Init: Authorized',
    INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
    INIT_ERROR = '[User] Init: Error',

    SIGN_IN_EMAIL = '[User] Sign In with email: Start',
    SIGN_IN_EMAIL_SUCCESS = '[User] Sign In with email: Success',
    SIGN_IN_EMAIL_ERROR = '[User] Sign In with email: Error',

    SIGN_UP_EMAIL = '[User] Sign Up with email: Start',
    SIGN_UP_EMAIL_SUCCESS = '[User] Sign Up with email: Success',
    SIGN_UP_EMAIL_ERROR = '[User] Sign Up with email: Error',

    SIGN_OUT = '[User] Sign Out: Start',
    SIGN_OUT_SUCCESS = '[User] Sign Out: Success',
    SIGN_OUT_ERROR = '[User] Sign Out: Error',
}

// Init

export class Init implements Action {
    readonly type = Types.INIT;
    constructor() { }
}

export class InitAuthorized implements Action {
    readonly type = Types.INIT_AUTHORIZED;
    constructor(public uid: string, public user: User) { }
}

export class InitUnauthorized implements Action {
    readonly type = Types.INIT_UNAUTHORIZED;
    constructor() { }
}

export class InitError implements Action {
    readonly type = Types.INIT_ERROR;
    constructor(public error: string) { }
}


// Sign In

export class SignInEmail implements Action {
    readonly type = Types.SIGN_IN_EMAIL;
    constructor(public credentials: EmailPasswordCredentials) { }
}

export class SignInEmailSuccess implements Action {
    readonly type = Types.SIGN_IN_EMAIL_SUCCESS;
    constructor(public uid: string, public user: User) { }
}

export class SignInEmailError implements Action {
    readonly type = Types.SIGN_IN_EMAIL_ERROR;
    constructor(public error: string) { }
}

// Sign Up

export class SignUpEmail implements Action {
    readonly type = Types.SIGN_UP_EMAIL;
    constructor(public credentials: EmailPasswordCredentials) { }
}

export class SignUpEmailSuccess implements Action {
    readonly type = Types.SIGN_UP_EMAIL_SUCCESS;
    constructor(public uid: string) { }
}

export class SignUpEmailError implements Action {
    readonly type = Types.SIGN_UP_EMAIL_ERROR;
    constructor(public error: string) { }
}

// Sign Out

export class SignOut implements Action {
    readonly type = Types.SIGN_OUT;
    constructor() { }
}

export class SignOutSuccess implements Action {
    readonly type = Types.SIGN_OUT_SUCCESS;
    constructor() { }
}

export class SignOutError implements Action {
    readonly type = Types.SIGN_OUT_ERROR;
    constructor(public error: string) { }
}

export type All
    = Init
    | InitAuthorized
    | InitUnauthorized
    | InitError
    | SignInEmail
    | SignInEmailSuccess
    | SignInEmailError
    | SignUpEmail
    | SignUpEmailSuccess
    | SignUpEmailError
    | SignOut
    | SignOutSuccess
    | SignOutError;
