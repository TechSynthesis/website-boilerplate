import classes from './index.module.scss'

export default function CenteredBrandText() {
  return (
    <section className={classes.CenteredBrandText}>
      <div className={classes.textBlock}>
        <h2 className={classes.gradientText}>CMW is an all-in-</h2>
        <h2 className={classes.gradientText}>Solution</h2>
      </div>
      <div className={classes.textBlock}>
        <h2 className={classes.gradientText}>Loved by the leading</h2>
        <h2 className={classes.gradientText}>Manufacturing Companies in the world.</h2>
      </div>
    </section>
  )
}
