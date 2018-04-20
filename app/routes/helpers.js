exports.checkAdminOrOwner = model => async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    next();
    return;
  }
  const instance = await model.findById(ctx.params.id);
  if (instance.userId !== ctx.state.user.id) {
    ctx.status = 403;
    return
  }
  next();
};
