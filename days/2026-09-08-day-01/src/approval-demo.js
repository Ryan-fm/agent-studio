function executePlan(plan, approval) {
  if (!approval || approval.version !== plan.version) {
    return { status: 'waiting_review' };
  }
  return { status: 'ready', tasks: plan.tasks };
}

const plan = { version: 1, tasks: ['创建任务', '修改状态'] };
console.log(executePlan(plan, null));
console.log(executePlan(plan, { version: 1 }));
console.log(executePlan({ ...plan, version: 2 }, { version: 1 }));
