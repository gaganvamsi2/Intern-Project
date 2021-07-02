from airflow import DAG
from airflow.operators import BashOperator
from datetime import datetime, timedelta

# Following are defaults which can be overridden later on
default_args = {
    'owner': 'Gagan',
    'depends_on_past': False,
    'start_date': datetime(2021, 7, 2),
    'email': ['gaganvamsi2@gmail.com'],
    'email_on_failure': False,
    'email_on_retry': False,
   # 'schedule_interval':"@daily",
    'retries': 0,
    'retry_delay': timedelta(minutes=1),
}

dag = DAG('Example', default_args=default_args)

# t1, t2, t3 and t4 are examples of tasks created using operators

t1 = BashOperator(
    task_id='task_1',
    bash_command='echo "Hello World from Task 1"',
    dag=dag)

templated_command1 = """

curl --fail  --location --request GET 'https://g710506a63ec50c-demodb.adb.us-ashburn-1.oraclecloudapps.com/ords/root/may2018/' \
--header 'Authorization: Bearer RQTWMx_IGOgbS65GCoLm7w'; 
exit $?
"""
t2 = BashOperator(
    task_id='task_2',
    bash_command=templated_command1,
    dag=dag)



templated_command2 = """
curl --fail  --location --request GET 'https://g710506a63ec50c-demodb.adb.us-ashburn-1.oraclecloudapps.com/ords/root/may2018/' \
--header 'Authorization: Bearer qq4ctktSwa4TIH7Ywwwwfw'; 
exit $?
"""
t3 = BashOperator(
    task_id='task_3',
    bash_command=templated_command2,
    dag=dag)

t4 = BashOperator(
    task_id='task_4',
    bash_command='echo "Last Task Completed"',
    dag=dag)

t2.set_upstream(t1)
t3.set_upstream(t1)
t4.set_upstream(t2)
t4.set_upstream(t3)