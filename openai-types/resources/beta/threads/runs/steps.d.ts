import * as Core from "../../../../core.js";
import { APIResource } from "../../../../resource.js";
import * as StepsAPI from "./steps.js";
import { CursorPage, type CursorPageParams } from "../../../../pagination.js";
export declare class Steps extends APIResource {
    /**
     * Retrieves a run step.
     */
    retrieve(threadId: string, runId: string, stepId: string, options?: Core.RequestOptions): Core.APIPromise<RunStep>;
    /**
     * Returns a list of run steps belonging to a run.
     */
    list(threadId: string, runId: string, query?: StepListParams, options?: Core.RequestOptions): Core.PagePromise<RunStepsPage, RunStep>;
    list(threadId: string, runId: string, options?: Core.RequestOptions): Core.PagePromise<RunStepsPage, RunStep>;
}
export declare class RunStepsPage extends CursorPage<RunStep> {
}
/**
 * Text output from the Code Interpreter tool call as part of a run step.
 */
export interface CodeInterpreterLogs {
    /**
     * The index of the output in the outputs array.
     */
    index: number;
    /**
     * Always `logs`.
     */
    type: 'logs';
    /**
     * The text output from the Code Interpreter tool call.
     */
    logs?: string;
}
export interface CodeInterpreterOutputImage {
    /**
     * The index of the output in the outputs array.
     */
    index: number;
    /**
     * Always `image`.
     */
    type: 'image';
    image?: CodeInterpreterOutputImage.Image;
}
export declare namespace CodeInterpreterOutputImage {
    interface Image {
        /**
         * The [file](https://platform.openai.com/docs/api-reference/files) ID of the
         * image.
         */
        file_id?: string;
    }
}
/**
 * Details of the Code Interpreter tool call the run step was involved in.
 */
export interface CodeInterpreterToolCall {
    /**
     * The ID of the tool call.
     */
    id: string;
    /**
     * The Code Interpreter tool call definition.
     */
    code_interpreter: CodeInterpreterToolCall.CodeInterpreter;
    /**
     * The type of tool call. This is always going to be `code_interpreter` for this
     * type of tool call.
     */
    type: 'code_interpreter';
}
export declare namespace CodeInterpreterToolCall {
    /**
     * The Code Interpreter tool call definition.
     */
    interface CodeInterpreter {
        /**
         * The input to the Code Interpreter tool call.
         */
        input: string;
        /**
         * The outputs from the Code Interpreter tool call. Code Interpreter can output one
         * or more items, including text (`logs`) or images (`image`). Each of these are
         * represented by a different object type.
         */
        outputs: Array<CodeInterpreter.Logs | CodeInterpreter.Image>;
    }
    namespace CodeInterpreter {
        /**
         * Text output from the Code Interpreter tool call as part of a run step.
         */
        interface Logs {
            /**
             * The text output from the Code Interpreter tool call.
             */
            logs: string;
            /**
             * Always `logs`.
             */
            type: 'logs';
        }
        interface Image {
            image: Image.Image;
            /**
             * Always `image`.
             */
            type: 'image';
        }
        namespace Image {
            interface Image {
                /**
                 * The [file](https://platform.openai.com/docs/api-reference/files) ID of the
                 * image.
                 */
                file_id: string;
            }
        }
    }
}
/**
 * Details of the Code Interpreter tool call the run step was involved in.
 */
export interface CodeInterpreterToolCallDelta {
    /**
     * The index of the tool call in the tool calls array.
     */
    index: number;
    /**
     * The type of tool call. This is always going to be `code_interpreter` for this
     * type of tool call.
     */
    type: 'code_interpreter';
    /**
     * The ID of the tool call.
     */
    id?: string;
    /**
     * The Code Interpreter tool call definition.
     */
    code_interpreter?: CodeInterpreterToolCallDelta.CodeInterpreter;
}
export declare namespace CodeInterpreterToolCallDelta {
    /**
     * The Code Interpreter tool call definition.
     */
    interface CodeInterpreter {
        /**
         * The input to the Code Interpreter tool call.
         */
        input?: string;
        /**
         * The outputs from the Code Interpreter tool call. Code Interpreter can output one
         * or more items, including text (`logs`) or images (`image`). Each of these are
         * represented by a different object type.
         */
        outputs?: Array<StepsAPI.CodeInterpreterLogs | StepsAPI.CodeInterpreterOutputImage>;
    }
}
export interface FileSearchToolCall {
    /**
     * The ID of the tool call object.
     */
    id: string;
    /**
     * For now, this is always going to be an empty object.
     */
    file_search: unknown;
    /**
     * The type of tool call. This is always going to be `file_search` for this type of
     * tool call.
     */
    type: 'file_search';
}
export interface FileSearchToolCallDelta {
    /**
     * For now, this is always going to be an empty object.
     */
    file_search: unknown;
    /**
     * The index of the tool call in the tool calls array.
     */
    index: number;
    /**
     * The type of tool call. This is always going to be `file_search` for this type of
     * tool call.
     */
    type: 'file_search';
    /**
     * The ID of the tool call object.
     */
    id?: string;
}
export interface FunctionToolCall {
    /**
     * The ID of the tool call object.
     */
    id: string;
    /**
     * The definition of the function that was called.
     */
    function: FunctionToolCall.Function;
    /**
     * The type of tool call. This is always going to be `function` for this type of
     * tool call.
     */
    type: 'function';
}
export declare namespace FunctionToolCall {
    /**
     * The definition of the function that was called.
     */
    interface Function {
        /**
         * The arguments passed to the function.
         */
        arguments: string;
        /**
         * The name of the function.
         */
        name: string;
        /**
         * The output of the function. This will be `null` if the outputs have not been
         * [submitted](https://platform.openai.com/docs/api-reference/runs/submitToolOutputs)
         * yet.
         */
        output: string | null;
    }
}
export interface FunctionToolCallDelta {
    /**
     * The index of the tool call in the tool calls array.
     */
    index: number;
    /**
     * The type of tool call. This is always going to be `function` for this type of
     * tool call.
     */
    type: 'function';
    /**
     * The ID of the tool call object.
     */
    id?: string;
    /**
     * The definition of the function that was called.
     */
    function?: FunctionToolCallDelta.Function;
}
export declare namespace FunctionToolCallDelta {
    /**
     * The definition of the function that was called.
     */
    interface Function {
        /**
         * The arguments passed to the function.
         */
        arguments?: string;
        /**
         * The name of the function.
         */
        name?: string;
        /**
         * The output of the function. This will be `null` if the outputs have not been
         * [submitted](https://platform.openai.com/docs/api-reference/runs/submitToolOutputs)
         * yet.
         */
        output?: string | null;
    }
}
/**
 * Details of the message creation by the run step.
 */
export interface MessageCreationStepDetails {
    message_creation: MessageCreationStepDetails.MessageCreation;
    /**
     * Always `message_creation`.
     */
    type: 'message_creation';
}
export declare namespace MessageCreationStepDetails {
    interface MessageCreation {
        /**
         * The ID of the message that was created by this run step.
         */
        message_id: string;
    }
}
/**
 * Represents a step in execution of a run.
 */
export interface RunStep {
    /**
     * The identifier of the run step, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The ID of the
     * [assistant](https://platform.openai.com/docs/api-reference/assistants)
     * associated with the run step.
     */
    assistant_id: string;
    /**
     * The Unix timestamp (in seconds) for when the run step was cancelled.
     */
    cancelled_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run step completed.
     */
    completed_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run step was created.
     */
    created_at: number;
    /**
     * The Unix timestamp (in seconds) for when the run step expired. A step is
     * considered expired if the parent run is expired.
     */
    expired_at: number | null;
    /**
     * The Unix timestamp (in seconds) for when the run step failed.
     */
    failed_at: number | null;
    /**
     * The last error associated with this run step. Will be `null` if there are no
     * errors.
     */
    last_error: RunStep.LastError | null;
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful
     * for storing additional information about the object in a structured format. Keys
     * can be a maximum of 64 characters long and values can be a maxium of 512
     * characters long.
     */
    metadata: unknown | null;
    /**
     * The object type, which is always `thread.run.step`.
     */
    object: 'thread.run.step';
    /**
     * The ID of the [run](https://platform.openai.com/docs/api-reference/runs) that
     * this run step is a part of.
     */
    run_id: string;
    /**
     * The status of the run step, which can be either `in_progress`, `cancelled`,
     * `failed`, `completed`, or `expired`.
     */
    status: 'in_progress' | 'cancelled' | 'failed' | 'completed' | 'expired';
    /**
     * The details of the run step.
     */
    step_details: MessageCreationStepDetails | ToolCallsStepDetails;
    /**
     * The ID of the [thread](https://platform.openai.com/docs/api-reference/threads)
     * that was run.
     */
    thread_id: string;
    /**
     * The type of run step, which can be either `message_creation` or `tool_calls`.
     */
    type: 'message_creation' | 'tool_calls';
    /**
     * Usage statistics related to the run step. This value will be `null` while the
     * run step's status is `in_progress`.
     */
    usage: RunStep.Usage | null;
}
export declare namespace RunStep {
    /**
     * The last error associated with this run step. Will be `null` if there are no
     * errors.
     */
    interface LastError {
        /**
         * One of `server_error` or `rate_limit_exceeded`.
         */
        code: 'server_error' | 'rate_limit_exceeded';
        /**
         * A human-readable description of the error.
         */
        message: string;
    }
    /**
     * Usage statistics related to the run step. This value will be `null` while the
     * run step's status is `in_progress`.
     */
    interface Usage {
        /**
         * Number of completion tokens used over the course of the run step.
         */
        completion_tokens: number;
        /**
         * Number of prompt tokens used over the course of the run step.
         */
        prompt_tokens: number;
        /**
         * Total number of tokens used (prompt + completion).
         */
        total_tokens: number;
    }
}
/**
 * The delta containing the fields that have changed on the run step.
 */
export interface RunStepDelta {
    /**
     * The details of the run step.
     */
    step_details?: RunStepDeltaMessageDelta | ToolCallDeltaObject;
}
/**
 * Represents a run step delta i.e. any changed fields on a run step during
 * streaming.
 */
export interface RunStepDeltaEvent {
    /**
     * The identifier of the run step, which can be referenced in API endpoints.
     */
    id: string;
    /**
     * The delta containing the fields that have changed on the run step.
     */
    delta: RunStepDelta;
    /**
     * The object type, which is always `thread.run.step.delta`.
     */
    object: 'thread.run.step.delta';
}
/**
 * Details of the message creation by the run step.
 */
export interface RunStepDeltaMessageDelta {
    /**
     * Always `message_creation`.
     */
    type: 'message_creation';
    message_creation?: RunStepDeltaMessageDelta.MessageCreation;
}
export declare namespace RunStepDeltaMessageDelta {
    interface MessageCreation {
        /**
         * The ID of the message that was created by this run step.
         */
        message_id?: string;
    }
}
/**
 * Details of the Code Interpreter tool call the run step was involved in.
 */
export type ToolCall = CodeInterpreterToolCall | FileSearchToolCall | FunctionToolCall;
/**
 * Details of the Code Interpreter tool call the run step was involved in.
 */
export type ToolCallDelta = CodeInterpreterToolCallDelta | FileSearchToolCallDelta | FunctionToolCallDelta;
/**
 * Details of the tool call.
 */
export interface ToolCallDeltaObject {
    /**
     * Always `tool_calls`.
     */
    type: 'tool_calls';
    /**
     * An array of tool calls the run step was involved in. These can be associated
     * with one of three types of tools: `code_interpreter`, `file_search`, or
     * `function`.
     */
    tool_calls?: Array<ToolCallDelta>;
}
/**
 * Details of the tool call.
 */
export interface ToolCallsStepDetails {
    /**
     * An array of tool calls the run step was involved in. These can be associated
     * with one of three types of tools: `code_interpreter`, `file_search`, or
     * `function`.
     */
    tool_calls: Array<ToolCall>;
    /**
     * Always `tool_calls`.
     */
    type: 'tool_calls';
}
export interface StepListParams extends CursorPageParams {
    /**
     * A cursor for use in pagination. `before` is an object ID that defines your place
     * in the list. For instance, if you make a list request and receive 100 objects,
     * ending with obj_foo, your subsequent call can include before=obj_foo in order to
     * fetch the previous page of the list.
     */
    before?: string;
    /**
     * Sort order by the `created_at` timestamp of the objects. `asc` for ascending
     * order and `desc` for descending order.
     */
    order?: 'asc' | 'desc';
}
export declare namespace Steps {
    export import CodeInterpreterLogs = StepsAPI.CodeInterpreterLogs;
    export import CodeInterpreterOutputImage = StepsAPI.CodeInterpreterOutputImage;
    export import CodeInterpreterToolCall = StepsAPI.CodeInterpreterToolCall;
    export import CodeInterpreterToolCallDelta = StepsAPI.CodeInterpreterToolCallDelta;
    export import FileSearchToolCall = StepsAPI.FileSearchToolCall;
    export import FileSearchToolCallDelta = StepsAPI.FileSearchToolCallDelta;
    export import FunctionToolCall = StepsAPI.FunctionToolCall;
    export import FunctionToolCallDelta = StepsAPI.FunctionToolCallDelta;
    export import MessageCreationStepDetails = StepsAPI.MessageCreationStepDetails;
    export import RunStep = StepsAPI.RunStep;
    export import RunStepDelta = StepsAPI.RunStepDelta;
    export import RunStepDeltaEvent = StepsAPI.RunStepDeltaEvent;
    export import RunStepDeltaMessageDelta = StepsAPI.RunStepDeltaMessageDelta;
    export import ToolCall = StepsAPI.ToolCall;
    export import ToolCallDelta = StepsAPI.ToolCallDelta;
    export import ToolCallDeltaObject = StepsAPI.ToolCallDeltaObject;
    export import ToolCallsStepDetails = StepsAPI.ToolCallsStepDetails;
    export import RunStepsPage = StepsAPI.RunStepsPage;
    export import StepListParams = StepsAPI.StepListParams;
}
//# sourceMappingURL=steps.d.ts.map