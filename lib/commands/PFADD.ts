import { RedisCommandArguments } from '.';
import { pushVerdictArguments, transformReplyBoolean } from './generic-transformers';

export const FIRST_KEY_INDEX = 1;

export function transformArguments(key: string, element: string | Array<string>): RedisCommandArguments {
    return pushVerdictArguments(['PFADD', key], element);
}

export const transformReply = transformReplyBoolean;
