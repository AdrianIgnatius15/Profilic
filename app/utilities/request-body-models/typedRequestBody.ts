export interface TypedRequestBody<IVideo> extends Express.Request {
    body: IVideo;
}
