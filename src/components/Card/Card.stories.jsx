import Card from './Card';

export default {
  title: 'MyLibrary/Card',
  component: Card,
}

const Template = (args) => {
  return (
    <div className="container">
      <Card {...args}/>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  title: 'Your title',
  tag: 'food',
  mainImage: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJ8fHx8fHwxNjUyMDg2MTY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  description: 'Here is some description',
  author: 'Anton',
  avatar: "https://i.pravatar.cc/40?img=1",
  date: '10.05.2022'
}
