import React from 'react'

function List() {
  return (
    <>
      	<section class="main">
		<input class="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ul class="todo-list">
			<li>
				<div class="view">
					<input class="toggle" type="checkbox" />
					<label>Learn React</label>
					<button class="destroy"></button>
				</div>
			</li>
		</ul>
	</section>

	<footer class="footer">
		<span class="todo-count">
			<strong>2</strong>
			items left
		</span>

		<ul class="filters">
			<li>
				<a href="#/" class="selected">All</a>
			</li>
			<li>
				<a href="#/">Active</a>
			</li>
			<li>
				<a href="#/">Completed</a>
			</li>
		</ul>

		<button class="clear-completed">
			Clear completed
		</button>
	</footer>
    </>
  )
}

export default List
