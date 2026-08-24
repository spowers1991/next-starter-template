# Contributing

## allow-scripts policy

This project uses npm's allow-scripts workflow to reduce supply-chain risk from dependency lifecycle scripts.

### Why allow-scripts is used

Some dependencies execute install/postinstall scripts. Those scripts can run arbitrary code on your machine or CI runner. We only approve scripts that are required and safe.

### How to review pending scripts

After install, check what is waiting for approval:

```bash
npm approve-scripts --allow-scripts-pending
```

Review the package names and decide whether each script is expected for this project.

### How to approve safe scripts

Approve scripts after review:

```bash
npm approve-scripts
```

Commit the resulting lockfile/config changes so other contributors and CI use the same approvals.

### How CI/CD handles script approvals

CI/CD installs dependencies in a clean environment and relies on approved scripts tracked in the repository. If a new dependency introduces an unapproved script, CI should fail until the approval is reviewed and committed.
