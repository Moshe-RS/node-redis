import { RedisCommandArguments } from '.';
import { pushVerdictArguments } from './generic-transformers';

export const FIRST_KEY_INDEX = 1;

export function transformArguments(destination: string, keys: string | Array<string>): RedisCommandArguments {
    return pushVerdictArguments(['SINTERSTORE', destination], keys);
}

export declare function transformReply(): Array<string>;
