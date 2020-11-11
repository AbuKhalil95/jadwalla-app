import * as React from "react";
import Paper from "@material-ui/core/Paper";
import $ from "jquery";
import {
  ViewState,
  EditingState,
  IntegratedEditing
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  DayView,
  DateNavigator,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog
} from "@devexpress/dx-react-scheduler-material-ui";
import { connectProps } from "@devexpress/dx-react-core";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Notes from "@material-ui/icons/Notes";
import Close from "@material-ui/icons/Close";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Create from "@material-ui/icons/Create";
import axios from "axios";
// import { appointments } from "./data";

const containerStyles = theme => ({
  container: {
    width: theme.spacing(68),
    padding: 0,
    paddingBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    paddingTop: 0
  },
  header: {
    overflow: "hidden",
    paddingTop: theme.spacing(0.5)
  },
  closeButton: {
    float: "right"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 2)
  },
  button: {
    marginLeft: theme.spacing(2)
  },
  picker: {
    marginRight: theme.spacing(2),
    "&:last-child": {
      marginRight: 0
    },
    width: "50%"
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0)
  },
  icon: {
    margin: theme.spacing(2, 0),
    marginRight: theme.spacing(2)
  },
  textField: {
    width: "100%"
  }
});

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

class AppointmentFormContainerBasic extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      appointmentChanges: {}
    };

    this.getAppointmentData = () => {
      const { appointmentData } = this.props;
      return appointmentData;
    };
    this.getAppointmentChanges = () => {
      const { appointmentChanges } = this.state;
      return appointmentChanges;
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeAppointment = this.changeAppointment.bind(this);
    this.commitAppointment = this.commitAppointment.bind(this);
  }
  handleChange = () =>
    function(e) {
      this.setState({
        title: e.target.value
      });
    };
  changeAppointment({ field, changes }) {
    const nextChanges = {
      ...this.getAppointmentChanges(),
      [field]: changes
    };
    this.setState({
      appointmentChanges: nextChanges
    });
  }

  commitAppointment(type) {
    const { commitChanges } = this.props;
    const appointment = {
      ...this.getAppointmentData(),
      ...this.getAppointmentChanges()
    };
    if (type === "deleted") {
      commitChanges({ [type]: appointment._id });
    } else if (type === "changed") {
      commitChanges({ [type]: { [appointment._id]: appointment } });
    } else {
      commitChanges({ [type]: appointment });
    }
    this.setState({
      appointmentChanges: {}
    });
  }

  render() {
    const {
      classes,
      visible,
      visibleChange,
      appointmentData,
      cancelAppointment,
      target,
      onHide
    } = this.props;
    const { appointmentChanges } = this.state;

    const displayAppointmentData = {
      ...appointmentData,
      ...appointmentChanges
    };
    var li = window.location.pathname.slice(7);
    console.log(li);
    const isNewAppointment = appointmentData._id === undefined;
    const applyChanges = isNewAppointment
      ? () => {
          this.commitAppointment("added");
          axios.post("/Appointments", {
            title: this.state.appointmentChanges.title,
            startDate: this.state.appointmentChanges.startDate,
            endDate: this.state.appointmentChanges.endDate,
            notes: this.state.appointmentChanges.notes,
            type: this.state.appointmentChanges.type,
            shopId: li
          });
          console.log("if new", this.state.appointmentChanges);
        }
      : () => {
          this.commitAppointment("changed");
          axios.post("/Appointments", this.state.appointmentChanges);
          console.log("old", this.state.appointmentChanges);
        };

    const textEditorProps = field => ({
      variant: "outlined",
      onChange: ({ target: change }) =>
        this.changeAppointment({
          field: [field],
          changes: change.value
        }),
      value: displayAppointmentData[field] || "",
      label: field[0].toUpperCase() + field.slice(1),
      className: classes.textField
    });

    const pickerEditorProps = field => ({
      className: classes.picker,
      // keyboard: true,
      ampm: false,
      value: displayAppointmentData[field],
      onChange: date =>
        this.changeAppointment({
          field: [field],
          changes: date
            ? date.toDate()
            : new Date(displayAppointmentData[field])
        }),
      inputVariant: "outlined",
      format: "DD/MM/YYYY HH:mm",
      onError: () => null
    });

    const cancelChanges = () => {
      this.setState({
        appointmentChanges: {}
      });
      visibleChange();
      cancelAppointment();
    };

    return (
      <AppointmentForm.Overlay
        visible={visible}
        target={target}
        fullSize
        onHide={onHide}
      >
        <div>
          <div className={classes.header}>
            <IconButton className={classes.closeButton} onClick={cancelChanges}>
              <Close color="action" />
            </IconButton>
          </div>
          <div className={classes.content}>
            <div className={classes.wrapper}>
              <Create className={classes.icon} color="action" />
              <TextField {...textEditorProps("title")} />
            </div>
            <div className={classes.wrapper}>
              <CalendarToday className={classes.icon} color="action" />
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                  label="Start Date"
                  {...pickerEditorProps("startDate")}
                />
                <KeyboardDateTimePicker
                  label="End Date"
                  {...pickerEditorProps("endDate")}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className={classes.wrapper}>
              <EventNoteIcon className={classes.icon} color="action" />
              <TextField {...textEditorProps("type")} />
            </div>
            <div className={classes.wrapper}>
              <Notes className={classes.icon} color="action" />
              <TextField
                ref={x => (this.notes = x)}
                {...textEditorProps("notes")}
                multiline
                rows="6"
              />
            </div>
          </div>
          <div className={classes.buttonGroup}>
            {!isNewAppointment && (
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={() => {
                  visibleChange();
                  this.commitAppointment("deleted");
                }}
              >
                Delete
              </Button>
            )}
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={() => {
                visibleChange();
                applyChanges();
              }}
            >
              {isNewAppointment ? "Create" : "Save"}
            </Button>
          </div>
        </div>
      </AppointmentForm.Overlay>
    );
  }
}

const AppointmentFormContainer = withStyles(containerStyles, {
  name: "AppointmentFormContainer"
})(AppointmentFormContainerBasic);

const styles = theme => ({
  addButton: {
    position: "absolute",
    bottom: theme.spacing(1) * 3,
    right: theme.spacing(1) * 4
  }
});

class Calender extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      currentDate: date,
      confirmationVisible: false,
      editingFormVisible: false,
      deletedAppointmentId: undefined,
      editingAppointment: undefined,
      previousAppointment: undefined,
      addedAppointment: {},
      startDayHour: 0,
      endDayHour: 24,
      isNewAppointment: false
    };

    var that = this;
    $.ajax({
      url: "/Appointments",
      type: "GET",
      dataType: "JSON",
      success: function(data) {
        that.setState({ data: data });
        console.log("get", that.state.data);
      },
      error: function(err) {
        console.log(err);
      }
    });

    this.toggleConfirmationVisible = this.toggleConfirmationVisible.bind(this);
    this.commitDeletedAppointment = this.commitDeletedAppointment.bind(this);
    this.toggleEditingFormVisibility = this.toggleEditingFormVisibility.bind(
      this
    );

    this.commitChanges = this.commitChanges.bind(this);
    this.onEditingAppointmentChange = this.onEditingAppointmentChange.bind(
      this
    );
    this.onAddedAppointmentChange = this.onAddedAppointmentChange.bind(this);
    this.appointmentForm = connectProps(AppointmentFormContainer, () => {
      const {
        editingFormVisible,
        editingAppointment,
        data,
        addedAppointment,
        isNewAppointment,
        previousAppointment
      } = this.state;

      const currentAppointment =
        data.filter(
          appointment =>
            editingAppointment && appointment._id === editingAppointment._id
        )[0] || addedAppointment;
      const cancelAppointment = () => {
        if (isNewAppointment) {
          this.setState({
            editingAppointment: previousAppointment,
            isNewAppointment: false
          });
        }
      };

      return {
        visible: editingFormVisible,
        appointmentData: currentAppointment,
        commitChanges: this.commitChanges,
        visibleChange: this.toggleEditingFormVisibility,
        onEditingAppointmentChange: this.onEditingAppointmentChange,
        cancelAppointment
      };
    });
  }

  componentDidUpdate() {
    this.appointmentForm.update();
    this.setState({data: this.props.data});
  }

  onEditingAppointmentChange(editingAppointment) {
    this.setState({ editingAppointment });
  }

  onAddedAppointmentChange(addedAppointment) {
    this.setState({ addedAppointment });
    const { editingAppointment } = this.state;
    if (editingAppointment !== undefined) {
      this.setState({
        previousAppointment: editingAppointment
      });
    }
    this.setState({ editingAppointment: undefined, isNewAppointment: true });
  }

  setDeletedAppointmentId(_id) {
    this.setState({ deletedAppointmentId: _id });
  }

  toggleEditingFormVisibility() {
    const { editingFormVisible } = this.state;
    this.setState({
      editingFormVisible: !editingFormVisible
    });
  }

  toggleConfirmationVisible() {
    const { confirmationVisible } = this.state;
    this.setState({ confirmationVisible: !confirmationVisible });
  }

  commitDeletedAppointment() {
    this.setState(state => {
      const { data, deletedAppointmentId } = state;
      const nextData = data.filter(
        appointment => appointment._id !== deletedAppointmentId
      );

      return { data: nextData, deletedAppointmentId: null };
    });
    this.toggleConfirmationVisible();
  }
  // function for the editing and deletion
  commitChanges({ added, changed, deleted }) {
    this.setState(state => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1]._id + 1 : 0;
        data = [...data, { _id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment._id]
            ? { ...appointment, ...changed[appointment._id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        this.setDeletedAppointmentId(deleted);
        this.toggleConfirmationVisible();
      }
      return { data, addedAppointment: {} };
    });
  }

  render() {
    console.log('this.state.datathis.state.data', this.state.data);
    console.log('this.props', this.props);
    const {
      currentDate,
      data,
      confirmationVisible,
      editingFormVisible,
      startDayHour,
      endDayHour
    } = this.state;
    const { classes } = this.props;

    return (
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState currentDate={currentDate} />
          <EditingState
            onCommitChanges={this.commitChanges}
            onEditingAppointmentChange={this.onEditingAppointmentChange}
            onAddedAppointmentChange={this.onAddedAppointmentChange}
          />
          <IntegratedEditing />
          <DayView startDayHour={0} endDayHour={24} />

          <WeekView startDayHour={startDayHour} endDayHour={endDayHour} />
          <MonthView />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showOpenButton showCloseButton showDeleteButton />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <AppointmentForm
            overlayComponent={this.appointmentForm}
            visible={editingFormVisible}
            onVisibilityChange={this.toggleEditingFormVisibility}
          />
          <DragDropProvider />
        </Scheduler>

        <Dialog open={confirmationVisible} onClose={this.cancelDelete}>
          <DialogTitle>Delete Appointment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this appointment?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.toggleConfirmationVisible}
              color="primary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={this.commitDeletedAppointment}
              color="secondary"
              variant="outlined"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        <Fab
          color="secondary"
          className={classes.addButton}
          onClick={() => {
            this.setState({ editingFormVisible: true });
            this.onEditingAppointmentChange(undefined);
            this.onAddedAppointmentChange({
              startDate: new Date(currentDate).setHours(startDayHour),
              endDate: new Date(currentDate).setHours(startDayHour + 1)
            });
          }}
        >
          <AddIcon />
        </Fab>
      </Paper>
    );
  }
}

export default withStyles(styles, { name: "EditingDemo" })(Calender);