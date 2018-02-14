export default ( app: any ): void => {
  app.get ( '/', ( req: any, res: any ): void => 
    res.send ( 'Hello World' ));
};
